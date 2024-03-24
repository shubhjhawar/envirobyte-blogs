"use client"
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPrinterFill } from "react-icons/bs";
import { LinkedinShareButton } from "react-share";

export const Socials = ({ blogName }: { blogName: string }) => {

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
                className="p-2 text-white bg-blue-600 hover:text-gray-100 hover:bg-blue-800 rounded-md transition duration-150 ease-in-out"
                onClick={handlePrintClick}
            >
                <BsFillPrinterFill className="w-6 h-6 fill-current" title="Print this blog" />
            </button>

            <button
                className="p-2 text-white bg-red-600 hover:text-gray-100 hover:bg-red-700 rounded-full transition duration-150 ease-in-out"
                onClick={handleEmailClick}
            >
                <MdEmail className="w-6 h-6 fill-current" title="Email me" />
            </button>

            {/* need work here */}
            <LinkedinShareButton url={`https://blog.hubspot.com/marketing/how-to-start-a-blog`} title="hello there" summary="this is desc" source="what is that?" >
                <FaLinkedin className="w-10 h-10 text-white bg-blue-800 hover:text-gray-100 hover:bg-blue-900 rounded-md transition duration-150 ease-in-out" title="Share on LinkedIn" />
            </LinkedinShareButton>
        </div>
        
    );
};