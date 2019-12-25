import React , { useContext } from 'react'

import { AuthContext } from './auth'


const Comment = ({comment}) => {


  //console.log('authhhh do Comment ', auth.user.uid)
  return  (
      <div>
        { teste comment.content } por { comment.user.name } em: <Time timestamp={comment.createdAt} />
      </div>
    )
  }
  export default Comment