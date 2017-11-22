import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileImg from '../../assests/img.jpg';
import {toggleSideMenuAction} from '../actions/toggleSideMenuAction';
import '../../css/header.css';

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSideMenuAction: (newClass) => {
            dispatch(toggleSideMenuAction(newClass));
        }
    };
}

class HeaderComp extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if(this.props.sideNavClass === "nav-md") {
            this.props.toggleSideMenuAction("nav-sm", 'active-sm');
        } else {
            this.props.toggleSideMenuAction("nav-md", 'active');
        }
    }

    render() {
        return ( 
            <div className="top_nav">
                <div className="nav_menu">
                    <nav>
                        <div className="nav toggle">
                            <a id="menu_toggle" onClick={this.toggleMenu}><i className="fa fa-bars"></i></a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a aria-expanded="false" className="user-profile dropdown-toggle" 
                                    data-toggle="dropdown" href="">
                                    <img alt="profile" src={ProfileImg} />
                                    <span className="user-name">Karthik P R</span>
                                    <span className="user-title">Accounts Manager</span>
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu pull-right">
                                    <li>
                                        <a href="">Profile</a>
                                    </li>
                                    <li>
                                        <a href="">Settings</a>
                                    </li>
                                    <li>
                                        <a href="">Help</a>
                                    </li>
                                    <li>
                                        <a href="http://karthik.jivox.com/studio/eam/production/login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown" role="presentation">
                                <a aria-expanded="false" className="dropdown-toggle info-number" 
                                    data-toggle="dropdown" href="">
                                    <i className="fa fa-envelope-o"></i> 
                                    <span className="badge bg-green">6</span></a>
                                <ul className="dropdown-menu list-unstyled msg_list" id="menu1" role="menu">
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img alt="" src="../assets/img.jpg" />
                                            </span> 
                                            <span>
                                                <span>Karthik P R</span> 
                                                <span className="time">3 mins ago</span>
                                            </span> 
                                            <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem augue...</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img alt="" src="../assets/img.jpg" />
                                            </span> 
                                            <span>
                                                <span>Karthik P R</span> 
                                                <span className="time">3 mins ago</span>
                                            </span> 
                                            <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem augue...
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img alt="" src="../assets/img.jpg" />
                                            </span> 
                                            <span>
                                                <span>Karthik P R</span> 
                                                <span className="time">3 mins ago</span>
                                            </span> 
                                            <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem augue...</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="image">
                                                <img alt="" src="../assets/img.jpg" />
                                            </span> 
                                            <span>
                                                <span>Karthik P R</span> 
                                                <span className="time">3 mins ago</span>
                                            </span> 
                                            <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget sem augue...</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="text-center">
                                            <a><strong>See All Notifications</strong> <i className="fa fa-angle-right"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </div> 
        );
    }
}

const Header = connect(null, mapDispatchToProps)(HeaderComp);
export default Header;
