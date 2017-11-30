import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css'; 
import Header from './Header';
import SideNav from './SideNav';
import Logo from './Logo';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        heightClassName: state.toggleSideMenuReducer.heightClassName,
        sideNavClass: state.toggleSideMenuReducer.sideNavClass
    };
}

class AppComp extends Component {
    render() {
        const {match} = this.props;
        let shouldRedirect = match.url === window.location.pathname;
        let navActiveClass = 'active';

        if(this.props.sideNavClass === "nav-sm") {
            navActiveClass = "active-sm"; 
        }
        
        return (
            <div className={this.props.sideNavClass}>
                <div className="container body">
                    <div className="main_container">
                        <Route render={()=><Logo />} />
                        <Route render={()=><Header sideNavClass={this.props.sideNavClass} />} />
                        <Route render={({ match }) => <SideNav match={match} navActiveClass={navActiveClass} currentLocation={this.props.location.pathname} />}/>
                        {shouldRedirect && <Redirect to="/home/dashboard" />}
                    </div>
                </div>
            </div>
        );
    }
}

const App = connect(mapStateToProps, null)(AppComp);
export default App;
