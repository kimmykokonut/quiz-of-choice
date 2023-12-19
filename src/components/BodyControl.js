import React from "react";
import EditQuizForm from "./EditQuizForm";
import QuizList from "./QuizList";
import NewQuizForm from "./NewQuizForm";
import QuizDetail from "./QuizDetail";
import { useState } from "react";
import { mainQuizzes } from "../mainQuizzes";


const BodyControl = () => {
    const [mainQuizList, setMainQuizList] = useState(mainQuizzes);
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [editing, setEditing] = useState(false);

    const handleClick = () => {  //this is the button appearing on all pages
        if (selectedQuiz != null) {
            setFormVisibleOnPage(false);
            setSelectedQuiz(null);
            //     setEditing(false);
            console.log('selectquiz not null');
        } else {
            console.log('button clicked, selequiz null');
            setFormVisibleOnPage(!formVisibleOnPage);
        }
    }
    const handleShowQuiz = (id) => {
        const selection = mainQuizList.filter(quiz => quiz.id === id)[0];
        setSelectedQuiz(selection);
    }
    const handleAddNewQuiz = (newQuiz) => {
        const newQuizList = [...mainQuizList, newQuiz];
        console.log(newQuizList);
        setMainQuizList(newQuizList);
        setFormVisibleOnPage(false);
    }
    const handleTakeQuiz = (quizInput) => {
        setSelectedQuiz(selectedQuiz);
    }
    const handleEditClick = () => {
        setEditing(true);
    }

    const handleEdit = (quizToEdit) => {
        console.log(typeof quizToEdit);
        const editedQuizList = mainQuizList
        .filter(quiz => quiz.id !== selectedQuiz.id)
        .concat(quizToEdit);
        setMainQuizList(editedQuizList);
        setEditing(false);
        setSelectedQuiz(quizToEdit); 
    }
    const handleDeleteQuiz = (id) => {
        const updatedQuizList = mainQuizList.filter(quiz => quiz.id !== id);
        setMainQuizList(updatedQuizList);
        setSelectedQuiz(null);
    }

    let currentlyVisibleState = null;
    let buttonText = null;

    if (editing) {
        currentlyVisibleState= <EditQuizForm
        quiz={selectedQuiz}
        onEditQuiz={handleEdit} />
        buttonText="Return to main page";
    } else if (selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail
            quiz={selectedQuiz}
            onTakeQuiz={handleTakeQuiz}
            onClickEdit={handleEditClick}
            onClickDelete={handleDeleteQuiz}
        //onClickingDelete
        //add take quiz btn functionality
        />
        buttonText = "Return to main quiz list";
    } else if (formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm
            onNewQuizCreation={handleAddNewQuiz} />
        buttonText = "Return to main page";
    } else {
        currentlyVisibleState = <QuizList
            onQuizSelection={handleShowQuiz}
            updatedList={mainQuizList} />

        buttonText = "Create new quiz";
    }

    return (
        <React.Fragment>
            {currentlyVisibleState}
            <button onClick={handleClick}>{buttonText}</button>
        </React.Fragment>
    )

}
export default BodyControl;