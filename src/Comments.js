import React  from 'react'
//import React , { useContext }  from 'react'
import { useDatabase } from './database'
import Comment from './Comment'


//import { AuthContext } from './auth'

const Comments = () => {

//  const auth = useContext(AuthContext)
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

 <>
      <section className="wrapper">
          <div className="inner">
              <header className="special">
                  <h2>Aqui você não Discorda</h2>
                  <p>Nasce aqui a semente do discord da devpleno. O fim da discórdia. Quem se comunica, não se trombica!</p>
              </header>      
          </div>

          <div className="inner">
          <div className="testimonials">
      {ids.map(id => {
        return <Comment key={id} comment={data[id]} />
      }).reverse()
      }

      </div>
      </div>
      </section>

</>
    )
  }
  export default Comments