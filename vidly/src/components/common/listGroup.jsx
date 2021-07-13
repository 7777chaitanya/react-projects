import React from 'react'
import { genres } from '../../services/fakeGenreService';

const ListGroup = (props) => {
    const genreOnly = genres.map(genre => genre.name);
    const genreList = ["All Genres", ...genreOnly];
    console.log(genreList);
    return (
        <ul className="list-group">
            {genreList.map(genre => <li key={genre} className={props.currentGenre === genre ? "list-group-item active" : "list-group-item"} onClick={() => props.onGenreChange(genre)}>{genre}</li>)}
        </ul>  
    );
}
 
export default ListGroup;