import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import NavBar from './Navbar';
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeEmail = this.onChangeEmail.bind(this);
    onChangePassword = this.onChangePassword.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

    onChangeEmail(value) {
        this.setState({email: value})
    }

    onChangePassword(value) {
        this.setState({password: value})
    }

    handleSubmit() {
        const { email, password } = this.state;
        this.props.dispatch(login(email, password));
    }

    render() {
        const formStyle = this.props.login.isLoggedIn ? {display: 'none'} : {};
        const welcomeStyle = this.props.login.isLoggedIn ? {} : {display: 'none'};
        const loadingStyle = this.props.login.isProcessing ? {} : {display: 'none'};

        return(
            <div className="page-container">
                <NavBar style={welcomeStyle}/>
                <div className="form-container" style={formStyle}>
                    <label>Email</label>
                    <input
                        className="form-input"
                        type='email'
                        placeholder='email'
                        value={this.state.email}
                        onChange={(event) => this.onChangeEmail(event.target.value)}/>
                    <label>Password</label>
                    <input
                        className="form-input"
                        type='password'
                        placeholder='password'
                        value={this.state.password}
                        onChange={(event) => this.onChangePassword(event.target.value)}/>
                    <button className="form-button" onClick={() => this.handleSubmit()}>
                        Submit
                    </button>
                    <p>{this.props.login.error.message}</p>
                </div>
                <div className="welcome-container" style={welcomeStyle}>
                    <p>Welcome {this.props.user.first_name}</p>
                </div>
                <div className="loading-text" style={loadingStyle}>
                    <p>Loading...</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        user: state.user
    }
}

LoginForm = connect(mapStateToProps)(LoginForm)

export default LoginForm;