"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    first_name:'',
    last_name:'',
    email:'',
    message:'',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e:any) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  };
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    console.log(form)
    setLoading(false);

    emailjs.send(
      'service_yz4634z', 
      'template_z978vcc',
      {
        first_name:form.first_name,
        last_name:form.last_name,
        email:form.email,
        message:form.message,
      },
      "GUVVWu04fZeIdpyBo"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. We will get back to you as soon as possible");
        setForm({
          first_name:'',
          last_name:'',
          email:'',
          message:'',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.Please try again')
      })
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">

        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center pb-12 md:pb-16">
          <h1 className="h1 mb-4">Have a question about Envirobyte?</h1>
          <h2 className="h2">Contact us directly</h2>
        </div>

        {/* Contact form */}
        <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="first_name">First Name <span className="text-red-600">*</span></label>
              <input id="first_name" type="text" name="first_name" value={form.first_name} onChange={handleChange} className="form-input w-full text-gray-800" placeholder="Enter your first name" required />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="last_name">Last Name <span className="text-red-600">*</span></label>
              <input id="last_name" type="text" name="last_name" value={form.last_name} onChange={handleChange}  className="form-input w-full text-gray-800" placeholder="Enter your last name" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
              <input id="email" type="email" name="email" value={form.email} onChange={handleChange}  className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange}  rows={4} className="form-textarea w-full text-gray-800" placeholder="Write your message"></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-4">
            <div className="w-full px-3">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" type="submit">Send</button>
            </div>
          </div>
          <div className="text-sm text-gray-600 mt-4">
            By clicking "send" you consent to allow Envirobyte to store and process the personal information submitted above and agree to our <a className="underline" href="#0">terms and conditions</a> as well as our <a className="underline" href="#0">Privacy Policy</a>.
          </div>
        </form>

      </div>
    </div>
  )
}