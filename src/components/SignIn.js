import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from './../firebase';


function SignIn() {
    const [signUpSuccess, setSignUpSuccess] = useState(null);
    const [signInSuccess, setSignInSuccess] = useState(null);
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    //const [currentUser, setCurrentUser] = useState({});

    function doSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password) //returns a promise
        .then((userCredential) => {
            setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
            // setCurrentUser(userCredential.user);
            // console.log(currentUser);
        })
        .catch((error) => {
            setSignUpSuccess(`There was an error signing up: ${error.message}!`)
        });
    }
    function doSignIn(e) {
        e.preventDefault();
        const email = e.target.signinEmail.value;
        const password = e.target.signinPassword.value;
        signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
            setSignInSuccess(`You've successsfully sign in as  ${userCredential.user.email}!`)
        })
        .catch((error) => {
            setSignInSuccess(`There was an error signing in: ${error.message}!`)
        });
    }
    function doSignOut() {
        signOut(auth)
        .then(function() {
            setSignOutSuccess("You have successfully signed out!");
        }).catch(function(error) {
            setSignOutSuccess(`There was an error signing out: ${error.message}!`);
        });
    }

    return(
        <React.Fragment>
        <h1>Sign up</h1>
        {signUpSuccess}
        <form onSubmit={doSignUp}>
            <input
            type='text'
            name='email'
            placeholder="email" />
            <br />
            <label>
            <input minLength="6"
            type='password'
            name='password'
            placeholder="Password" /></label>

            <button type="submit">Sign up</button>
        </form>
        <h1>Sign In</h1>
        {signInSuccess}
        <form onSubmit={doSignIn}>
            <input 
            type='text'
            name='signinEmail'
            placeholder='email'/>
            <input 
            type='password'
            name='signinPassword'
            placeholder='password'/>
            <button type='submit'>Sign In</button>
        </form>

        <h1>Sign Out</h1>
        {signOutSuccess}
        <br />
        <button onClick={doSignOut}>Sign out</button>
        </React.Fragment>
    );
}
export default SignIn;