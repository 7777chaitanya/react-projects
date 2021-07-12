export function paginate(movies, currentPage, pageSize){
    return movies.slice(pageSize*(currentPage-1),pageSize*currentPage);
}
