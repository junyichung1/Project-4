import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const NavBar = (props) => {
    let nav = props.user ?
      <>
        <Navbar bg="dark" variant="dark" expand="md" style={{display: "flex", justifyContent: "space-between"}}>
    <Navbar.Brand><img src={require("../images/bet-tracker-logo.png"
     )} height='50px'/></Navbar.Brand>
    <Navbar /><Nav>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">BETS</Nav.Link>
      <Nav.Link href="/schedule">SCHEDULES</Nav.Link>
      <Nav.Link href="/teams">TEAMS</Nav.Link>
      <Nav.Link href="/add">ADD BETS</Nav.Link>
      <Nav.Link href="/" onClick={props.handleLogout}>LOGOUT</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Nav>
  </Navbar>
        {/* <Link to='/schedule' className='NavBar-link'>SCHEDULES</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/teams' className='NavBar-link'>TEAMS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/' className='NavBar-link'>BETS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/add' className='NavBar-link'>ADD BETS</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link> */}
        {/* &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span> */}
      </>
      :
      <div>
        {/* <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link> */}
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand><img src="bet-tracker-logo.png" height='50px'/></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="login">LOG IN</Nav.Link>
      <Nav.Link href="signup">SIGN UP</Nav.Link>
    </Nav>
  
  </Navbar>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };
  
  export default NavBar;