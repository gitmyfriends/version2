import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

const ProfileCard = props => {
  const { index ,profileInfo, deleteProfile } = props;
  const removeProfile = () => {
    console.log(index)
    deleteProfile(index);
  };
  return(
    <div className='profileCard'>
      <center><img src={profileInfo.avatar_url} width="100" height="100" /></center>
      <br/>
      <p><strong>Name: </strong>{profileInfo.name}</p>
      <p><strong>Company: </strong>{profileInfo.company}</p>          
      <p><strong>Location: </strong>{profileInfo.location}</p>
      <p><strong>Bio: </strong>{profileInfo.bio}</p>
      <p><strong>Email: </strong>{profileInfo.email}</p>
      <p><strong>Public Repos: </strong>{profileInfo.public_repos}</p>
      <center><button onClick={removeProfile}>Delete Card</button></center>
    </div>
  )
}

export default ProfileCard;














  
