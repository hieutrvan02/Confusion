import React, { Component } from "react";
import { Connect, connect } from "react-redux";
import { Form, Control } from "react-redux-form"

class UserForm extends Component {
    handleSubmit(user) {
        console.log(user);
    }
    render() {
        return(
            <Form model="user" onSubmit={(user) => this.handleSubmit(user)}>
                <label>First Name: </label>
                <Control.text model="user.firstName"/>
                <label>Last Name: </label>
                <Control.text model="user.lastName"/>
                <label>Email: </label>
                <Control.text model="user.email"/>
                <button type="submit">Submit</button>
            </Form> 
        );
    }
}

export default connect()(UserForm);