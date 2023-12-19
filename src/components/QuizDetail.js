import React from 'react';
import PropTypes from 'prop-types';

const QuizDetail = (props) => {
    const { quiz, onClickEdit, onClickDelete } = props;
    // function handleTakeQuiz(e) {
    //     e.preventDefault();
    //     console.log(e.target.question1.value)
    //     props.onNewQuizCreation({
    //         name: e.target.name.value || 'n/a',
    //         question1: e.target.question1.value || 'n/a',
    //         answer1: e.target.answer1.value || 'n/a',
    //         question2: e.target.question2.value || 'n/a',
    //         answer2: e.target.answer2.value || 'n/a',
    //         question3: e.target.question3.value || 'n/a',
    //         answer3: e.target.answer3.value || 'n/a',
    //         question4: e.target.question4.value || 'n/a',
    //         answer4: e.target.answer4.value || 'n/a',
    //         question5: e.target.question5.value || 'n/a',
    //         answer5: e.target.answer5.value || 'n/a',
    //         //id: v4()
    //     })
    // };

    return (
        <React.Fragment>
            <h2>Take this quiz!</h2>
            <form>
                <h2>Name: {quiz.name}</h2>
                
                <br />
                <label htmlFor="question1">1: {quiz.question1}</label>
                <input type='text' name="inputAnswer1"></input>
                <br />

                <label htmlFor="question2">2: {quiz.question2}</label>
                <input type='text' name="inputAnswer2"></input>

                <br />
                <label htmlFor="question3">3: {quiz.question3}</label>
                <input type='text' name="inputAnswer3"></input>

                <br />
                <label htmlFor="question4">4: {quiz.question4}</label>
                <input type='text' name="inputAnswer4"></input>

                <br />
                <label htmlFor="question5">5: {quiz.question5}</label>
                <input type='text' name="inputAnswer5"></input>

                <br />
                <button >Take Quiz- nonfunctional</button> 
            </form>
            <button onClick={onClickEdit}>Edit quiz content</button>
            <button onClick={() => onClickDelete(quiz.id)}>Delete Quiz!</button>
        </React.Fragment >
    )
}

QuizDetail.propTypes = {
    quiz: PropTypes.object,
    onNewQuizCreation: PropTypes.func,
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