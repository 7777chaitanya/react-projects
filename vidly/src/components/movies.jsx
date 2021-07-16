import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { genres } from '../services/fakeGenreService';
import TableLayout from './tableLayout';

class Movies extends Component {
    state = {
        movies : [],
        genres : [],
        pageSize : 4,
        currentPage : 1,
        currentGenre : "All Genres"
      }


    componentDidMount(){
        this.setState({
            movies : getMovies(),
            genres : genres
        })
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

    handleGenre = (genre) => {
        this.setState({currentGenre : genre});
        if(genre === "All Genres"){
            const movies = getMovies();
            this.setState({movies});
        }

        else{
            const movies = getMovies().filter(movie => movie.genre.name === genre);
            this.setState({movies, currentPage : 1});
        }
    }

    handleSort = (path) => {
        movies = this.state.movies.sort((a,b) => {
            return a[path]-b[path]
        });
        this.setState({movies});
    }
    
    render() { 
        const count  = this.state.movies.length;
        const {movies, pageSize, currentPage, currentGenre, genres} = this.state;
        // const paginatedMoviesArray = movies.slice(pageSize*(currentPage-1),pageSize*currentPage);

        if(count === 0) return <p><i><b>There are no movies in the database</b></i></p>

        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup 
                    onItemChange={this.handleGenre} 
                    currentItem={currentGenre} 
                    items={genres}
                    />

                </div>
                <div className="col"><p><i><b>There are {count} movies in the database</b></i></p>
                    <main>
                        <TableLayout
                            movies={this.state.movies}
                            currentPage={this.state.currentPage}
                            pageSize={this.state.pageSize}
                            onDelete={this.handleDelete}
                            handleSort={this.handleSort}
                        />
                    </main>
                    <Pagination 
                        itemsCount={count} 
                        pageSize={pageSize} 
                        currentPage={currentPage}
                        pageChange={this.handlePageChange} 
                    />
                </div>
                
                    

            </div>
        );
    }
}
 
export default Movies;