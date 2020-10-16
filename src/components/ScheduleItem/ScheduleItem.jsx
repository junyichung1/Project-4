import React from "react";
import './ScheduleItem.css';

function TeamItem(props) {
// console.log(props.team)
    return (
        <>
        <div>{props.schedule.strFilename}</div>
        </>
    )
}

export default TeamItem;