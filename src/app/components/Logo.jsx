import React, { Component } from 'react';
import '../../css/logo.css';

class Logo extends Component {
  render() {
    return (
        <div className="navbar nav_title" style={{border: 0}}>
            <a className="site_title" 
                href="http://karthik.jivox.com/studio/eam/production/index.php">
                <span>Jivox IQ</span>
            </a>
        </div>
    );
  }
}

export default Logo;