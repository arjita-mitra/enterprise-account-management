import React, { Component } from 'react';

class AccountInfo extends Component {
    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(this.props);
    }
    render() {
        return ( 
            <div className="col-sm-offset-3 col-sm-8">
                <h1>Account Info</h1>
            </div>
        );
    }
}

export default AccountInfo;
