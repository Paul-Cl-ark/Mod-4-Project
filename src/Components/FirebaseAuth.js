import React from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
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

  firebaseAuth = () => {
   // gets firebase user back on successful login with data

  firebase.auth().onAuthStateChanged(firebaseUser => {

    if (firebaseUser) {

    const firebaseUserEmail = firebaseUser.email
    const firebaseFirstName = firebaseUser.displayName.split(' ')[0]
    const firebaseUserLastName = firebaseUser.displayName.split(' ')[1]

    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
     // queries whether existing user using firebase data
     // password is a default password for all firebase users
     // which is set in our .env file
          user:
            {
              email: firebaseUserEmail,
              password: 'password'
            }
          }
        )
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        if (!data.error) {
          this.props.logIn(data.user, data.token)
        } else {

      // if user does not exist does a fetch to register new user

          fetch('http://localhost:3000/api/v1/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {
                user: {
                  first_name: firebaseFirstName,
                  last_name: firebaseUserLastName,
                  email: firebaseUserEmail,
                  password: 'password',
                }
              }
            )
          })
          this.props.logIn(data.user, data.token)
        }
      })
    }
    })
  }


 render() {
   return (
     <div className="FirebaseAuth">
         <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} onClick={this.firebaseAuth()}/>
     </div>
   );
 }
}

export default FirebaseAuth;
