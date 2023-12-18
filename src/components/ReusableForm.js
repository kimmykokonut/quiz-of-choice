import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.formSubmissionHandler}>
                <p>Please fill out the form with 5 questions and their answers to buid a new quiz for someone to take</p>
                <label htmlFor='inputName'></label>
                <input name='inputName' placeholder='name of your quiz'></input>
                <br />

                <label htmlFor="question1">{props.question1} </label>
                <input
                    type="text"
                    name="question1"
                    placeholder='first question' />
                <br />

                <label htmlFor="answer1">{props.answer1} </label>
                <input
                    type="text"
                    name="answer1"
                    placeholder='answer to question 1' />
                <br />

                <label htmlFor="question2">{props.question2} </label>
                <input
                    type="text"
                    name="question2"
                    placeholder='second question' />
                <br />

                <label htmlFor="answer2">{props.answer2} </label>
                <input
                    type="text"
                    name="answer2"
                    placeholder='answer to Question 2' />
                <br />

                <label htmlFor="question3">{props.question3} </label>
                <input
                    type="text"
                    name="question3"
                    placeholder='third question' />
                <br />
                <label htmlFor="answer3">{props.answer3} </label>
                <input
                    type="text"
                    name="answer3"
                    placeholder='answer to question 3' />
                <br />
                <label htmlFor="question4">{props.question4} </label>
                <input
                    type="text"
                    name="question4"
                    placeholder='forth question' />
                <br />

                <label htmlFor="answer4">{props.answer4} </label>
                <input
                    type="text"
                    name="answer4"
                    placeholder='answer for question 4' />
                <br />
                <label htmlFor="question5">{props.question5} </label>
                <input
                    type="text"
                    name="question5"
                    placeholder='fifth question' />
                <br />
                <label htmlFor="answer5">{props.answer5} </label>
                <input
                    type="text"
                    name="answer5"
                    placeholder='answer for question 5' />
                <br />
                <button type="submit">{props.buttonText}</button>
            </form>
        </React.Fragment>
    )
}
ReusableForm.propTypes = {
    buttonText: PropTypes.string,
    question5: PropTypes.string,
    question4: PropTypes.string,
    question3: PropTypes.string,
    question2: PropTypes.string,
    question1: PropTypes.string,
    formSubmissionHandler: PropTypes.func
};

export default ReusableForm;