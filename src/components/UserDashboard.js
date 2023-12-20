import { getAuth, getUserByEmail } from "firebase/auth";
import { auth, email} from './../firebase';
import React, { useState, useEffect } from "react";

const UserDashboard = () => {
    // const [userInfo, setUserInfo] = useState({});

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