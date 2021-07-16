import React from 'react'
import Like from './common/like';
import { paginate } from '../utils/paginate';

const TableLayout =(props) => {
    const {movies, currentPage, pageSize, onDelete, handleSort} = props;
    return (  
        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th onClick={handleSort("genre")} scope="col">Genre</th>
                                    <th onClick={handleSort("title")} scope="col">Title</th>
                                    <th onClick={handleSort("numberInStock")} scope="col">NumberInStock</th>
                                    <th onClick={handleSort("dailyRental")} scope="col">DailyRentalRate</th>
                                    <th scope="col">Like</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className="table-secondary">
                                {paginate(movies, currentPage, pageSize).map(movie => <tr key={movie._id}>
                                    <th>{movie.title}</th>
                                    <th>{movie.genre.name}</th>
                                    <th>{movie.numberInStock}</th>
                                    <th>{movie.dailyRentalRate}</th>
                                    <th><Like /></th>
                                    <th><button type="button" className="btn btn-danger" onClick={() => {onDelete(movie._id)}}>Delete</button></th>
                                </tr>)
                                }
                            </tbody>
                        </table>
    );
}
 
export default TableLayout;