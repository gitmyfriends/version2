import React, { Component } from "react"; 
const DisplayCard = props => {
    const {displayCard,addProfile} = props;
    const newProfile = () => {
      fetch(`/main/addFriend/${displayCard.login}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(() => {
        
        addProfile(displayCard)
      })
      
    };
    
    if (displayCard) {
      if (displayCard.hasOwnProperty('rejectQuery')) {
        return(
          <div>
          <p><strong>Card already added</strong></p>
          </div>
        )
      } else {
        return(
          <div className='profileCard'>
            <center><img src={displayCard.avatar_url} width="100" height="100" /></center>
            <br/>
            <p><strong>Name: </strong>{displayCard.name}</p>
            <p><strong>Company: </strong>{displayCard.company}</p>          
            <p><strong>Location: </strong>{displayCard.location}</p>
            <p><strong>Bio: </strong>{displayCard.bio}</p>
            <p><strong>Email: </strong>{displayCard.email}</p>
            <p><strong>Public Repos: </strong>{displayCard.public_repos}</p>
            <center><button onClick={newProfile}>Add Card</button></center>
          </div>
        )
      }
    } else {
        return(
            <div>
              <center><p>Click Find to Git new friends!</p></center>
            </div>
        )
    }
  }
export default DisplayCard;