//import React, { useState , useEffect , useContext} from 'react';
import React from 'react';
import './App.css';

import NewComment from './NewComment'
import Comments from './Comments'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import Teste from './Teste'

import { AuthProvider } from './auth'
import SigninUser from './SignInUserUnico'


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
