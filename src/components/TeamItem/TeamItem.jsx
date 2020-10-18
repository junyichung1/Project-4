import React from "react";
import './TeamItem.css';
import { Image, Card } from 'react-bootstrap'
import TeamSchedulePage from '../../pages/TeamSchedulePage/TeamSchedulePage'

function TeamItem(props) {
    console.log(props.team)
    return (
        <>
        <Card style={{borderColor: 'lightslategray', boxShadow: '1px 2px 5px red'}}><form action={`/schedule/${props.team.idTeam}`}><button><Image style={{backgroundColor: '#EEEEEE'}}src={props.team.strTeamLogo} fluid /></button></form></Card>
        {/* <button>{props.team.strTeam}</button> */}
        </>
    )
}

export default TeamItem;