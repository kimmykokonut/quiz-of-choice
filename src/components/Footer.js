import { onAuthStateChanged} from "firebase/auth";
import { auth } from './../firebase';
import React, { useState, useEffect } from "react";

const Footer = () => {
    console.log(auth);
    const [userInfo, setUserInfo] = useState(null);


    useEffect(() => {
        onAuthStateChanged(auth, function ( user) {
            if (user) {
                setUserInfo(user);
            }
        }, []);
    });

    if (userInfo) {
        return (
                    <React.Fragment>
                        <hr />
                        <p>who's signed in? {auth.currentUser.displayName}</p>
                    </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <hr />
                {/* <p>who's signed in? no one!</p> */}
            </React.Fragment>
        )
    };
};

export default Footer;