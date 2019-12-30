import React, { useState , useContext}  from 'react'

import { useDatabasePush }  from './database'
import firebase from './firebase'
import { AuthContext } from './auth'

const NewComment = () => {
    const[, save] = useDatabasePush('comments')
    const[comment, setComment] = useState('')

    const auth = useContext(AuthContext)
 
    if (auth.user === null) {
      return null
    }

//    githubUser: auth.signInUser.signInUserState.imageUrl ||
//    auth.createUser.createUserState.imageUrl

  const { uid, displayName} = auth.user
  /*
  console.log('SID NAO SEJA OTÁRIO ', auth.user)
  console.log('SID NAO SEJA OTÁRIO ', auth.user.da)
  console.log('SID NAO SEJA OTÁRIO ', auth.user.email)
  */

  const { photoURL } = auth.user
  console.log('SID NAO SEJA OTÁRIO FOTO ', photoURL )

  const [alternativeDisplayName] = auth.user.email.split('@')
  /*
  console.log('VeJaMoS o CONTEXT URL no SIGNIN', auth.signInUser.signInUserState.imageUrl)  
  console.log('VeJaMoS o CONTEXT URL no CREATE', auth.createUser.createUserState.imageUrl) 
  */ 
    const createComment = () => {
      if (comment !== '') {
        save({
          content: comment,
          createdAt:firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: uid,
            name: displayName || alternativeDisplayName,
            githubUser: photoURL 
          }
        })
        setComment('')
      }
    }
    return (
      <div>
      <section className="wrapper">
      <div className="inner">

      <textarea  className='col-sm-11 col-md-11' value={comment} onChange={evt => setComment(evt.target.value)}/>      
 
  
        <div className='align-center container mt-50'>
        <span className='col-sm-1 col-md-3' />
        <div className='col-sm-10 col-md-6' >
          <button  className='btn btn-success' onClick={createComment}> Comentar</button>
        </div>
        <span className='col-sm-1 col-md-3' />
        </div>

        </div>    
        </section>
 
      </div>
    )
  }
  export default NewComment