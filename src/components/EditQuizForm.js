import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

const EditQuizForm = (props) => {
    const { quiz } = props;

    function handleEditFormSubmission(e) {
        e.preventDefault();
        props.onEditQuiz({
            name: e.target.name.value || quiz.name,
            question1: e.target.question1.value || quiz.question1,
            answer1: e.target.answer1.value || quiz.answer1,
            question2: e.target.question2.value || quiz.question2,
            answer2: e.target.answer2.value || quiz.answer2,
            question3: e.target.question3.value || quiz.question3,
            answer3: e.target.answer3.value || quiz.answer3,
            question4: e.target.question4.value || quiz.question4,
            answer4: e.target.answer4.value || quiz.answer4,
            question5: e.target.question5.value || quiz.question5,
            answer5: e.target.answer5.value || quiz.answer5,
            id: quiz.id
        });
    }

    return (
        <React.Fragment>
            <h2>You can edit quiz q and a here: </h2>
            <p>{quiz.name}</p>
            <ReusableForm
                formSubmissionHandler={handleEditFormSubmission}
                buttonText="update Quiz" />
        </React.Fragment>
    );
}

EditQuizForm.propTypes = {
    onEditQuiz: PropTypes.func,
    quiz: PropTypes.object
};


export default EditQuizForm;