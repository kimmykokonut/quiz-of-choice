import React from "react";
import PropTypes from 'prop-types';

const Quiz = (props) => {
    return(
        <React.Fragment>
            <div onClick={() => props.whenQuizClicked(props.id)}>
            <h3>{props.name}</h3>
            {/* <form>
            <p>Question 1: {props.question1}</p>
            <input></input>
            {/* <p>Answer 1: {props.answer1}</p> */}
            {/* <p>Question 2: {props.question2}</p>
            <input></input> */}
            {/* <p>Answer 2: {props.answer2}</p> */}
            {/* <p>Question 3: {props.question3}</p> */}
            
            {/* <p>Answer 3: {props.answer3}</p> */}
            {/* <p>Question 4: {props.question4}</p>
            <input></input> */}
            {/* <p>Answer 4: {props.answer4}</p> */}
            {/* <p>Question 5: {props.question5}</p>
            <input></input> */}
            {/* <p>Answer 5: {props.answer5}</p> */}
            
            <hr />
            </div>
        </React.Fragment>
    )
}
Quiz.propTypes = {
    whenQuizClicked: PropTypes.func,
    name: PropTypes.string,
    question1: PropTypes.string,
    answer1: PropTypes.string,
    question2: PropTypes.string,
    answer2: PropTypes.string,
    question3: PropTypes.string,
    answer3: PropTypes.string,
    question4: PropTypes.string,
    answer4: PropTypes.string,
    question5: PropTypes.string,
    answer5: PropTypes.string
};
export default Quiz;