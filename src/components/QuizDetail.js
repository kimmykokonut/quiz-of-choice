import React from 'react';
import PropTypes from 'prop-types';

const QuizDetail = (props) => {
    const { quiz } = props;

    return(
        <React.Fragment>
            <h2>Quiz in Full</h2>
            <p>{quiz.name}</p>
            <form>
            {/* <h2>Quiz name: {mainQuizzes['1'].name}</h2>
            //     <label htmlFor="name">{mainQuizzes['1'].name}</label>
            //     <br />
            //     <label htmlFor="question1">1: {mainQuizzes['1'].question1}</label>
            //     <input type='text' name="inputAnswer1"></input>
            //     <br />

            //     <label htmlFor="question2">2: {mainQuizzes['1'].question2}</label>
            //     <input type='text' name="inputAnswer2"></input>

            //     <br />
            //     <label htmlFor="question3">3: {mainQuizzes['1'].question3}</label>
            //     <input type='text' name="inputAnswer3"></input>

            //     <br />
            //     <label htmlFor="question4">4: {mainQuizzes['1'].question4}</label>
            //     <input type='text' name="inputAnswer4"></input>

            //     <br />
            //     <label htmlFor="question5">5: {mainQuizzes['1'].question5}</label>
            //     <input type='text' name="inputAnswer5"></input>

            //     <br />
            //     <button type="submit">Take Quiz</button>
            // </form> 
            /> )} */}
            </form>
            {/* button onclick edit/update
            button onclick delete */}
            <p>quiz detail component</p>
        </React.Fragment>
    )
}
QuizDetail.propTypes = {
    quiz: PropTypes.object
};
export default QuizDetail;

// <h1>Ticket Detail</h1>
// <h3>{ticket.location} - {ticket.names}</h3>
// <p><em>{ticket.issue}</em></p>
// <button onClick={onClickingEdit}>Update Ticket</button>
// <button onClick={()=> onClickingDelete(ticket.id)}>Close Ticket</button>
// <hr/>