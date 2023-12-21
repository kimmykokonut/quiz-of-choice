import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null, //from auth
  displayName: "",
  email: "", //from db
  photoURL: "", //get info from form. update db & dash
  uid: "", //from db
  quizzesCreated: [], //query from db
  quizzesTaken: {}, //query from db
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserProfile(state, action) {
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
    },
    createQuiz(state, action) {
      state.quizzesCreated.push(action.payload.quizName);
    },
    takeQuiz(state, action) {
      state.quizzesTaken[action.payload.quizName] = action.payload.score;
    },
    saveScore(state, action) {
      if (state.quizzesTaken[action.payload.quizName]) {
        state.quizzesTaken[action.payload.quizName].score = action.payload.score;
      }
    },
  },
});

export default userSlice.reducer;
export const { addUserProfile, createQuiz, takeQuiz, saveScore } = userSlice.actions;
export const userSelector = (state) => state.user.currentUser;