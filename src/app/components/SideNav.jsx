import React, { Component } from 'react';
import { NavLink, Route} from 'react-router-dom';
import HomeMain from '../../dashboard/components/HomeMain';
import Dashboard from '../../dashboard/components/Dashboard';
import AccountInfo from '../../dashboard/components/AccountInfo';
import RecentProject from '../../dashboard/components/RecentProjects';
import Activities from '../../dashboard/components/Activities';
import ManageSale from '../../support/components/ManageSale';
import AssociateSale from '../../support/components/AssociateSale';
import Logo from './Logo';
import '../../css/sidenav.css';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            menuState: [
                {
                    menuName: 'homeMenuStatus',
                    homeMenuStatus: 'active',
                    ulSidenavClass: "nav child_menu slidedown"
                },
                {
                    menuName: 'accountMenuStatus',
                    accountMenuStatus: 'inactive',
                    ulSidenavClass: "nav child_menu no-display"
                },
                {
                    menuName: 'peopleMenuStatus',
                    peopleMenuStatus: 'inactive',
                    ulSidenavClass: "nav child_menu no-display"
                },
                {
                    menuName: 'reportMenuStatus',
                    reportMenuStatus: 'inactive',
                    ulSidenavClass: "nav child_menu no-display"
                },
                {
                    menuName: 'supportMenuStatus',
                    supportMenuStatus: 'inactive',
                    ulSidenavClass: "nav child_menu no-display"
                }
            ],
            navSize: 'nav-md'
        }
    }
    
    // on menu toggle change class from active to active-sm viceversa & close side menu on toggle
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            let menuStateDup = this.state.menuState.slice();
            let thisMenu, currentNavSize = '';
            
            let itemToUpdate = menuStateDup.find((element) => {
                thisMenu = element.menuName;
                return ( element[thisMenu] === 'active' || element[thisMenu] === 'active-sm' )
            });

            if ( itemToUpdate && ( itemToUpdate[thisMenu] === 'active' || itemToUpdate[thisMenu] === 'active-sm') ) {
                itemToUpdate[thisMenu] = this.props.navActiveClass;
            } 

            if(this.props.navActiveClass === 'active-sm') {
                currentNavSize = 'nav-sm';
            } else if(itemToUpdate) {
                itemToUpdate.ulSidenavClass = 'nav child_menu slidedown';
            }

            this.setState({
                menuState: menuStateDup,
                navSize: currentNavSize
            });
        }
    }

    handleClick(menuClicked) {
        this.setState((prevState) => ({menuState: prevState.menuState.map((name, index) => {
            let thisMenu = name.menuName;

            if(name.menuName !== menuClicked || name[thisMenu] === 'active') {
                return {
                    ...name,
                    [thisMenu]: 'inactive',
                    ulSidenavClass: 'nav child_menu slideup'
                }
            } else if(this.state.navSize === "nav-sm") {
                return {
                    ...name,
                    [thisMenu]: 'active',
                    ulSidenavClass: 'nav child_menu block-display slidedown'
                }
            } else {
                return {
                    ...name,
                    [thisMenu]: 'active',
                    ulSidenavClass: 'nav child_menu slidedown'
                }
            }
        })}))
    }

    render() {
        let currentLocation = this.props.currentLocation;
        currentLocation = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);

        console.log(currentLocation);

        return (
            <div>
                <div className="col-md-3 left_col">
                    <div className="left_col scroll-view">
                        <Logo />
                        <div className="clearfix"></div>
                        {/* side bar menu */}
                        <div className="main_menu_side hidden-print main_menu" id="sidebar-menu">
                            <div className="menu_section active">
                                <ul className="nav side-menu">
                                    <li className={this.state.menuState[0].homeMenuStatus}>
                                        <NavLink to="/home/dashboard" onClick={() => this.handleClick('homeMenuStatus')}><i className="fa fa-home"></i> Home <span className="fa fa-chevron-down"></span></NavLink>
                                        <ul className={this.state.menuState[0].ulSidenavClass}>
                                            <li className={currentLocation === "dashboard" ? 'current-page' : ''}>
                                                <NavLink to="/home/dashboard">Dashboard</NavLink>
                                            </li>
                                            <li className={currentLocation === "activities" ? 'current-page' : ''}>
                                                <NavLink to="/home/activities">Activities</NavLink>
                                            </li>
                                            <li className={currentLocation === "account" ? 'current-page' : ''}>
                                                <NavLink to="/home/account">Account Info</NavLink>
                                            </li>
                                            <li className={currentLocation === "projects" ? 'current-page' : ''}>
                                                <NavLink to="/home/projects">Recent Projects</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.menuState[1].accountMenuStatus}>
                                        <a onClick={() => this.handleClick('accountMenuStatus')}><i className="fa fa-table"></i> Accounts <span className="fa fa-chevron-down"></span></a>
                                        <ul className={this.state.menuState[1].ulSidenavClass}>
                                            <li className="current-page">
                                                <a href="http://karthik.jivox.com/studio/eam/production/revenueReport.php">Revenue Report</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form_buttons.html">Directory Listing</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form_buttons.html">SOW</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form_buttons.html">Summary</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form.html">Zero CPM</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form_advanced.html">Missing Sales Representatives</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/form_validation.html">Do Not Bill - Placements</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.menuState[2].peopleMenuStatus}>
                                        <a onClick={() => this.handleClick('peopleMenuStatus')}><i className="fa fa-users"></i> People <span className="fa fa-chevron-down"></span></a>
                                        <ul className={this.state.menuState[2].ulSidenavClass}>
                                            <li className="current-page">
                                                <a href="http://karthik.jivox.com/studio/eam/production/general_elements.html">Publisher Price Details</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/media_gallery.html">Campaign IO Details</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/typography.html">SOW Details</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/icons.html">Create New IO</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/glyphicons.html">Create New SOW</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.menuState[3].reportMenuStatus}>
                                        <a onClick={() => this.handleClick('reportMenuStatus')}><i className="fa fa-line-chart"></i> Reports <span className="fa fa-chevron-down"></span></a>
                                        <ul className={this.state.menuState[3].ulSidenavClass}>
                                            <li className="current-page">
                                                <a href="http://karthik.jivox.com/studio/eam/production/salesRepresentatives.php">Manage Sales Representatives</a>
                                            </li>
                                            <li>
                                                <a href="http://karthik.jivox.com/studio/eam/production/tables_dynamic.html">Associate Sales Representative</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.menuState[4].supportMenuStatus}>
                                        <NavLink to="/support/manage" onClick={() => this.handleClick('supportMenuStatus')}><i className="fa fa-info-circle"></i> Support <span className="fa fa-chevron-down"></span></NavLink>
                                        <ul className={this.state.menuState[4].ulSidenavClass}>
                                            <li className={currentLocation === "manage" ? 'current-page' : ''}>
                                                <NavLink to="/support/manage">Manage Sales Representatives</NavLink>
                                            </li>
                                            <li className={currentLocation === "associate" ? 'current-page' : ''}>
                                                <NavLink to="/support/associate">Associate Sales Representative</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Route exact path="/home/dashboard" component={Dashboard}/>
                    <Route path="/home/account" component={AccountInfo}/>
                    <Route path="/home/activities" component={Activities}/>
                    <Route path="/home/projects" component={RecentProject}/>
                    <Route path="/support/manage" component={ManageSale}/>
                    <Route path="/support/associate" component={AssociateSale}/>
                </div>
            </div>
        );
    }
}

export default SideNav;
