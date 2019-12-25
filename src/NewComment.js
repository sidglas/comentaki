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
  const { uid, displayName} = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')
  console.log('VeJaMoS o CONTEXT URL', auth.signInUser.signInUserState.imageUrl)  
    const createComment = () => {
      if (comment !== '') {
        save({
          content: comment,
          createdAt:firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: uid,
            name: displayName || alternativeDisplayName,
            githubUser: auth.signInUser.signInUserState.imageUrl
          }
        })
        setComment('')
      }
    }
    return (
      <div>
      <section className="wrapper">
      <div className="inner">

      
        <row className='col-sm-10 col-md-8 mt-10'>      
          <textarea  className='col-sm-10 col-md-10' value={comment} onChange={evt => setComment(evt.target.value)}/>
        </row>
  
        <div className='align-center container mt-50'>
        <span className='col-sm-1 col-md-3' />
        <div className='col-sm-10 col-md-6' >
          <button  className='btn btn-success' onClick={createComment}> Comentar!</button>
        </div>
        <span className='col-sm-1 col-md-3' />
        </div>

        </div>    
        </section>
 
      </div>
    )
  }
  export default NewComment