import React , { useContext, useState } from 'react'
import { AuthContext} from './auth'
//import { stringify } from 'querystring'
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
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In / Sign Up</h5>

                    <div className="form-label-group">
                      <input type="email"  className="form-control" placeholder="Seu e-mail" 
                      value={form.email} onChange={onChange('email')} />
                      
                      <label htmlFor="inputEmail">Email address</label>
                    </div>
      
                    <div className="form-label-group">
                      <input type="password"  className="form-control"  placeholder="Senha" 
                      value={form.passwd} onChange={onChange('passwd')} />
                      <label htmlFor="inputPassword">Password</label>
                    </div>
      
                    <button className="btn btn-primary  text-uppercase" 
                      onClick={ () => {
                      console.log('sssss1', form)
                      auth.signInUser.signInUser(form.email, form.passwd)
                      }}>
                    Sign in
                    </button>

                    <button className="btn btn-primary  text-uppercaser" 
                    onClick={ () => {
                      console.log('ccccc1', form)
                      auth.createUser.createUser(form.email, form.passwd)
                      }}>
                    Sign up
 
                    </button>  

                    <hr className="my-4" />
                    { 
                          
                      <div class="alert alert-warning" role="alert">
                      
                        <p>  {  
                          '' 
                          || auth.signInUser.signInUserState.error 
                          || auth.createUser.createUserState.error 
                          || 'Faça Login ou Crie uma conta para postar'
                          }  
                        </p>
                      </div>                      
                    }
                </div>
              </div>
            </div>
          </div>
        </div>

      
        </>
    )
}
export default SignInUser


