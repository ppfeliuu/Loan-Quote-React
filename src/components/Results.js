import React from 'react';

const Results = ({total, time, quantity}) => {
   
    return (
        <div className="u-full-width resultado">
            <h2>Quote</h2>
            <p>The requested amount was: € {quantity}</p>
            <p>To pay in: {time} Months</p>
            <p>Total to pay: € {total}</p>
            <p>Monthly fee: € {(total / time).toFixed(2)}</p>
        </div>
    );
};

export default Results;