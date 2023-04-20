import React, {Component} from "react";


class PracticeComponent extends React.Component{

    state = {counter:0};
    up1 = () => {
        this.setState({counter: this.state.counter + 1})
    }

    up2 = () => {
        this.setState({counter: this.state.counter + 2})
    }

    decrease = () => {
        this.setState({counter: this.state.counter - 2})
    }

    render () {
        const {counter} = this.state;
        return (
            <div>
            <h3>{this.state.counter}</h3>
            <button onClick={this.up1}>+1</button>
            <button onClick={this.up2}>+2</button>
            <hr/>
            <h3>{this.state.counter}</h3>
            <button onClick={this.up1}>Increase</button>
            <button onClick={this.decrease}>Decrease</button>
            </div>
        )
    }
}

export default PracticeComponent;