import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

const ProfileCard = props => {
  const { index ,profileInfo, deleteProfile } = props;
  const removeProfile = () => {
    console.log("this is profileInfo",profileInfo)
    fetch(`/main/deleteFriend/${profileInfo.login}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    .then(() => {
      deleteProfile(index);
    })
  };
  return(
    <div className='profileCard'>
      <center><img src={profileInfo.avatar_url} width="100" height="100" /></center>
      <br/>
      <p>
        <strong>Name: </strong>{profileInfo.name}
        <br/>
        <strong>Company: </strong>{profileInfo.company}
        <br/>        
        <strong>Location: </strong>{profileInfo.location}
        <br/>
        <strong>Bio: </strong>{profileInfo.bio}
        <br/>
        <strong>Email: </strong>{profileInfo.email}
        <br/>
        <strong>Public Repos: </strong>{profileInfo.public_repos}
      </p>
     
      <div ><center><button type="button" className="btn btn-outline-info"onClick={removeProfile}>Delete Card</button></center></div>

    </div>
  )
}

export default ProfileCard;














  
