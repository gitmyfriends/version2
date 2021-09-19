import React, { Component } from "react";
import fetch from 'isomorphic-fetch';

// login: 'jlhline',
// avatar_url: 'https://avatars.githubusercontent.com/u/80792840?v=4',
// url: 'https://api.github.com/users/jlhline',
// name: null,
// company: null,
// location: null,
// email: null,
//  bio: null,
// public_repos: 4,
// followers: 1,
// following: 0,
// created_at: '2021-03-16T22:01:18Z',

const ProfileCard = props => {
  const { profileInfo, deleteProfile } = props;
  return(
    <div className='profileCard'>
      <img src={profileInfo.avatar_url} width="200" height="200" />
      <br/>
      <p><strong>Name: </strong>{profileInfo.name}</p>
      <p><strong>Company: </strong>{profileInfo.company}</p>          
      <p><strong>Location: </strong>{profileInfo.location}</p>
      <p><strong>Bio: </strong>{profileInfo.bio}</p>
      <p><strong>Email: </strong>{profileInfo.email}</p>
      <p><strong>Public Repos: </strong>{profileInfo.public_repos}</p>
      <p><strong>URL:</strong><a href={profileInfo.url}>{profileInfo.url}</a></p>
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