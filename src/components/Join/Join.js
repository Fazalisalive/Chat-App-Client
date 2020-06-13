import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css'

const Join = () => {

    const [name, setName] = useState('') ;
    const [room, setRoom] = useState('') ;

    
    return (
        <div className="joinOuterContainer">
            
            <div className="joinInnerContainer">
                <h1 className="heading_3">Welcome to the Sarae (سراےٴ)!</h1>
                <h3 className="heading">Join</h3>
                <div><input placeholder="Name" className="JoinInput" type="text" onChange={(event) => setName(event.target.value)}/></div>
                <div><input placeholder="Room" className="JoinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/Chat?name=${name}&room=${room}`}>
                <button className="button mt-20" type="submit">Sign In</button>
                </Link>
                <h6 className="heading_2">© 2020 TechSiege, D&D by Fazal Ur Rehman Azad.</h6>
            </div>
        </div>
    )
}

export default Join;