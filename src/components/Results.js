import React from 'react';

const Results = (props) => {
   
    return (
        <div className="u-full-width results">
            <h2>Quote</h2>
            <p>The requested amount was: € {props.quantity}</p>
            <p>To pay in: {props.time} Months</p>
            <p>Total to pay: € {props.total}</p>
            <p>Monthly fee: € {(props.total / props.time).toFixed(2)}</p>
        </div>
    );
};

export default Results;