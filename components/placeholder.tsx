"use client";

export default function Placeholder({pageName} : {pageName:string}) {
    return (
        <section className="pt-32 pb-12 md:pt-40 md:pb-20">
            <p>This is placeholder page for {pageName}</p>
        </section>
    )
}