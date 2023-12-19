import React from 'react';
import PropTypes from 'prop-types';

const QuizDetail = (props) => {
    const { quiz } = props;

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
                <button type="submit">Take Quiz</button>
            </form>
            {/* button onclick edit/update
            button onclick delete */}
        </React.Fragment >
    )
}

QuizDetail.propTypes = {
    quiz: PropTypes.object
};
export default QuizDetail;

//  <h1>Ticket Detail</h1>
//  <h3>{ticket.location} - {ticket.names}</h3>
//  <p><em>{ticket.issue}</em></p>
//  <button onClick={onClickingEdit}>Update Ticket</button>
//  <button onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
//  <hr/>