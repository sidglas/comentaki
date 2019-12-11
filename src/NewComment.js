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
    
    const createComment = () => {
      if (comment !== '') {
        save({
          content: comment,
          createdAt:firebase.database.ServerValue.TIMESTAMP,
          user: {
            id: uid,
            name: displayName || alternativeDisplayName
          }
        })
        setComment('')
      }
    }
    return (
      <div>
        <textarea value={comment} onChange={evt => setComment(evt.target.value)}/>
        <button onClick={createComment}> Comentar!</button>
        <br />
      </div>
    )
  }
  export default NewComment