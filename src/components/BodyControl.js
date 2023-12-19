import React, { useEffect, useState } from "react";
import EditQuizForm from "./EditQuizForm";
import QuizList from "./QuizList";
import NewQuizForm from "./NewQuizForm";
import QuizDetail from "./QuizDetail";
import { mainQuizzes } from "../mainQuizzes";
import { db, auth } from './../firebase';
//import { query, where, getDocs } from 'firebase/firestore';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";

const BodyControl = () => {
    const [mainQuizList, setMainQuizList] = useState(mainQuizzes);
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [editing, setEditing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unSubscribe = onSnapshot(
            collection(db, "quizzes"),
            (collectionSnapshop) => {
                const quizzes = [];
                collectionSnapshop.forEach((doc) => {
                    quizzes.push({
                        name: doc.data().name, //access name key to get value
                        question1: doc.data().question1,
                        answer1: doc.data().answer1,
                        question2: doc.data().question2,
                        answer2: doc.data().answer2,
                        question3: doc.data().question3,
                        answer3: doc.data().answer3,
                        question4: doc.data().question4,
                        answer4: doc.data().answer4,
                        question5: doc.data().question5,
                        answer5: doc.data().answer5,
                        id: doc.id
                    });
                });
                setMainQuizList(quizzes);
            },
            (error) => {
                setError(error.message)
            }
        );
        return () => unSubscribe();
    }, []);
    //
    // async function fetchData() {
    //     const q = query(
    //         collection(db, "quizzes"),
    //         where("name", '==', 'dog')
    //     );
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // }
    // fetchData();



    //
    const handleClick = () => {  //this is the button appearing on all pages
        if (selectedQuiz != null) {
            setFormVisibleOnPage(false);
            setSelectedQuiz(null);
        } else {
            setFormVisibleOnPage(!formVisibleOnPage);
        }
    }
    const handleShowQuiz = (id) => {
        const selection = mainQuizList.filter(quiz => quiz.id === id)[0];
        setSelectedQuiz(selection);
    }
    const handleAddNewQuiz = async (newQuizData) => {
        console.log(newQuizData);
        await addDoc(collection(db, "quizzes"), newQuizData);
        setFormVisibleOnPage(false);
    }
    const handleTakeQuiz = async (quizInput) => {
        console.log(typeof quizInput);
        console.log(quizInput);
        await addDoc(collection(db, "quizAnswers"), quizInput);
        setSelectedQuiz(selectedQuiz);
    }
    const handleEditClick = () => {
        setEditing(true);
    }

    const handleEdit = async (quizToEdit) => {

        const quizRef = doc(db, "quizzes", quizToEdit.id);
        await updateDoc(quizRef, quizToEdit)
        setEditing(false);
        setSelectedQuiz(quizToEdit);
    }
    const handleDeleteQuiz = async (id) => {
        await deleteDoc(doc(db, "quizzes", id));
        setSelectedQuiz(null);
    }

    if (auth.currentUser == null) {
        return (
            <React.Fragment>
                <h1>You must be signed in to join the quiz party.</h1>
            </React.Fragment>
        )
    } else if (auth.currentUser != null) {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (error) {
            currentlyVisibleState = <p>there was an Error {error}</p>
        } else if (editing) {
            currentlyVisibleState = <EditQuizForm
                quiz={selectedQuiz}
                onEditQuiz={handleEdit} />
            buttonText = "Return to main page";
        } else if (selectedQuiz != null) {
            currentlyVisibleState = <QuizDetail
                quiz={selectedQuiz}
                onTakeQuiz={handleTakeQuiz}
                onClickEdit={handleEditClick}
                onClickDelete={handleDeleteQuiz}
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
                {error ? null : <button onClick={handleClick}>{buttonText}</button>}
            </React.Fragment>
        );
    }
}

export default BodyControl;