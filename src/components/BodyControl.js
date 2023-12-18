import React from "react";
import EditQuizForm from "./EditQuizForm";
import QuizList from "./QuizList";
import NewQuizForm from "./NewQuizForm";
import QuizDetail from "./QuizDetail";
import { useState } from "react";
import { mainQuizzes } from "../mainQuizzes";


const BodyControl = () => {
    const [mainQuizList, setMainQuizList] = useState({ mainQuizzes });
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [editing, setEditing] = useState(false);

    const handleClick = () => {
        // if (selectedTicket != null) {
        //     setFormVisibleOnPage(false);
        //     setSelectedTicket(null);
        //     setEditing(false);
        // } else {
            console.log('button clicked');
        setFormVisibleOnPage(!formVisibleOnPage);
        // }
    }
    const handleShowQuiz = () => {
        console.log('handle show quiz function');
    }
    const handleAddNewQuiz = () => {
        console.log('handle add new quiz');
    }
    let currentlyVisibleState = null;
    let buttonText = null;

// add when state changes:          
//<EditQuizForm />
// <QuizDetail />

     if (formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm 
        onNewQuizCreation={handleAddNewQuiz} />
        buttonText = "Return to main page";
    } else {
        currentlyVisibleState = <QuizList />
            //onQuizSelection={handleShowQuiz};
            buttonText= "Create new quiz";
    }

    return (
        <React.Fragment>
            {currentlyVisibleState}
            <button onClick={handleClick}>{buttonText}</button>
        </React.Fragment>
    )

}
export default BodyControl;