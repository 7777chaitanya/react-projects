import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        console.log("Counters - render");
        return (          
            <React.Fragment>
                <button
                onClick={this.props.onReset}
                style={{marginLeft:20,marginTop:20}}
                className="btn btn-warning m-2">Reset</button>

                {this.props.counters.map(counter => 
                    <Counter key={counter.id} id={counter.id} value={counter.value} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} />)}              
            </React.Fragment>
        );
    }
}
 
export default Counters;