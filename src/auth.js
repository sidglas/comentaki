import React, { useState , useEffect } from 'react'
import firebase from './firebase'

export const AuthContext = React.createContext()

const useGetUser = () => {
  const[user, setUser] = useState(null)
  useEffect(() => {
  firebase.auth().onAuthStateChanged(currentUser => {
    console.log('parece ter problema com user ', currentUser)
      if (currentUser) {
        setUser(currentUser)
      }else{
        setUser(null)
      }
    })
  }, []) 
  console.log('user ', user)
  return user 
}

const useCreateUser = () => {
  const [state, setState] = useState({
    error: '',
    success:''
  })
  const createUser = (email, passwd) => {
  
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, passwd)
  .then( user => {
    if (user){
      setState({...state, 
      success: 'Ok'
      })
    }
  })
  .catch(err =>{
      setState({...state, 
      error: err.message
      })    
    })
  }
return [state, createUser]
}

const useSignInUser = () => {
  const [state, setState] = useState({
    error: '',
    success:''
  })
  const signInUser = (email, passwd) => {
    console.log('havera tentativa')
  firebase
  .auth()
  .signInWithEmailAndPassword(email, passwd)
  .catch(err =>{
      setState({...state, 
      error: err.message
      })    
    })
  }
return [state, signInUser]
}

const signout = () => {
  firebase
  .auth()
  .signOut()
  .then(() => {
      console.log('signout')
  })
  
}



export const AuthProvider = ({children}) => {
  const user = useGetUser()
  const[createUserState, createUser] = useCreateUser()
  const[signInUserState, signInUser] = useSignInUser()
  return (
    <AuthContext.Provider value={{ 
      user, 
      createUser:{
        createUserState, createUser 
      },
      signInUser:{
        signInUser, signInUserState 
      },      
      signout
    }}>
      {children}
    </AuthContext.Provider>
  )    
}

 