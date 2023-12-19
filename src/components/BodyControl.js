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
    const handleShowQuiz = (id) => {
        const selection = mainQuizList.filter(quiz => quiz.id === id)[0];
        setSelectedQuiz(selection);

        console.log('handle show quiz function');
    }
    const handleAddNewQuiz = (newQuiz) => {
        console.log(newQuiz);
        //mainQuizList.push(newQuiz);
        const newQuizList = [...mainQuizList, newQuiz];
        console.log(newQuizList);
        setMainQuizList(newQuizList);
        //setMainQuizList((prevQuizList) => [...prevQuizList, newQuizList]);
        //console.log(mainQuizList);
        setFormVisibleOnPage(false);
    }
    let currentlyVisibleState = null;
    let buttonText = null;

// add when state changes:          
//<EditQuizForm />
// <QuizDetail />

    if (selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail
        quiz={selectedQuiz}
        //onClickingDelete
        //onClickingEdit 
        />
        buttonText="Return to main quiz list";
    } else if (formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm 
        onNewQuizCreation={handleAddNewQuiz} />
        buttonText = "Return to main page";
    } else {
        currentlyVisibleState = <QuizList 
        onQuizSelection={handleShowQuiz}
        updatedList={mainQuizList}/>
            
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