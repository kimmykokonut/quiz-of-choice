import React from "react";
import Quiz from "./Quiz";
//import PropTypes from 'prop-types';
import { mainQuizzes } from "../mainQuizzes";



const QuizList = () => {
    return(
        <React.Fragment>
            <hr />
            <h2>Quiz</h2>
            <form>
                <label htmlFor="name">{mainQuizzes['1'].name}</label>
                <br />
                <label htmlFor="question1">1: {mainQuizzes['1'].question1}</label>
                <input type='text' name="inputAnswer1"></input>
                <br />

                <label htmlFor="question2">2: {mainQuizzes['1'].question2}</label>
                <input type='text' name="inputAnswer2"></input>

                <br />
                <label htmlFor="question3">3: {mainQuizzes['1'].question3}</label>
                <input type='text' name="inputAnswer3"></input>

                <br />
                <label htmlFor="question4">4: {mainQuizzes['1'].question4}</label>
                <input type='text' name="inputAnswer4"></input>

                <br />
                <label htmlFor="question5">5: {mainQuizzes['1'].question5}</label>
                <input type='text' name="inputAnswer5"></input>

                <br />
                <button type="submit">Take Quiz</button>
            </form>
        </React.Fragment>
    );
}
// QuizList.propTypes = {

// }
export default QuizList;