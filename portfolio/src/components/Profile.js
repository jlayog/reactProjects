import React from 'react';
import '../App.css';
import Avatar from '../assets/avatar.png';

const Profile = () => {
    return (
        <div>
            <img src={ Avatar } alt="Profile Picture" className="Avatar"/>
        </div>
    );
}

export default Profile;