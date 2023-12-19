import React from "react";
import Quiz from "./Quiz";
import PropTypes from 'prop-types';

const QuizList = (props) => {
    const currentQuizList = props.updatedList;

    return(
        <React.Fragment>
            <h3>Current Quizzes</h3>
            <hr />
            {Object.values(currentQuizList).map((quiz, index) =>
                <Quiz
                whenQuizClicked={props.onQuizSelection}
                name={quiz.name}
                key={index}
                id={quiz.id}
            /> )}
        </React.Fragment>
    );
}
QuizList.propTypes = {
    updatedList: PropTypes.array,
}
export default QuizList;