import React from "react";
import './ScheduleItem.css';
import { Card } from 'react-bootstrap';

function ScheduleItem(props) {
// console.log(props.team)
    return (
        <>
<Card style={{width: '15rem', margin: '5px', boxShadow: '1px 2px 5px red'}}>
  <Card.Img variant="top" src={props.schedule.strThumb} />
  <Card.Body>
    <Card.Title>{props.schedule.strFilename}</Card.Title>
    <Card.Text>
      {props.schedule.strDescriptionEN}
    </Card.Text>
  </Card.Body>
</Card>
        </>
    )
}

export default ScheduleItem;