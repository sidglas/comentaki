import React , { useContext, useState } from 'react'
import { AuthContext} from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    const[form, setForm]=useState({email: '', passwd:''})
    const onChange = campo => evt => {
      setForm({
        ...form,
        [campo]: evt.target.value
      })

    }
    if (auth.user !== null) {
      return null
    }
    return (
        <>
        <div className="container">
          <div className="row">
          {
            auth.createUser.createUserState.error !=='' &&  
            <p>{auth.createUser.createUserState.error}</p>
          }             
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">New Accont</h5>

                    <div className="form-label-group">
                      <input type="text"  className="form-control" placeholder="Seu e-mail" 
                      value={form.email} onChange={onChange('email')} />
                      
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
      
                    <div className="form-label-group">
                      <input type="password"  className="form-control" placeholder="Senha" 
                      value={form.passwd} onChange={onChange('passwd')} />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
      
                    <button className="btn btn-primary btn-block text-uppercase" 
                    onClick={ () => {
                      console.log('ccccc', form)
                      auth.createUser.createUser(form.email, form.passwd)
                      }}>
                    Sign up
 
                    </button>

                    <hr className="my-4" />

                 </div>
              </div>
            </div>
          </div>
        </div>

        </>
    )
}
export default CreateUser