import Axios from 'axios';
import React, { Component } from 'react';

class StudentLife extends Component {

    state = {
        students: []
    }
    componentDidMount() {
        Axios.get('http://localhost:8080/findAll')
        .then(response => {
            this.setState(
                {
                    students: response.data
                }
            );
        }).catch(error => {
            //Display some error message
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {this.state.students.map((student, index ) => 
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                            <div className="card-body">
                                <p className="card-text">Name: {student.firstName} {student.lastName}</p>
                                <p className="card-text">Telephone: {student.telephone}</p>
                                <p className="card-text">Email: {student.email}</p>
                                <p className="card-text">Age: {student.age}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Facebook</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">LinkedIn</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )    
                }



                </div>
            </div>
        );
    }
}

export default StudentLife;