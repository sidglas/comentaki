import React, { useState , useEffect } from 'react';
import './App.css';

import firebase from './firebase'

const useDatabase = endpoint => {
  const[data, setData] = useState({})
  useEffect(() => {
    const ref = firebase.database().ref(endpoint)
    ref.on('value', snapshot => {
      // quando o banco é alterado, é disparado 
      setData(snapshot.val())
    })  
    return () => {
      ref.off()
    }
  },[endpoint])  
  return data
}
const useDatabasePush = endpoint => {
  const[status, setStatus] = useState('')

  const save = data => {
    const ref = firebase.database().ref(endpoint)
    ref.push(data, err => {
      if (err) {
        setStatus('ERROR')
      }else{
        setStatus('SUCCESS')
      }
    })
  }
  return [status, save]
}
const Comment = ({comment}) => {
  return  (
    <div>
      {comment.content} por {comment.user.name}
    </div>
  )
}





const Comments = () => {
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

      return <>
      <p key={id}> {data[id].content} por {data[id].user.name}</p>
      </>





      //return <Comment key={id} comment={data[id]} />
    })
    
  )

}


function App() {
  //const[visible, toggle] = useState(true)
  const[, save] = useDatabasePush('comments')
  return (
    <div>
      <button onClick={() => {
        save({
           content: 'Olá aqui é comentário do Sidnei',
           user: {
             id: '2',
             name: 'Sidnei'
           }
          })
      }}> Toggle</button>
      { <Comments />}

    </div>
  );
}

export default App;
