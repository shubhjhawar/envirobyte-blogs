export default function paginationDetails(page:number, totalPosts:number) {
    // how many blogs per page
    const perPage = 3;

    // total pages
    const totalPages = Math.ceil(totalPosts / perPage);

    // starting and ending indices for the current page
    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, totalPosts);

    // prevPage and nextPage
    const prevPage = page - 1 > 0 ? page-1 : 1;
    const nextPage = page + 1;

    return {totalPages, startIndex, endIndex, prevPage, nextPage}
}