import React, { useState , useEffect } from 'react'
import firebase from './firebase'
import axios from 'axios';

export const AuthContext = React.createContext()

console.log('SERÁ QUE ESTE COMANDO DO AUTH EXECUTA??')

const getGithubData = async (email) => {
  const initPos = email.indexOf('@')
  const emailUser = email.substr(0, initPos)
  console.log('Dentro da  getGithubData  com emailuser  = ', emailUser)
  
  const data =  await axios.get(`https://api.github.com/users/${emailUser}`)
    .then(console.log('Axios OKKKKKKKKKK'))
    .catch(error=> console.log('AXIOS EEEERRO'))
  //Promise.all([data]).then(valores => console.log(valores))
  //console.log(data)

  return  data // emailUser
}


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
  console.log('user retornado da useGetUser', user)
  return user 
}

const useCreateUser = () => {
  
  const [state, setState] = useState({
    error: '',
    success:'',
    imageUrl: ''    
  })

  const createUser = (email, passwd) => {
  firebase
  .auth()
  .createUserWithEmailAndPassword(email, passwd)
  .then(user => {
    console.log('ok no login')
    const gitUser = getGithubData(email)

    Promise.all([gitUser]).then(
       valores => {
         console.log('os valores ', valores)
         console.log(valores[0].data)
         console.log(valores[0].data.avatar_url)
         setState({...state, 
           imageUrl: valores[0].data.avatar_url
         })

         console.log('state do CREATE dentro do Promise all', state) 


        }
      )
    console.log('FORA DO PROMISE ALL')
    console.log('deita ', gitUser.data)
    console.log('CONFORME PREVISTO na CreateUser', gitUser)   
    console.log('state do CREATE ', state) 
   //console.LOG (imageUrl)

  })

  //fim copiado do signin

  /*  Devolver 
  .then( user => {
    if (user){
      setState({...state, 
      success: 'Ok',
      imageUrl:''
      })

//

//

    }

    const gitUser = getGithubData(email)
    console.log('CONFORME PREVISTO na CreateUser', gitUser)


    Promise.all([gitUser]).then(
      valores => {
        console.log('os valores NACREATE', valores)
        console.log(valores[0].data)
        console.log(valores[0].data.avatar_url)
        setState({...state, 
          imageUrl: valores[0].data.avatar_url
        })    
        console.log('state do CREATE dentro do Promise all', state) 


      }
    )

    
  })
  Fim Devolver*/

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
    success:'',
    imageUrl: ''
   })
  const signInUser = (email, passwd) => {
    console.log('havera tentativa')
  firebase
  .auth()
  .signInWithEmailAndPassword(email, passwd)
  .then(user => {
    console.log('ok no login')
    const gitUser = getGithubData(email)

    Promise.all([gitUser]).then(
       valores => {
         console.log('os valores ', valores)
         console.log(valores[0].data)
         console.log(valores[0].data.avatar_url)
         setState({...state, 
           imageUrl: valores[0].data.avatar_url
         })    
         console.log('state do SIGNIN dentro do Promise all', state) 


        }
      )
    console.log('FORA DO PROMISE ALL')
    console.log('deita ', gitUser.data)
    console.log('CONFORME PREVISTO na SigninUser', gitUser)   
    console.log('state do SIGNIN ', state) 
   //console.LOG (imageUrl)
  })
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
        createUser, createUserState 
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

 