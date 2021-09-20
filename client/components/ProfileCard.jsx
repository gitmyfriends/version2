import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

const ProfileCard = props => {
  const { profileInfo, deleteProfile } = props;

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
      {/* <center><button onClick={deleteProfile}>Delete Card</button></center> */}
    </div>
  )
}

export default ProfileCard;














  
//     this.state = {
//       avatar_url : null,
//       name: null, 
//       login: null,
//       location: null,
//       bio: null, 
//       email: null,
//       organizations: null,
//       company: null,
//       hireable: null,
//       url: null,
//       public_repos: null,
//       repos_url: null
//     }
//   }

//   componentDidMount() {
//     fetch('/main/homepage', {"mode":"no-cors"})
//       .then(res => res.json())
//       // .then(data => {console.log("DATA IN COMPONENT", data); return data})
//       .then(data => {
//         console.log("IN HERE", data);
//         const {
//           avatar_url,
//           name, 
//           login,
//           location,
//           bio, 
//           email,
//           organizations,
//           company,
//           hireable,
//           url,
//           public_repos,
//           repos_url} = data;
//         console.log("THE STATE CURRENTLY", this.state);
//         this.setState({
//           avatar_url,
//           name, 
//           login,
//           location,
//           bio, 
//           email,
//           organizations,
//           company,
//           hireable,
//           url,
//           public_repos,
//           repos_url});
//         console.log("THE NEW STATE", this.state);
//       })
//       // .then(() => console.log("IN HOMEPAGE", ));
//   } 

//   componetDidUpdate() {
//     console.log(this.state);
//   }
//   // async componentDidMount() {
//   //   const fetchedResponse = await fetch('/main/homepage');
//   //   const data = await fetchedResponse.json();
//   //   const {name, followers, following, created_at, public_repos} = data;
//   //   return {name, followers, following, created_at, public_repos};
//   //   // console.log(data);
//   // } 
//   // componentDidMount() {
//   //   console.log("I MOUNTED")
//   // }
//   render() {
//     return(
//       <section>
//         <div><SearchBar /></div>
//         <div className='myCard'>
//           <img src={this.state.avatar_url} width="200" height="200" />
//           <br/>
//           <p><strong>Name: </strong>{this.state.name}</p>
//           <p><strong>Company: </strong>{this.state.company}</p>
//           <p><strong>Location: </strong>{this.state.location}</p>
//           <p><strong>Bio: </strong>{this.state.bio}</p>
//           <p><strong>Email: </strong>{this.state.email}</p>
//           <p><strong>Public Repos: </strong>{this.state.public_repos}</p>
//         </div>
//       </section>
//     )
//     // ) "I made it here!"
//     // return <SearchBar />
//   // }
//   }
// }
// export default Homepage;