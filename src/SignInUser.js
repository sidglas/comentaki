import React , { useContext, useState } from 'react'
import { AuthContext} from './auth'

import 'bootstrap/dist/css/bootstrap.css'

const SignInUser = () => {
    const auth = useContext(AuthContext)
    const[form, setForm]=useState({email: '', passwd:''})
    const onChange = campo => evt => {
      setForm({
        ...form,
        [campo]: evt.target.value
      })
console.log(evt.target.value)
    }
    if (auth.user !== null) {
      return null
    }
    return (
        <>
        <div className="container">
          <div className="row">
          {
            auth.signInUser.signInUserState.error !=='' &&  
            <p>{auth.signInUser.signInUserState.error}</p>
          }             
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>

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
                      console.log('sssss', form)
                      auth.signInUser.signInUser(form.email, form.passwd)
                      }}>
                    Sign in
 
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
export default SignInUser


