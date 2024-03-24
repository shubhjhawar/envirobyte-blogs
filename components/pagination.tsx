import Link from "next/link";

interface PaginationProp {
    page: number;
    prevPage: number;
    nextPage: number;
    totalPages: number;
}

export default function Pagination({page, prevPage, nextPage, totalPages}:PaginationProp) {
    return (
        <footer>
            {/*  Pagination */}
            <nav className="flex justify-center items-center gap-5 pt-16 m-1" role="navigation" aria-label="Pagination Navigation">
            {page === 1 ? (
                <div  className="opacity-50 inline-flex h-10 min-w-10 justify-center items-center bg-blue-500 px-4 rounded-full text-white" area-disabled="true">Prev</div>
            ) : (
                <Link href={`?page=${prevPage}`} area-label='Previous Page'  className="inline-flex h-10 min-w-10 justify-center items-center bg-blue-500 hover:bg-blue-800 px-4 rounded-full text-white">Prev</Link>
            )}

            {[...Array(totalPages)].map((_, index) => {
                if (
                    index === 0 ||
                    index === totalPages - 1 ||
                    (index >= page - 2 && index <= page + 2)
                ) {
                    return (
                        <Link href={`?page=${index + 1}`}>
                            <div key={index} className={`inline-flex h-10 min-w-10 justify-center items-center ${page==index+1 ? 'bg-blue-800 hover:bg-blue-900' : 'bg-blue-500 hover:bg-blue-800'} px-2 rounded-full text-white transition-colors duration-150 ease-in-out`}>
                                {index + 1}
                            </div>
                        </Link>
                    );
                } else if (index === 1 || index === totalPages - 2) {
                    return (
                        <div key={index} className="inline-flex h-10 min-w-10 justify-center items-center bg-blue-500 px-2 rounded-full text-white hover:bg-blue-800 transition-colors duration-150 ease-in-out">
                            <span>...</span>
                        </div>
                    );
                }
            })}

            {page === totalPages ? (
                <div area-disabled="true" className="opacity-50 inline-flex h-10 min-w-10 justify-center items-center bg-blue-500 px-4 rounded-full text-white">Next</div>
            ) : (
                <Link href={`?page=${nextPage}`} area-label='Next Page' className="inline-flex h-10 min-w-10 justify-center items-center bg-blue-500 hover:bg-blue-800 px-4 rounded-full text-white">Next</Link>
            )}
            </nav>
        </footer>
    )
}