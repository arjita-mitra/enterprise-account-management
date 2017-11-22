import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css'; 
import Header from './Header';
import SideNav from './SideNav';
import { Route, Switch, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        sideNavClass: state.toggleSideMenuReducer.sideNavClass
    };
}

class AppComp extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(this.props);
    }

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
                        <Route path="/" render={()=><Header sideNavClass={this.props.sideNavClass} />} />
                        <Route path="/" render={()=><SideNav navActiveClass={navActiveClass} currentLocation={this.props.location.pathname} />}/>
                        {shouldRedirect && <Redirect to="/home/dashboard" />}
                    </div>
                </div>
            </div>
        );
    }
}

const App = connect(mapStateToProps, null)(AppComp);
export default App;
