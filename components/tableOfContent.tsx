"use client"
import { useEffect, useState } from 'react';

export default function TableOfContent(content: any) {
    const [tocItems, setTocItems] = useState<any>([]);
    const [expanded, setExpanded] = useState<boolean>(false);

    const getIndex = (heading: string | null) => {
        if (!heading) return null;
        return heading.toLowerCase().replace(/\s+/g, '-');
    }

    useEffect(() => {
        const extractTocItems = () => {
            const content = document.getElementById('content');
            if (content) {
                const headings = content.querySelectorAll('a');
                const items = Array.from(headings).map((heading, index) => ({
                    id: `heading-${index}`,
                    title: heading.textContent,
                    index: getIndex(heading?.textContent),
                }));
                setTocItems(items);
            }
        };

        extractTocItems();
    }, []);

    const handleLinkClick = (index: string) => {
        const heading = document.getElementById(index);
        if (heading) {
            window.scrollTo(0, heading.offsetTop - 100)
        }
    };

    return (
        <aside className={`fixed top-1/3 left-0 w-42 z-10 px-4 py-2 cursor-pointer ${expanded ? 'max-h-full' : 'max-h-10'} transition-max-height duration-1000 ease-in-out bg-gray-200 rounded-r-xl`}>
            <nav className="space-y-4">
                <h3 className={`text-lg font-semibold ${expanded ? 'mb-2' : 'mb-0'}`} onClick={() => setExpanded(!expanded)} title={expanded ? "" : "table of contents"}>
                    {expanded ? 'Table of Contents' : (
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 24 24">
                            <path fill="black" d="M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z" />
                        </svg>
                    )}
                </h3>
                {expanded && (
                    <ul className='space-y-2'>
                        {tocItems.map((item: any) => (
                            <li key={item.id}>
                                <p onClick={() => handleLinkClick(item.index)} className="block text-md hover:underline cursor-pointer" data-aos="fade-down" data-aos-delay="100">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </aside>
    );
}
