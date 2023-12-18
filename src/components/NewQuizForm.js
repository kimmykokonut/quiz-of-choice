import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

const NewQuizForm = (props) => {
    function handleNewQuizSubmission(e) {
        e.preventDefault();
        props.onNewQuizCreation({
            //
        })
        console.log('in handle quiz sub function');
        //stuff
    };
    return(
        <React.Fragment>
            <ReusableForm
            question1="Question 1"
            answer1="Answer 1"
            question2="Question 2"
            question3="Question 3"
            question4="Question 4"
            question5="Question 5"
            formSubmissionHandler={handleNewQuizSubmission}
            buttonText="Create new quiz" />
        </React.Fragment>
    )
}
NewQuizForm.propTypes = {
    onNewQuizCreation: PropTypes.func,
}

export default NewQuizForm;