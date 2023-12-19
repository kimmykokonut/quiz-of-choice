import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const NewQuizForm = (props) => {
    function handleNewQuizSubmission(e) {
        e.preventDefault();
        console.log(e.target.name.value)
        props.onNewQuizCreation({
            name: e.target.name.value || 'n/a',
            question1: e.target.question1.value || 'n/a',
            answer1: e.target.answer1.value || 'n/a',
            question2: e.target.question2.value || 'n/a',
            answer2: e.target.answer2.value || 'n/a',
            question3: e.target.question3.value || 'n/a',
            answer3: e.target.answer3.value || 'n/a',
            question4: e.target.question4.value || 'n/a',
            answer4: e.target.answer4.value || 'n/a',
            question5: e.target.question5.value || 'n/a',
            answer5: e.target.answer5.value || 'n/a',
            id: v4()
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