import React from 'react';
import {connect} from 'react-redux';
import { increment,decrement } from '../shared/actions';

class Counter extends React.Component {
    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <h2>Count: {this.props.count}</h2>
                <button className="btn btn-danger" onClick={this.handleIncrement}>+</button>
                <button className="btn btn-danger" onClick={this.handleDecrement}>-</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);