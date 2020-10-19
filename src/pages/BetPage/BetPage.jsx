import React from "react";
import "./BetPage.css";
import BetItem from "../../components/BetItem/BetItem";
import TotalEarnings from "../../components/TotalEarnings/TotalEarnings";
import { Table } from 'react-bootstrap'

function BetPage(props) {
  console.log(props.bets)
  let total = 0
  function calculateTotal(total, num) {
    return total += num;
  }
    let bets = props.user ?
      <div>
          <>
        <h1 className='title'>Bets</h1>
        
            <Table striped bordered variant="dark">
              <thead>
                <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Team</th>
                <th>Bet Type</th>
                <th>Metric</th>
                <th>Odds</th>
                <th>Potential</th>
                <th>Outcome</th>
                <th>Earnings</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            </Table>
        {props.bets.map(bet => (
          
        <BetItem bet={bet} key={bet._id} handleDeleteBet={props.handleDeleteBet} 
        formatNum={props.formatNum}
        />
        ))}

        <TotalEarnings bets={props.bets}
        formatNum={props.formatNum}
        />

        
          {/* {props.bets.map(bet => (
            // total += {bet.earnings}

          ))} */}
        
        </>
        
      </div>
      :
      <div style={{display: "grid", justifyItems: "center"}}>
        <h1 className="title">LOG IN TO TRACK YOUR BETS</h1>
        <img src=
        {require("../../components/images/nfl-logo.png")} style={{width: "30%"}}></img>
      </div>;
  
    return (
      <div className='NavBar'>
        {bets}
      </div>
    );
  };
    

export default BetPage;