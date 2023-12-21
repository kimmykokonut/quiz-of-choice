import userSliceReducer, { initialState } from "./../../redux/userSlice";

describe('userSliceReducer', () => {
  const testState = {
    email: "test@test.com",
    displayName: "",
    photoURL: "",
    uid: "1234567890",
    quizzesCreated: [],
    quizzesTaken: {},
  };
  it('should return the initial state if no action is passed', () => {
    expect(userSliceReducer(testState, {})).toEqual({
      email: "test@test.com",
      displayName: "",
      photoURL: "",
      uid: "1234567890",
      quizzesCreated: [],
      quizzesTaken: {},
    });
  });
  it('should handle addUserProfile action', () => {
    expect(userSliceReducer(testState, {
      type: 'user/addUserProfile',
      payload: {
        displayName: "someoneCool",
        photoURL: "lorempixel.com/200/200",
      },
    })).toEqual({
      email: "test@test.com",
      displayName: "someoneCool",
      photoURL: "lorempixel.com/200/200",
      uid: "1234567890",
      quizzesCreated: [],
      quizzesTaken: {},
    });
  });
  it('should handle createQuiz action', () => {
    expect(userSliceReducer(testState, {
      type: 'user/createQuiz',
      payload: {
        quizName: "quiz1",
      },
    })).toEqual({
      email: "test@test.com",
      displayName: "",
      photoURL: "",
      uid: "1234567890",
      quizzesCreated: ['quiz1'],
      quizzesTaken: {},
    });
  });
  it('should handle takeQuiz action', () => {
    expect(userSliceReducer(testState, {
      type: 'user/takeQuiz',
      payload: {
        quizName: "quiz1",
        score: 100,
      },
    })).toEqual({
      email: "test@test.com",
      displayName: "",
      photoURL: "",
      uid: "1234567890",
      quizzesCreated: [],
      quizzesTaken: {
        quiz1: 100
      }
    });
  });

});
