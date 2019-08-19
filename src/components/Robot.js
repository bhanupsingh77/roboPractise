import React,{Component} from 'react';
import SearchBox from '../components/SearchBox';
import RoboMaker from '../components/RoboMaker';

class Robot extends Component{
    constructor(){
        super()
        this.state = {
            searchData:"",
            dataOfUser: []
        }
    }

    fetchAsync = async function (){
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await data.json()
        this.setState({dataOfUser: response});
    };

    componentDidMount(){
        this.fetchAsync();
    }

    onSearch = (event)=> {
        this.setState({searchData: event.target.value});
        console.log(this.state.searchData)
    }

    
    render(){
    return(
        <>
           <SearchBox searchFunction={this.onSearch}/>
           <RoboMaker searchData={this.state.searchData} dataOfUser={this.state.dataOfUser}/>
        </>
    );
    }
  }


export  default Robot; 
