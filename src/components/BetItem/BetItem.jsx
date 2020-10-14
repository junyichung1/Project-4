import React from "react";
import './BetItem.css';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'

function BetItem(props) {
    return(
        <>
        <Table striped bordered variant="dark">
            
            
            <tr>
                <td>{props.bet.createdAt}</td>
                <td>${props.bet.amount}</td>
                <td>{props.bet.team}</td>
                <td>{props.bet.betType}</td>
                <td>{props.bet.metric}</td>
                <td>{props.bet.odds}</td>
                <td>{props.bet.potential}</td>
                <td>{props.bet.outcome}</td>
                <td>{props.bet.earnings}</td>
                <td><Link to={{
                pathname: '/edit',
                state: {bet: props.bet}
                }}><button type="submit">Edit</button></Link></td>
                <td><button type="submit" onClick={() => props.handleDeleteBet(props.bet._id)}>X</button></td>
                
            </tr>
    
        </Table>
        </>
    )
}

export default BetItem;