import React from 'react';
import PropTypes from 'prop-types';
import { auth } from './../firebase';

const QuizDetail = (props) => {
    const { quiz, onClickEdit, onClickDelete } = props;
    function handleTakeQuizSubmission(e) {
        e.preventDefault();

        console.log(e.target.answer1.value);
        props.onTakeQuiz({
            answer1: e.target.answer1.value || 'n/a',
            answer2: e.target.answer2.value || 'n/a',
            answer3: e.target.answer3.value || 'n/a',
            answer4: e.target.answer4.value || 'n/a',        
            answer5: e.target.answer5.value || 'n/a',
            id: quiz.id,
            userId: auth.currentUser.uid
        })
    };

    return (
        <React.Fragment>
            <h2>Take this quiz!</h2>
            <form onSubmit={handleTakeQuizSubmission}>
                <h2>Name: {quiz.name}</h2>
                <br />
                <label htmlFor="question1">1: {quiz.question1}</label>
                <input type='text' name="answer1"></input>
                <br />

                <label htmlFor="question2">2: {quiz.question2}</label>
                <input type='text' name="answer2"></input>

                <br />
                <label htmlFor="question3">3: {quiz.question3}</label>
                <input type='text' name="answer3"></input>

                <br />
                <label htmlFor="question4">4: {quiz.question4}</label>
                <input type='text' name="answer4"></input>

                <br />
                <label htmlFor="question5">5: {quiz.question5}</label>
                <input type='text' name="answer5"></input>

                <br />
                <button type="submit">Take Quiz- nonfunctional</button> 
            </form>
            <button onClick={onClickEdit}>Edit quiz content</button>
            <button onClick={() => onClickDelete(quiz.id)}>Delete Quiz!</button>
        <div><h2>Results:</h2></div>
        
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