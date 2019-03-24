import React, { Component } from 'react';
import './App.css';
import'./blog.css';
import img from './img/Com.jpg';

class App extends Component {
  render() {
    return (
    <div>
        <div id="layout" className="pure-g">
            <div className="sidebar">
                <div className="header">
                    <h1 className="brand-title">A Small Practice</h1>
                    <h2 className="brand-tagline">by B07901031</h2>
                </div>
            </div>
            <div className = "post">
                <h1 className ="content-subhead">
                    This is a small Practice.
                </h1>
                <div className = "post-description">
                    <p >
                        Taught by a handsome Professor and TA.
                    </p>
                    <img src={img} alt="Img" className = "post-avatar" ></img>
                </div>
            </div>
        </div>
        
  
      
  </div>
  
  
  
  
    );
  }
}

export default App;
