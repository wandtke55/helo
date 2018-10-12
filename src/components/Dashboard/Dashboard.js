import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();

        this.state = {
            search: '',
            postbox: true,
            posts: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        axios.get()
    }

    handleSearch(value){
        this.setState({search: value})
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            postbox: value
        })
    }

    render(){
        // let post = this.state.posts.map((posts, index)=>{
            
        // })
        return(
            <div>
                <input type='text' placeholder='Search' onChange={(e)=> this.handleSearch(e.target.value)}/>
                <button>Search</button>
                <button>Reset</button>
                <input type='checkbox' checked={this.state.posts} onChange={this.handleInputChange}/>
            </div>
        )
    }
}

export default Dashboard