import React, { useState , useEffect , useContext} from 'react';
import './App.css';

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'

import { AuthProvider } from './auth'
import SigninUser from './SignInUser'

function App() {
  //const[visible, toggle] = useState(true)
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />

        <SigninUser />
        <UserInfo />
      </div>
    </AuthProvider>
  )
}
export default App;
