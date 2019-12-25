//import React from 'react'
import React , { useContext } from 'react'
//import Img from 'react-image'
//import Time from './Time'
import { AuthContext } from './auth'
import './assets/css/main.css'
//import pic01 from 'https://avatars0.githubusercontent.com/u/10587042?v=4'
//import pic01 from './images/pic01.jpg'


const Comment = ({comment}) => {
  const auth = useContext(AuthContext)
  console.log('auth na comment.js' , auth)
  console.log('auth na comment.js image' , auth.signInUser.signInUserState.imageUrl)
  //"https://avatars0.githubusercontent.com/u/10587042?v=4"
 // <img src={auth.signInUser.signInUserState.imageUrl} alt="jane" />

  

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
                <p className="credit">- <strong>{ comment.user.name }</strong> <span>CEO - ABC Inc.</span></p>
            </div>
        </div>

      </section>

    )
  }
  export default Comment