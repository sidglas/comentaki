import React , { useContext }  from 'react'
import { useDatabase } from './database'
import Comment from './Comment'


import { AuthContext } from './auth'

const Comments = () => {

  const auth = useContext(AuthContext)
  //console.log('authhhhhh do meio campo ', auth)


    const data = useDatabase('comments')
    if (!data) {
      return <p> nenhum comentário enviado até o momento</p>
    }
    const ids = Object.keys(data) 
    if (ids.length === 0) {
      return <p>Carregando ...</p>
    }

    return (
      ids.map(id => {
        return <Comment key={id} comment={data[id]} />
      })
    )
  }
  export default Comments