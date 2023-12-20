import React from 'react';
import PropTypes from 'prop-types';
import { auth } from './../firebase';

const QuizDetail = (props) => {
    const { quiz, onClickEdit, onClickDelete } = props;
    console.log(quiz); //answers are undefined!!!
    function handleTakeQuizSubmission(e) {
        e.preventDefault();

        console.log(e.target.answer1a.value);
        props.onTakeQuiz({
            answer1a: e.target.answer1a.value,
            answer1b: e.target.answer1b.value,
            answer1c: e.target.answer1c.value,
            answer1d: e.target.answer1d.value,

            answer2: e.target.answer2.value,
            answer3: e.target.answer3.value,
            answer4: e.target.answer4.value,        
            answer5: e.target.answer5.value,
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
                <br />
                <label htmlFor="answer1a">
                <input type='radio' name="answer1" id="answer1a" value="1a" /> should be 'red' {quiz.answer1a}</label>

                <input type='radio' name="answer1" id="answer1b" value="1b">{quiz.answer1b}</input>
                <label htmlFor="answer1b">answer1b{quiz.answer1b}</label>

                <input type='radio' name="answer1" id="answer1c" value="1c">{quiz.answer1c}</input>
                <label htmlFor="answer1a">answer1c{quiz.answer1c}</label>
                
                <input type='radio' name="answer1" id="answer1d" value="1d">{quiz.answer1d}</input>
                <label htmlFor="answer1d">answer1d{quiz.answer1d}</label>
                <br />
{/* //working on just answer 1 as radio */}
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
        <div className='hidden'>
            <h2>Results:</h2>
            </div>
        
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