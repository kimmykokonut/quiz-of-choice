import React from "react";
import { Link } from 'react-router-dom';
import { auth } from './../firebase';


const Header = () => {
    const styles = {
        border: 'none',
        display: "inline-block",
        color: "black",
        marginRight: "5px",
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '90px',
    }
    const styleHeader = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
    return (
        <React.Fragment>
            <div style={styleHeader}>
            <div style={styles}>
                <button><Link to="/main">Home</Link></ button>
            </div>
            <h1>Let's get quizzy!</h1>

            <div style={styles}>
            <button><Link to='/sign-in'>Sign In</Link></ button>
            </div>
            </div>
            <button><Link to="/dashboard">User Dashboard</Link></ button>
        </React.Fragment>
    );
}
export default Header;