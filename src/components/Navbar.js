import React, { Component } from 'react';
import {MainContext} from '../context/MainContext';
import './Navbar.css';

import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.png';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  componentDidMount = () => {

  }

  toggleMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    const {isMobile} = this.context;
    const {menuOpen} = this.state;

    return (
      <div className='navbar-container'>
        <div className={`navbar-content ${menuOpen && 'menu-open'}`}>
          <div className='mobile-navbar-layout'>
            <div className='navbar-logo'><Link to="/">Playground</Link></div>
            {isMobile && <img id='menu-icon' onClick={this.toggleMenu} src={!menuOpen ? menuIcon : closeIcon} alt='menu-icon'/>}
          </div>
          {(!isMobile || menuOpen) &&
            <div className='navbar-links'>
              <Link to="/sudoku" onClick={this.toggleMenu}>Sudoku</Link>
              <Link to="/rubiks" onClick={this.toggleMenu}>Rubik's Cube</Link>
              <Link to="/towers" onClick={this.toggleMenu}>Towers</Link>
              <Link to="/chess" onClick={this.toggleMenu}>Chess</Link>
              {/* <Link to="/workouts" onClick={this.toggleMenu}>WORKOUTS</Link>
              <Link to="/statistics" onClick={this.toggleMenu}>STATISTICS</Link>
              <Link to="/about" onClick={this.toggleMenu}>ABOUT</Link> */}
            </div>}
        </div>
      </div>
    );
  }
}

Navbar.contextType = MainContext;
export default Navbar;

