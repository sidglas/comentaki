import React , { useState, useContext } from 'react'
import { AuthContext } from './auth'


const FormDisplayName = ({displayName, user}) => {
  const[newDisplayName, setNewDisplayName] = useState(displayName)
  const onChange = evt => {
    setNewDisplayName(evt.target.value)  
  }
  const save = () => {
    if (newDisplayName !== '') {
      user.updateProfile({ displayName: newDisplayName})
    }
  }
  return (
  
    <>
      <input type='text' value={newDisplayName}  onChange={onChange}/>
      <button className='btn-warning' onClick={save}> Save display name</button>

   </> 
  )

}

const UserInfo = () => {
  const auth = useContext(AuthContext)
  
  
  if (auth.user === null) {
    return null
  }

  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')  
  const dn = displayName || alternativeDisplayName

  return (
    <>
    <section className="wrapper">
    <div  className="inner">   
      <div className="inner"> Olá { dn } </div>
      <FormDisplayName displayName={dn} user={auth.user}/>
      <button className='btn-warning' onClick={auth.signout}>Sair</button>
    </div>
    </section>
    
    </>
  )
}
export default UserInfo 