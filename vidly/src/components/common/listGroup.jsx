import React from 'react'

const ListGroup = (props) => {
    const {currentItem, items, onItemChange} = props;
    const itemOnly = items.map(item => item.name);
    const itemsList = ["All Genres", ...itemOnly];
    console.log(itemsList);
    return (
        <ul className="list-group">
            {itemsList.map(item => <li key={item} className={currentItem === item ? "list-group-item active" : "list-group-item"} onClick={() => onItemChange(item)}>{item}</li>)}
        </ul>  
    );
}   
 
export default ListGroup;