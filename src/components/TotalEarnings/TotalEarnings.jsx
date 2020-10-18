import React from 'react';
import './TotalEarnings.css'

function TotalEarnings(props) {
    return (
        <div className="earnings">Total Earnings: ${props.formatNum(props.bets.map( bet => bet.earnings).reduce((total, num) => total + parseFloat(num.toFixed(2)), 0))}</div>
        
    )
}


export default TotalEarnings;