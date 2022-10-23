import { ITest } from './../data/Interfaces';
import { AuthProps } from "./intefaces";
import { CHANGE_VISIBILITY, CREATE_TEST, DELETE_TEST, GET_ALL_STATISTICS, GET_TEST_STATISTICS, GET_USER_STATISTICS, GET_USER_TEST_STATISTICS, LOG_OUT, SIGN_IN } from "./types";

export function logOut() {
  return {
    type: LOG_OUT
  }
}

export function auth(logInfo: AuthProps) {
  return {
    type: SIGN_IN,
    payload: logInfo
  }
}



export function addTest(newTest: ITest) {
  return {
    type: CREATE_TEST,
    payload: newTest
  }
}

export function deleteTest(testID: number) {
  return {
    type: DELETE_TEST,
    payload: testID
  }
}

export function changeVisibility(testID: number, visibility: boolean) {
  return {
    type: CHANGE_VISIBILITY,
    payload: {testID, visibility}
  }
}



export function getAllStat() {
  return {
    type: GET_ALL_STATISTICS
  }
}

export function getUserStat(userID: number) {
  return {
    type: GET_USER_STATISTICS,
    payload: userID
  }
}

export function getTestStat(testID: number) {
  return {
    type: GET_TEST_STATISTICS,
    payload: testID
  }
}

export function getUserTestStat(userID: number, testID: number) {
  return {
    type: GET_USER_TEST_STATISTICS,
    payload: {
      testID, 
      userID
    }
  }
}

