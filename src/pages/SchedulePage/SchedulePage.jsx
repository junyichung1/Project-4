import React, { Component, useState, useEffect } from "react";
import sportsApi from "../../utils/sports-api";
import ScheduleItem from "../../components/ScheduleItem/ScheduleItem";
import "./SchedulePage.css";


class SchedulePage extends Component {
  constructor() {
    super();
    this.state = {
      schedules: [],
    };
  }

  async componentDidMount() {
    const schedules = await sportsApi.getSchedule();
    this.setState({ schedules: schedules.events });
    console.log(schedules);
  }

  render() {
    return (
      <>
        <h1 className="title">Upcoming Schedule</h1>
        <div className="schedulePageBox">
          {this.state.schedules.map((schedule) => (
            <ScheduleItem schedule={schedule} />
          ))}
        </div>
      </>
    );
  }
}

export default SchedulePage;
