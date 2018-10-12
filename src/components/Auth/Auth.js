import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userUpdate} from '../../ducks/reducer';



class Auth extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            newUser: [],
            user: []
        }
        this.handleUsername = this.handleUsername.bind(this)
        this.registerUser = this.registerUser.bind(this)
    }
    
    componentDidMount(){
        axios.get()
    }

    handleUsername(value){
        this.setState({username: value})
    }
    handlePassword(value){
        this.setState({password: value})
    }
    registerUser(){
        const {username, password} = this.state
        axios.post('/api/register', {username, password})
        .then((res)=>{
            userUpdate(res.data)
        })
    }
    loginUser(){
        const {username, password} = this.state
        axios.post('/api/login', {username, password})
        .then((res)=>{
            userUpdate(res.data)
        })
    }

    render(){
        return(
            <div>
                <input type='text' placeholder='Username' onChange={(e)=> this.handleUsername(e.target.value)}/>
                <input type='text' placeholder='Password' onChange={(e)=> this.handlePassword(e.target.value)}/>
                <Link to='/dashboard'>
                <button onClick={(e)=> this.loginUser(e.target.value)}>Login</button>
                </Link>
                <Link to='/dashboard'>
                <button onClick={(e)=> this.registerUser(e.target.value)}>Register</button>
                </Link>
            </div>
        )
    }
}

export default connect(null, {userUpdate})(Auth);