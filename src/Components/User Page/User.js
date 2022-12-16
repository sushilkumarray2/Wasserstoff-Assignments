import React, { useState } from "react";
import { useNavigate } from "react-router";
import './User.css'

function User({ user, setUser, setTopicList }) {

    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        
        if(user === "") setIsVisible(true);

        else{
            const items = JSON.parse(localStorage.getItem(user));
            if(items) setTopicList(items);

            setIsVisible(false);
            navigate('/dashboard');
        }
    }

    return(
        <div className="username">
           <h1>Landing Page</h1>
            <input id="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Username" onKeyDown={(e)=>{if(e.key==='Enter' && user.trim()!=""){handleClick()}}}/>
            <span className="error" style={{visibility:  isVisible ? 'visible' : 'hidden'}}>*Please enter username</span>
        </div>
    )
}

export default User;
