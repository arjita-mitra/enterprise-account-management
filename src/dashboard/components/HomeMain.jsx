import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class HomeMain extends Component {
    render() {
        return ( 
            <div>
                <li className="current-page">
                    <NavLink to="/home">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/home/activities">Activities</NavLink>
                </li>
                <li>
                    <NavLink to="/home/account">Account Info</NavLink>
                </li>
                <li>
                    <NavLink to="/home/projects">Recent Projects</NavLink>
                </li>
            </div>
            
        
        );
    }
}

export default HomeMain;
