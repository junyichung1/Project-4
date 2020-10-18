import React from 'react';

// function formatNum(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

function TotalEarnings(props) {
    
    // let total = 0
    // function calculateEarnings() {
    //     return total += props.bets.earnings
    // }
    return (
        <div>Total Earnings: ${props.formatNum(props.bets.map( bet => bet.earnings).reduce((total, num) => total + parseFloat(num.toFixed(2)), 0))}</div>
        
    )
}


export default TotalEarnings;