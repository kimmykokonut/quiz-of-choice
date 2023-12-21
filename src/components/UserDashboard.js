import { getAuth, getUserByEmail, updateProfile } from "firebase/auth";
import { auth } from './../firebase';
import React, { useState, useEffect } from "react";

//import { connect } from 'react-redux';
import { addUserProfile } from "../redux/userSlice";

const UserDashboard = () => {
    const addProfileInfo = async (e) => {
        e.preventDefault();
        const displayName = e.target.displayName.value;
        const photoURL = e.target.photoURL.value;

        if (auth && auth.currentUser) {
            try {
                await updateProfile(auth.currentUser, {
                    displayName: displayName,
                    photoURL: photoURL
                });
                console.log("Profile updated");
                e.target.reset();
            } catch (error) {
                console.log(error);
            }
        } else {
            console.log('no one is signed in');
        }
    };

    return (
        <React.Fragment>
            <h1>User Dashboard</h1>
            {auth.currentUser && (
            <div>
            <h4>User Email: {auth.currentUser.email}</h4>
            <h5>Display name: {auth.currentUser.displayName}</h5>
            <img src={auth.currentUser.photoURL} alt="user profile" />
                </div>
            )}
            {/* if user has no profile, show form to add profile info */}
            <form onSubmit={addProfileInfo}>
                <input type="text" name="displayName" placeholder="Display Name..." />
                <input type="text" name="photoURL" placeholder="Photo URL..." />
                <button type="submit">Add Profile</button>
            </form>


            <h3>Quizzes created:</h3>
            <ul>
                <li>quiz name here, timestamp</li>
            </ul>
            <h3>Quizzes taken:

            </h3>
            <ul>
                <li>quiz here. score here</li>
                <li>quiz here. score here</li>
            </ul>
        </React.Fragment>
    );
};

//UserDashboard = connect()(UserDashboard);
export default UserDashboard;