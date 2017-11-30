import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from '../../dashboard/components/Dashboard';
import AccountInfo from '../../dashboard/components/AccountInfo';
import RecentProject from '../../dashboard/components/RecentProjects';
import Activities from '../../dashboard/components/Activities';
import ManageSale from '../../support/components/ManageSale';
import AssociateSale from '../../support/components/AssociateSale';
import Logo from './Logo';
import '../../css/sidenav.css';
import menuObject from '../conf.json';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.splitSpace = this.splitSpace.bind(this);
        let menuArr = [];

        menuObject.SideMenu.map((menuDetail, index) => {
            let menuState = (menuDetail.menu.menuName === 'Home') ? 'active' : 'inactive';
            let navClass = (menuDetail.menu.menuName === 'Home') ? 'nav child_menu slidedown' : 'nav child_menu no-display';
            let iClass = ''

            switch(menuDetail.menu.menuName) {
                case 'Accounts':
                    iClass = 'fa fa-table'
                    break;
                case 'People':
                    iClass = 'fa fa-users'
                    break;
                case 'Reports':
                    iClass = 'fa fa-line-chart'
                    break;
                case 'Support':
                    iClass = 'fa fa-info-circle'
                    break;
                default:
                    iClass = 'fa fa-home'
            }

            menuArr.push({
                menuName: menuDetail.menu.menuName,
                menuStatus: menuState,
                ulSidenavClass: navClass,
                iClass: iClass,
                child: menuDetail.menu.child
            })

            return menuArr
        });

        this.state = {
            menuState: menuArr,
            navSize: 'nav-md'
        }
    }

    // on menu toggle change class from active to active-sm viceversa & close side menu on toggle
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.navActiveClass !== this.props.navActiveClass) {
            let menuStateDup = this.state.menuState.slice();
            let currentNavSize = '';
            
            let itemToUpdate = menuStateDup.find((element) => {
                return ( element.menuStatus === 'active' || element.menuStatus === 'active-sm' )
            });

            if ( itemToUpdate && ( itemToUpdate.menuStatus === 'active' || itemToUpdate.menuStatus === 'active-sm') ) {
                itemToUpdate.menuStatus = this.props.navActiveClass;
            } 

            if(this.props.navActiveClass === 'active-sm') {
                currentNavSize = 'nav-sm';
                itemToUpdate.ulSidenavClass = "nav child_menu height-zero";
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
            if(name.menuName !== menuClicked || name.menuStatus === 'active') {
                return {
                    ...name,
                    menuStatus: 'inactive',
                    ulSidenavClass: 'nav child_menu slideup'
                }
            } else if(this.state.navSize === "nav-sm") {
                return {
                    ...name,
                    menuStatus: 'active',
                    ulSidenavClass: 'nav child_menu block-display slidedown'
                }
            } else {
                return {
                    ...name,
                    menuStatus: 'active',
                    ulSidenavClass: 'nav child_menu slidedown'
                }
            }
        })}))
    }

    splitSpace(elem) {
        if(elem.indexOf(' ') !== -1) {
            elem = elem.split(' ');
            elem = elem[0];
        }
        return elem;
    }

    render() {
        let currentLocation = this.props.currentLocation;
        currentLocation = currentLocation.substr(currentLocation.lastIndexOf('/') + 1);

        return (
            <div className="nav_content">
                <div className="col-md-3 left_col left-navigation">
                    <div className="left_col scroll-view">
                        <div className="main_menu_side hidden-print main_menu" id="sidebar-menu">
                            <div className="menu_section active">
                                <ul className="nav side-menu">
                                    {
                                        this.state.menuState.length ? this.state.menuState.map((menuDetail, index) => {
                                            let childMenu = menuDetail.child, firstChild;

                                            if(menuDetail.child.length) {
                                                firstChild = menuDetail.child[0].toLowerCase();
                                                firstChild = this.splitSpace(firstChild);
                                            }
                                            
                                            let parentPath = '/' + menuDetail.menuName.toLowerCase() + '/' + firstChild;
                                            let self = this;
                                            
                                            return (
                                                <li key={index} className={menuDetail.menuStatus}>
                                                    <NavLink to={parentPath} 
                                                        onClick={() => this.handleClick(menuDetail.menuName)}>
                                                        <i className={menuDetail.iClass}></i> {menuDetail.menuName} 
                                                        <span className="fa fa-chevron-down"></span>
                                                    </NavLink>
                                                    <ul key={index} className={menuDetail.ulSidenavClass}>
                                                        {
                                                            childMenu.length ? 
                                                                childMenu.map(function (child, childIndex) {
                                                                    let childName = self.splitSpace(child).toLowerCase();
                                                                    let childPath = '/' + menuDetail.menuName.toLowerCase() + '/'+childName;
                                                                    
                                                                    return(
                                                                        <li className={currentLocation === childName ? 'current-page' : ''} key={childIndex}>
                                                                            <NavLink to={childPath}>{child}</NavLink>
                                                                        </li>
                                                                    )
                                                                }) : ''
                                                        }
                                                    </ul>
                                                </li>
                                            )
                                        }) : ''
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <Switch>
                        <Route exact path="/home/dashboard" component={Dashboard}/>
                        <Route path="/home/account" component={AccountInfo}/>
                        <Route path="/home/activities" component={Activities}/>
                        <Route path="/home/recent" component={RecentProject}/>
                        <Route path="/support/manage" component={ManageSale}/>
                        <Route path="/support/associate" component={AssociateSale}/>
                        <Redirect to="/home/dashboard" />
                    </Switch>
                </div>
            </div>
        );
    }
}
export default SideNav;