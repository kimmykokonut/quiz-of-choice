import { getAuth, getUserByEmail } from "firebase/auth";
import { auth, email} from './../firebase';
import React, { useState, useEffect } from "react";

const UserDashboard = () => {
    // const [userInfo, setUserInfo] = useState({});

    //display user info, name, email, quizzes taken, stats...

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             if (auth.currentUser){
    //                 const userRecord = await getUserByEmail(getAuth(), auth.currentUser.email);
    //                 console.log(`user data: ${userRecord.toJSON()}`);
    //             }else{
    //                 console.log("user not authenticated");
    //             }
    //         } catch (error) {
    //             console.log(`error: ${error}`);
    //         }
    //     };
    //     fetchUserData();
    // }, []);
    
    return(
        <React.Fragment>
        <h1>Dashboard</h1>
        {auth.currentUser && <h2>User Email: {auth.currentUser.email}!</h2>}
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

export default UserDashboard;