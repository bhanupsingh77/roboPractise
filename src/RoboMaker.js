import React, {Component} from 'react';

class RoboMaker extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataOfUser: []
        }
    }

    componentDidMount(){
        this.fetchAsync();
    }

    fetchAsync = async function (){
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await data.json()
        this.setState({dataOfUser: response});
    };

    render(){
        return(
            <>
            {this.state.dataOfUser.map((element) => {
                return(
                    <React.Fragment key={element.id}>
                    <img src = { `https://robohash.org/${element.username}`} alt="loading"/>
                        <>
                        <h2>{element.name}</h2>
                        <p>{element.username}</p>
                        </>
                    </React.Fragment>
            )})}
            </>

        );
    }
}


export default RoboMaker;