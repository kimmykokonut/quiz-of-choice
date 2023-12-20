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
                        answer1a: doc.data().answer1a,
                        answer1b: doc.data().answer1b,
                        answer1c: doc.data().answer1c,
                        answer1d: doc.data().answer1d,
                        correctanswer1: doc.data().correctanswer1,
                        question2: doc.data().question2,
                        answer2a: doc.data().answer2a,
                        answer2b: doc.data().answer2b,
                        answer2c: doc.data().answer2c,
                        answer2d: doc.data().answer2d,
                        correctanswer2: doc.data().correctanswer2,
                        question3: doc.data().question3,
                        answer3a: doc.data().answer3a,
                        answer3b: doc.data().answer3b,
                        answer3c: doc.data().answer3c,
                        answer3d: doc.data().answer3d,
                        correctanswer3: doc.data().correctanswer3,
                        question4: doc.data().question4,
                        answer4a: doc.data().answer4a,
                        answer4b: doc.data().answer4b,
                        answer4c: doc.data().answer4c,
                        answer4d: doc.data().answer4d,
                        correctanswer4: doc.data().correctanswer4,
                        question5: doc.data().question5,
                        answer5a: doc.data().answer5a,
                        answer5b: doc.data().answer5b,
                        answer5c: doc.data().answer5c,
                        answer5d: doc.data().answer5d,
                        correctanswer5: doc.data().correctanswer5,
                        id: doc.id,
                        userId: doc.data().userId
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
    //TAKE QUIZ F HERE
    const handleTakeQuiz = async (quizInput) => {
        console.log(typeof quizInput); //object
        console.log(quizInput); //answer1: 1a (picked) success firestore
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