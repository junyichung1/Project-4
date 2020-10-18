import React from "react";
import './BetItem.css';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap'
import Moment from 'react-moment';

function BetItem(props) {
    function calculateEarning() {

    }

    const dateToFormat = props.bet.createdAt
    return(
        <>
        <Table striped bordered variant="dark">
             
            <tr>
                <td><Moment format="MM/DD/YYYY">{dateToFormat}</Moment></td>
                <td>${props.bet.amount}</td>
                <td>{props.bet.team}</td>
                <td>{props.bet.betType}</td>
                <td>{props.bet.metric}</td>
                <td>{props.bet.odds}</td>
                <td>${props.bet.potential}</td>
                {/* <td>${props.bet.odds > 1 ? ((props.bet.odds/100) * props.bet.amount).toFixed(2) : ((-100/props.bet.odds) * props.bet.amount).toFixed(2)}</td> */}
                <td>{props.bet.outcome}</td>
                <td>${props.bet.earnings}</td>

                <td><Button as={Link} variant="warning" to={{
                    pathname: '/edit',
                    state: {bet: props.bet}
                    }} size="sm" type="submit">Edit</Button></td>
                <td><Button type="submit" variant="danger" size="sm" onClick={() => props.handleDeleteBet(props.bet._id)}>X</Button></td>
                
            </tr>
    
        </Table>
       
        </>
    )
}

export default BetItem;