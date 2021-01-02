import Axios from 'axios';
import React, { Component } from 'react';

class Signup extends Component {
    state = {
        student: {
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            telephone:'',
            password:''
        }
    }

    handleSubmit = () => {
        Axios.post('http://localhost:8080/submitStudentDetails', this.state.student)
        .then(response => {
            // Navigate to thank you page
            this.props.history.push('/thank-you');
        }).catch(error => {
            //Display error message on screen 
        });
    }


    handleChange = (event) => {
        const value = event.target.value;
        const name =  event.target.name;
        const tempStudent = {...this.state.student}
       // student.firstName  === studnet['firstName']
        tempStudent[name] = value;
        this.setState(
            {
                student: tempStudent
            }
        );
    }

    render() {

        return (
            <div className="container sign-up-container">
                <h2>Sign up below!!!</h2>
                <form>
                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="firstName" value={this.state.student.firstName} className="form-control" placeholder="First Name" aria-label="First Name" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="lastName" value={this.state.student.lastName} className="form-control" placeholder="Last Name" aria-label="Last Name" />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="telephone" value={this.state.student.telephone} className="form-control" placeholder="Telephone"  />
                        </div>
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="age" value={this.state.student.age} className="form-control" placeholder="Age" />
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col">
                            <input type="text" onChange={this.handleChange} name="email" value={this.state.student.email} className="form-control" placeholder="Email"  />
                        </div>
                        <div className="col">
                            <input type="password" onChange={this.handleChange} name="password" value={this.state.student.password} className="form-control" placeholder="Password" />
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button onClick={this.handleSubmit} class="btn btn-primary teal text-color" type="button">Sign up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;