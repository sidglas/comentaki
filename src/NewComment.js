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

  const { photoURL } = auth.user
  console.log('SID NAO SEJA OTÁRIO FOTO ', photoURL )

  const [alternativeDisplayName] = auth.user.email.split('@')

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

      <textarea   value={comment} onChange={evt => setComment(evt.target.value)}/>      
      <button className='btn-warning' onClick={createComment}> Comentar</button>
  
        </div>    
        </section>
 
      </div>
    )
  }
  export default NewComment