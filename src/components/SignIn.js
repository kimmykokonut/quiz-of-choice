import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from './../firebase';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [signUpSuccess, setSignUpSuccess] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [signInSuccess, setSignInSuccess] = useState(null);
    const [signOutSuccess, setSignOutSuccess] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);
    const navigate = useNavigate();

    function doSignUp(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password) //returns a promise
            .then((userCredential) => {
                setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
                navigate('/main');
            })
            .catch((error) => {
                setSignUpSuccess(`There was an error signing up: ${error.message}!`)
            });
    }
    function doSignIn(e) {

        e.preventDefault();
        const email = e.target.signinEmail.value;
        const password = e.target.signinPassword.value;
        //const displayName = e.target.displayName.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setSignInSuccess(`You've successsfully sign in as  ${userCredential.user.email}!`)
                setIsSignedIn(true);
                navigate('/main');
            })
            .catch((error) => {
                setSignInSuccess(`There was an error signing in: ${error.message}!`)
            });
    }
    function doSignOut() {
        signOut(auth)
            .then(function () {
                setIsSignedIn(false);
                navigate('/sign-in');
                setSignOutSuccess("You have successfully signed out!");
            }).catch(function (error) {
                setSignOutSuccess(`There was an error signing out: ${error.message}!`);
            });
    }

    return (

        <React.Fragment>

            <h1>Sign In</h1>
            {signInSuccess}
            <form onSubmit={doSignIn}>
                <input
                    type='text'
                    name='signinEmail'
                    placeholder='email' />

                <br />
                <input
                    type='password'
                    name='signinPassword'
                    placeholder='password' />
                <br />
                <button type='submit'>Sign In</button>
            </form>

            <h1>Sign Out</h1>
            {signOutSuccess}
            <br />
            <button onClick={doSignOut}>Sign out</button>

            <h4>Don't have an account?</h4>

            <button onClick={() => setShowSignUp(!showSignUp)}>Create an account</button>
            {showSignUp && (
                <form onSubmit={doSignUp}>
                    <h1>Sign up</h1>
                    {signUpSuccess}
                    <input
                        type='text'
                        name='email'
                        placeholder="email" />
                    <br />
                    <label>
                        <input minLength="6"
                            type='password'
                            name='password'
                            placeholder="Password" />
                    </label>
                    <br />
                    <button type="submit">Sign up</button>
                </form>
            )}
        </React.Fragment>
    );
}
export default SignIn;