import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = {
        movies : getMovies(),
        pageSize : 4,
        currentPage : 1
      }

    printObject(){
        console.log(getMovies);
    }

    handleDelete = id => {
        this.setState({movies : this.state.movies.filter(movie => movie._id !== id)});
        console.log(id);
    }

    handleLike = () => {
        
    }

    handlePageChange = page => {
            this.setState({currentPage : page});
    }


    render() { 
        const count  = this.state.movies.length;
        const {movies, pageSize, currentPage} = this.state;
        // const paginatedMoviesArray = movies.slice(pageSize*(currentPage-1),pageSize*currentPage);

        if(count === 0) return <p><i><b>There are no movies in the database</b></i></p>

        return (
            <React.Fragment>
                    <p><i><b>There are {count} movies in the database</b></i></p>
                    <main>
                        <table className="table">
                            <thead className="table-primary">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">NumberInStock</th>
                                    <th scope="col">DailyRentalRate</th>
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
                                    <th><Like onClick={this.handleLike}/></th>
                                    <th><button type="button" className="btn btn-danger" onClick={() => {this.handleDelete(movie._id)}}>Delete</button></th>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </main>
                    <Pagination 
                        itemsCount={count} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        pageChange={this.handlePageChange} />
                </React.Fragment>
            );
    }
}
 
export default Movies;