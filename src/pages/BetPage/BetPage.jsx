import React from "react";
import "./BetPage.css";
import BetItem from "../../components/BetItem/BetItem";

function BetPage(props) {
    return(
        <>
        <h1>Bets</h1>
        <div>
        {props.bets.map(bet => (

        <BetItem bet={bet} key={bet._id}/>
        ))}
        </div>
        </>
    )
}

export default BetPage;