import React, { Component } from 'react'

class Counter extends Component { 
    render() {         
        let { value, onIncrement, onDelete, id, onDecrement} = this.props;
        return (
            <div className="row">
                <div className="col-1">
                {/* // <div class="container"> */}
                {/* //     <div class="row"> */}
                {/* //         <div class="col"> */}
                            <span 
                            className={this.getBadgeClasses()}
                            style={{fontSize:30}}
                            >
                                {value}
                            </span>
                            </div>
                        {/* // </div> */}

                        {/* // <div class="col"> */}
                        <div className="col m-1">
                            <button className="btn btn-secondary btn-sm" onClick={() => onIncrement(id)}>+</button>

                            <button type="button" className="btn btn-secondary btn-sm" style={{marginLeft: 10}} onClick={() => onDecrement(id)} disabled={value===0 ? 'disabled' : ""}>-</button>

                            <button 
                            className="btn btn-danger btn-sm" 
                            style={{marginRight:10,marginLeft:10}} 
                            onClick={() => onDelete(id)}
                            >x
                            </button>

                        {/* // </div> */}
                    {/* // </div> */}
                {/* // </div>    */}
                </div>
            </div>      
        );
    }

    getBadgeClasses() {
        let classes = "badge m-1 bg-";
        classes += (this.props.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;