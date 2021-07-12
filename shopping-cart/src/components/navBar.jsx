import React, { Component } from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        console.log("navBar - render");
        
        return (  
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">There are {this.props.counters.length} counters !</span>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;