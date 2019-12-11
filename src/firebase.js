import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVe42uDFcR5S25m6VR4t8ILvcB9zKmPWg",
  authDomain: "comentaki-sid.firebaseapp.com",
  databaseURL: "https://comentaki-sid.firebaseio.com",
  projectId: "comentaki-sid",
  storageBucket: "comentaki-sid.appspot.com",
  messagingSenderId: "419974358641",
  appId: "1:419974358641:web:f0f11d7437f0f769bb1dd0"
}
firebase.initializeApp(firebaseConfig)

export default firebase