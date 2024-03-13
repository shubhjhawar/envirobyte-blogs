"use client"
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";

export const Socials = () => {

    const handleEmailClick = () => {
        window.location.href = 'mailto:msi@envirobyte.com';
    };

    const handlePrintClick = () => {
        // window.print();
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            // Create a new window for printing
            const printWindow = window.open('', '_blank');
            // Write the article content to the new window
            if (printWindow) {
                printWindow.document.write(articleContent.innerHTML);
                // Close the new window after printing
                printWindow.document.close();
                printWindow.print();
            }
        }
    };

    return (
        <div className="w-full flex items-center justify-center gap-6 mt-4">
            <button 
                className="p-2 text-white bg-gray-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out"
                onClick={handlePrintClick}
            >
                <BsFillPrinterFill className="w-5 h-5 fill-current" title="Print this blog" />
            </button>

            <button
                className="p-2 text-white bg-gray-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out"
                onClick={handleEmailClick}
            >
                <MdEmail className="w-5 h-5 fill-current" title="Email me" />
            </button>

            <Link href="https://linkedin.com/in/shubh-jhawar-069587192" target="_blank" className="p-2 text-white bg-gray-600 hover:text-gray-100 hover:bg-black rounded-full transition duration-150 ease-in-out">
                <FaLinkedin className="w-5 h-5 fill-current" title="LinkedIn" />
            </Link>                              
        </div>
        
    );
};