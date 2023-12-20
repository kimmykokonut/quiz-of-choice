import React from 'react';
import PropTypes from 'prop-types';
import { auth } from './../firebase';
import { useState } from 'react';

const QuizDetail = (props) => {
    const { quiz, onClickEdit, onClickDelete } = props;
    const [userAnswerResult, setUserAnswerResult] = useState(null);
    console.log(quiz);
    function handleTakeQuizSubmission(e) {
        e.preventDefault();
        const userAnswer = {
            answer1: e.target.answer1.value, //value=1a or 1b...
            answer2: e.target.answer2.value,
            answer3: e.target.answer3.value,
            answer4: e.target.answer4.value,
            answer5: e.target.answer5.value,
            id: quiz.id,
            userId: auth.currentUser.uid,
            //final score?
        }
        setUserAnswerResult(userAnswer);

        props.onTakeQuiz(userAnswer); //this ssends obj to firebase
    };

    return (
        <React.Fragment>
            <h2>Take this quiz!</h2>
            <form onSubmit={handleTakeQuizSubmission}>
                <h2>Name: {quiz.name}</h2>
                <br />
                <label htmlFor="question1">1: {quiz.question1}</label>
                <br />
                <label htmlFor="answer1a">
                    <input type='radio' name="answer1" id="answer1a" value={quiz.answer1a} />{quiz.answer1a} </label>
                <label htmlFor="answer1b">
                    <input type='radio' name="answer1" id="answer1b" value={quiz.answer1b} />{quiz.answer1b}</label>
                <label htmlFor="answer1a">
                    <input type='radio' name="answer1" id="answer1c" value={quiz.answer1c} /> {quiz.answer1c}</label>
                <label htmlFor="answer1d">
                    <input type='radio' name="answer1" id="answer1d" value={quiz.answer1d} />{quiz.answer1d}</label>
                <br />
                <hr />
                <label htmlFor="question2">2: {quiz.question2}</label>
                <br />
                <label htmlFor="answer2a">
                    <input type='radio' name="answer2" id="answer2a" value={quiz.answer2a} />{quiz.answer2a}</label>
                <label htmlFor="answer2b">
                    <input type='radio' name="answer2" id="answer2b" value={quiz.answer2b} />{quiz.answer2b}</label>
                <label htmlFor="answer2c">
                    <input type='radio' name="answer2" id="answer2c" value={quiz.answer2c} />{quiz.answer2c}</label>
                <label htmlFor="answer2d">
                    <input type='radio' name="answer2" id="answer2d" value={quiz.answer2d} />{quiz.answer2d}</label>

                <br />
                <label htmlFor="question3">3: {quiz.question3}</label>
                <br />
                <label htmlFor="answer3a">
                    <input type='radio' name="answer3" id="answer3a" value={quiz.answer3a} />{quiz.answer3a}</label>
                <label htmlFor="answer3b">
                    <input type='radio' name="answer3" id="answer3b" value={quiz.answer3b} />{quiz.answer3b}</label>
                <label htmlFor="answer3c">
                    <input type='radio' name="answer3" id="answer3c" value={quiz.answer3c} />{quiz.answer3c}</label>
                <label htmlFor="answer3d">
                    <input type='radio' name="answer3" id="answer3d" value={quiz.answer3d} />{quiz.answer3d}</label>
                <br />
                <label htmlFor="question4">4: {quiz.question4}</label>
                <br />
                <label htmlFor="answer4a">
                    <input type='radio' name="answer4" id="answer4a" value={quiz.answer4a} />{quiz.answer4a}</label>
                <label htmlFor="answer4b">
                    <input type='radio' name="answer4" id="answer4b" value={quiz.answer4b} />{quiz.answer4b}</label>
                <label htmlFor="answer4c">
                    <input type='radio' name="answer4" id="answer4c" value={quiz.answer4c} />{quiz.answer4c}</label>
                <label htmlFor="answer4d">
                    <input type='radio' name="answer4" id="answer4d" value={quiz.answer4d} />{quiz.answer4d}</label>
                <br />
                <label htmlFor="question5">5: {quiz.question5}</label>
                <br />
                <label htmlFor="answer5a">
                    <input type='radio' name="answer5" id="answer5a" value={quiz.answer5a} />{quiz.answer5a}</label>
                <label htmlFor="answer5b">
                    <input type='radio' name="answer5" id="answer5b" value={quiz.answer5b} />{quiz.answer5b}</label>
                <label htmlFor="answer5c">
                    <input type='radio' name="answer5" id="answer5c" value={quiz.answer5c} />{quiz.answer5c}</label>
                <label htmlFor="answer5d">
                    <input type='radio' name="answer5" id="answer5d" value={quiz.answer5d} />{quiz.answer5d}</label>
                <br />
                <button type="submit">Take Quiz- nonfunctional</button>
            </form>
            <button onClick={onClickEdit}>Edit quiz content</button>
            <button onClick={() => onClickDelete(quiz.id)}>Delete Quiz!</button>
            {userAnswerResult ?
                <div className='hidden'>
                    <h2>Your answers:</h2>
                    <ul>
                        <li>1: {userAnswerResult.answer1}</li>
                        <li>2: {userAnswerResult.answer2}</li>
                        <li>3: {userAnswerResult.answer3}</li>
                        <li>4: {userAnswerResult.answer4}</li>
                        <li>5: {userAnswerResult.answer5}</li>
                    </ul>
                    <h3>Right Answers</h3>
                    <ul>
                        <li>1: {quiz.correctanswer1}</li>
                        <li>2: {quiz.correctanswer2}</li>
                        <li>3: {quiz.correctanswer3}</li>
                        <li>4: {quiz.correctanswer4}</li>
                        <li>5: {quiz.correctanswer5}</li>
                    </ul>
                    <h3>Your quiz score: </h3>
                    <p>(score goes here)</p>
                </div>
                : <></>}

        </React.Fragment >
    )
}

QuizDetail.propTypes = {
    quiz: PropTypes.object,
    onTakeQuiz: PropTypes.func,
    onClickEdit: PropTypes.func,
    onClickDelete: PropTypes.func
};
export default QuizDetail;

//  <h1>Ticket Detail</h1>
//  <h3>{ticket.location} - {ticket.names}</h3>
//  <p><em>{ticket.issue}</em></p>
//  <button onClick={onClickingEdit}>Update Ticket</button>
//  <button onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
//  <hr/>