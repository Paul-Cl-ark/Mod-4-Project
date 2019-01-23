import React from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyCn1CxgNJv4wMM2IVMMlxPX9Yzti_rvHCM",
  authDomain: "mod4-project-6ac68.firebaseapp.com"
})

class FirebaseAuth extends React.Component {
  state = {
    user: false,
  }

  uiConfig = {
   signInFlow: "popup",
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   ],
   callbacks: {
     signInSuccess: () => false
   }
 }

 componentDidMount () {
   // gets validation from server
   firebase.auth().onAuthStateChanged(firebaseUser => {
     this.setState({user: firebaseUser})
   })
 }

 render() {
   return (
     <div className="FirebaseAuth">
         <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
     </div>
   );
 }
}

export default FirebaseAuth;
