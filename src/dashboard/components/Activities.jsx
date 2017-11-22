import React, { Component } from 'react';

class Dashboard extends Component {
    // componentDidMount() {
    //     const { match: { params } } = this.props;
    //     console.log(this.props);
    // }
    render() {
        return ( 
            <div className="col-sm-offset-3 col-sm-8">
                <h1>Recent Activities</h1>
            </div>
        );
    }
}

export default Dashboard;
