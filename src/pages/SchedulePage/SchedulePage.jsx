import React, { Component, useState, useEffect } from 'react';
import sportsApi from '../../utils/sports-api';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem'

class SchedulePage extends Component {
    constructor() {
    super();
    this.state = {
        schedules: [],

        };
    }

    async componentDidMount() {
            const schedules = await sportsApi.getSchedule();
            this.setState({schedules:schedules.events})
            console.log(schedules)
        }
      

render() {
const allSchedules = this.state.schedules.map(schedule => {
    // console.log(team)
    return <div>
            <ScheduleItem 
            schedule={schedule}
            // key={team.IDteam}
            />
        </div> 
})

    return (
        <>

        <h1>Upcoming Schedule</h1>     
    <div>{allSchedules}</div>             
        </>
)

}
    
}

export default SchedulePage;