import React , { useContext } from 'react'
import { AuthContext } from './auth'
import './assets/css/main.css'

const Comment = ({comment}) => {
   /*
  const auth = useContext(AuthContext)
  console.log('auth na comment.js' , auth)
  console.log('auth na comment.js image SIGNIN' , auth.signInUser.signInUserState.imageUrl)
  console.log('auth na comment.js image create' , auth.createUser.createUserState.imageUrl)
  */
  //        { comment.content } por { comment.user.name } em: <Time timestamp={comment.createdAt} />
  //console.log('authhhh do Comment ', auth.user.uid)
  return  (


        <section>
        <div className="content">
            <blockquote>
                <p> { comment.content }</p>
            </blockquote>
            <div className="author">
                <div className="image">
                    <img src={comment.user.githubUser} alt="jne" />
                    
                </div>
                <p className="credit">- <strong>{ comment.user.name }</strong> <span>CEO - BBC Inc.</span></p>
            </div>
        </div>

      </section>

    )
  }
  export default Comment