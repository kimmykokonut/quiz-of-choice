import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
    const styles = {
        border: "2px solid white",
        display: "inline-block",
        backgroundColor: "grey",
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
                <Link to="/" >Home</Link>
            </div>
            <h1>Let's get quizzy!</h1>

            <div style={styles}>
                <Link to='/sign-in'>Sign In</Link>
            </div>
            </div>
        </React.Fragment>
    );
}
export default Header;