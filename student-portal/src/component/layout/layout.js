import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Header from '../header/Header';
import Signup from '../signup/Signup';
import Aboutus from '../aboutus/Aboutus';
import Thankyou from '../thankyou/Thankyou';
import Home from '../home/Home';



class Layout extends Component {
    render() {
        let rotues = (
            <div>
                <Route exact path="/" component={Signup} />
                <Route path="/sign-up" component={Signup} />
                <Route path ="/thank-you" component={Thankyou} />
            </div>
        );
        if(localStorage.getItem("loggedInUser")) {
            rotues = (
                <div>
                    <Route path ="/home" component={Home} />
                    <Route exact path ="/" component={Home} />
                </div>
            );
        }
        return (
            <div>
                <Header {...this.props} />
                {rotues}
                <Route path="/about-us" component={Aboutus} />
            </div>
        );
    }
}

export default withRouter(Layout);