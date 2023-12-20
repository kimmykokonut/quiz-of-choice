import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { auth } from './../firebase';

const NewQuizForm = (props) => {
    function handleNewQuizSubmission(e) {
        e.preventDefault();
        console.log(e.target.answer1a)
        props.onNewQuizCreation({
            name: e.target.name.value || 'n/a',
            question1: e.target.question1.value || 'n/a',

            answer1a: e.target.answer1a.value || 'n/a',
            answer1b: e.target.answer1b.value || 'n/a',
            answer1c: e.target.answer1c.value || 'n/a',
            answer1d: e.target.answer1d.value || 'n/a',
            correctanswer1: e.target.correctanswer1.value || 'n/a',

            question2: e.target.question2.value || 'n/a',
            answer2a: e.target.answer2a.value || 'n/a',
            answer2b: e.target.answer2b.value || 'n/a',
            answer2c: e.target.answer2c.value || 'n/a',
            answer2d: e.target.answer2d.value || 'n/a',
            correctanswer2: e.target.correctanswer2.value || 'n/a',

            question3: e.target.question3.value || 'n/a',
            answer3a: e.target.answer3a.value || 'n/a',
            answer3b: e.target.answer3b.value || 'n/a',
            answer3c: e.target.answer3c.value || 'n/a',
            answer3d: e.target.answer3d.value || 'n/a',
            correctanswer3: e.target.correctanswer3.value || 'n/a',

            question4: e.target.question4.value || 'n/a',
            answer4a: e.target.answer4a.value || 'n/a',
            answer4b: e.target.answer4b.value || 'n/a',
            answer4c: e.target.answer4c.value || 'n/a',
            answer4d: e.target.answer4d.value || 'n/a',
            correctanswer4: e.target.correctanswer4.value || 'n/a',

            question5: e.target.question5.value || 'n/a',
            answer5a: e.target.answer5a.value || 'n/a',
            answer5b: e.target.answer5b.value || 'n/a',
            answer5c: e.target.answer5c.value || 'n/a',
            answer5d: e.target.answer5d.value || 'n/a',
            correctanswer5: e.target.correctanswer5.value || 'n/a', 
            userId: auth.currentUser.uid
        })
    };
    return(
        <React.Fragment>
            <h3>Create a new quiz!</h3>
            <p>Please fill out the form with 5 questions and their answers to buid a new quiz for someone to take</p>

            <ReusableForm
            formSubmissionHandler={handleNewQuizSubmission}
            buttonText="Create" />
        </React.Fragment>
    )
}
NewQuizForm.propTypes = {
    onNewQuizCreation: PropTypes.func,
}

export default NewQuizForm;