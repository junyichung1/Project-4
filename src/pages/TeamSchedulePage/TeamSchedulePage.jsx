import React, {useState, useEffect } from "react";
import sportsApi from '../../utils/sports-api'

const TeamSchedulePage = props => {
    console.log(props.teamSchedule)
    return (
        
        <div>
            {props.teamSchedule}
        </div>
        
    )
}

export default TeamSchedulePage;