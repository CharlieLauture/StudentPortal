import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        student: {
            email:'',
            password:''
        }
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const tempStudent = {...this.state.student};
        tempStudent[name] = value;
        this.setState(
            {
                student: tempStudent
            }
        );
    }
    handleSubmit = () => {
        Axios.post('http://localhost:8080/login', this.state.student)
        .then(res => {
            //capture login user info
            const email = res.data.email;
            localStorage.setItem('loggedInUser', email);
            //Navigate to home
            this.props.history.push('/home');
        }).catch(error => {
            //Display error message
        })
    }
    signOut = () => {
        localStorage.removeItem("loggedInUser");
        this.props.history.push("/");
    }
    render() {
        let signInSignOut = (
            <form className="d-flex">
                <input onChange={this.handleChange} value={this.state.student.email} name="email" className="form-control me-2" type="text" placeholder="Email" />
                <input onChange={this.handleChange} value={this.state.student.password} name="password" className="form-control me-2" type="password" placeholder="Password" />
                <button onClick={this.handleSubmit} className="btn-width btn btn-outline-success" type="button">Sign In</button>
            </form>
        );
        let navLinks = (
            <li className="nav-item active">
                <Link className="nav-link text-color" aria-current="page" to="/sign-up">Sign Up</Link>
            </li>
        );
        if(localStorage.getItem("loggedInUser")){
            signInSignOut = (
                <form className="d-flex">
                <button onClick={this.signOut} className="btn-width btn btn-outline-success" type="button">Sign Out</button>
            </form>
            );
            navLinks = (
                <li className="nav-item">
                    <Link className="nav-link text-color" aria-current="page" to="/settings" >Settings</Link>
                </li>
            );
        }
        return (
            <div className="mb-5">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark teal">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-color" to="/">Student Portal</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                {navLinks}
                                <li className="nav-item">
                                    <Link className="nav-link text-color" to="/about-us">About Us</Link>
                                </li>
                            </ul>
                            {signInSignOut}
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;