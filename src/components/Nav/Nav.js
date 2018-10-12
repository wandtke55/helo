import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


function Nav(props){
    console.log(props)
    return(
        <div>
            {props.username} {props.profilePic}
            <Link to='/'><button>Home</button></Link>
            <Link to='/post'><button>New Post</button></Link>
            <Link to=''><button>Logout</button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        profilePic: state.profilePic
    }
}

export default connect(mapStateToProps,)(Nav)