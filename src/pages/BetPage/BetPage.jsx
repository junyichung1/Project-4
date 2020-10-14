import React from "react";
import "./BetPage.css";
import BetItem from "../../components/BetItem/BetItem";
import { Table } from 'react-bootstrap'

function BetPage(props) {
    let bets = props.user ?
      <div>
          <>
        <h1>Bets</h1>
        <div>
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
        <BetItem bet={bet} key={bet._id} handleDeleteBet={props.handleDeleteBet} />
        ))}
        </div>
        </>
        
      </div>
      :
      <div>
        No user logged in yet
      </div>;
  
    return (
      <div className='NavBar'>
        {bets}
      </div>
    );
  };
    

export default BetPage;