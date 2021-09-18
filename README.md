<<<<<<< HEAD
Back End
1. Session 
--Option: Use passport to store session cookie,
instead of locally stored token
--Fix expiration property of session cookie
--Log out-->Delete session document and locally
stored token string
--ability to make different user profiles of cards by associating username and password with gh profiles when written to DB

2. User 
--Create user schema
--Create User Controller
---Get,add,delete user
--Not be able to add multiple of the same user

Stretch Features: Robust error handling for unsuccessful crud attemps

Front End
3. Display
-- user objects from github api upon entry
--Redux implementation with container for profile cards similar to star wars, container
for relational chart js, add and delete container on left to remove from db/page
--References for this include marketCards 
--button onhover tab display div of different charts 

Redux
Client Folder
_____________
Actions Folder
-actions.js
----action Creators
Constants Folers
----export action types
Component Folder
_____________
ProfileAdder.jsx
---form submit that takes in a string to create a new profile card object 
-->Compare to Market Creator add location form structure

Profile.jsx
--import actions from actions.js to allow for a delete button, needs to import connect and have connect at bottom for the dispatch
----mapDispatch to props with an action key that corresponds to a dispatch action we've created
--deleteProfile:(id)=>dispatch(actions.deleteProfileActionCreator(id))

---name,company,location,bio,email,num of repos,id

ProfileDisplay.jsx
-need to import profile component at top
---where the array of profile components are rendered

Containers Folder
_________________
ProfileContainer.jsx
--return the profile adder and profile display components
--give the profileadder component one prop that corresponds to another map dispatch to props in this component
----addProfile:(profileName)=>same syntax as above
Main Container.jsx
--hold profile container and profile adder
Reducers Folder
_________________
index.js-->maybe rename
-combine reducers right now just profileReducer
profileReducer.js
Initial State
profileStringArray
profileList-->profile objects
profileReducerFunction
SWITCH:
addProfile
----query GH api for this profile string
----create profileobject with above properties
---make copy of profileList abd push this to there
return update state
deleteProfile
payload will be the index id of the created profile in the array, 
splice or similar on copy and return new state object

App.jsx
_______
render main container 

Entry Point index.js
____________________
import provider,app,store
wrap app.jsx in provider component and give it store property

Store.js
________
where reducers are added to createStore method

Without Oauth
1. Work off of new copies of Janilya's working dev
2. Develop the dashboard page 
---Use localhost 3000 server to render cohort profiles and charts
---
=======
READ ME
>>>>>>> 9e18e976730f9278f9b898cf71f8f0dc43602850
