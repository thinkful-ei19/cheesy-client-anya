import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class Cheeses extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchCheeses())
    }
    render() {
        console.log('this', this.props.cheeses);
        const cheeses = this.props.cheeses.map((cheese, index) => (
            <li key={index}>
                {cheese}
            </li>
        ))

        return(
            <div className="Cheese">
                <header>
                    <h1>Cheesy</h1>
                </header>
                <ul>
                    {cheeses}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return {cheeses: state.cheeses}
    
};

export default connect(mapStateToProps)(Cheeses);
