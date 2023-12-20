import React from "react";
import Quiz from "./Quiz";
import PropTypes from 'prop-types';

const QuizList = (props) => {
    const currentQuizList = props.updatedList;
    const styleEaQuizList = {
    // //     display: 'flex',
    // // flexDirection: 'row',
    // // flexWrap: 'wrap',
    // // justifyContent: 'center',
    //     display: 'inline-block',
    //     height: 'auto',
    //     width: '30%',
    //     border: '2px solid black',
    //     padding: '1%',
    //     margin: '1%',
    //     backgroundColor: 'lightgrey',

    }
    return (
        <React.Fragment>
            <h3>Current Quizzes</h3>
            <hr />
            <div style={styleEaQuizList}>
                {Object.values(currentQuizList).map((quiz, index) =>
                    <Quiz
                        whenQuizClicked={props.onQuizSelection}
                        name={quiz.name}
                        key={index}
                        id={quiz.id}
                    />)}
            </div>
        </React.Fragment>
    );
}
QuizList.propTypes = {
    updatedList: PropTypes.array,
}
export default QuizList;