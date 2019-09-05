import React from 'react';
import '../components/RoboMaker.css';

const RoboMaker = (props) =>{
    return(
        <React.Fragment>
        <h2>Showing results for : {props.searchData}</h2>
        <div className="wrap">
        {props.dataOfUser.map((robot,i) => {
            return(
            robot.name.toLowerCase().includes(props.searchData.toLowerCase()) ?
            <React.Fragment key={robot.id}>
            <div className="robot">
            <img src={`https://robohash.org/${robot.username}`} alt="loading robots"/>
            <p className="text">Name: {robot.name}</p>
            <p className="text">Username: {robot.username}</p>
            </div>    
            </React.Fragment>
            : ""
            )
        })}
        </div>
        </React.Fragment>
    )
}

export default RoboMaker;

