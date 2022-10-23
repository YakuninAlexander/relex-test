import { prompts } from './../data/Prompts';
import { users } from './../data/Users';
import { CREATE_TEST, DELETE_TEST, CHANGE_VISIBILITY, GET_ALL_STATISTICS, GET_TEST_STATISTICS, GET_USER_STATISTICS, GET_USER_TEST_STATISTICS } from './types';
import { tests } from './../data/Tests';
import {  ITestState } from "./intefaces"
import { AnyAction } from 'redux';
import { IPrompt, IStatistic, ITest, IUser } from '../data/Interfaces';

function createStatistic(attempts: IPrompt[], users: IUser[], tests:ITest[]): IStatistic[] {
  const statistic: IStatistic[] = [];

  users.forEach(user => {
    tests.forEach(test => {
      const userTests = attempts.filter(attempt => attempt.userID === user.userID && attempt.testID === test.testID)
      if(userTests.length!==0) {

        let correct = userTests.reduce((acum, elem) => {
          if(elem.correctAnswers === test.questions.length) 
            return ++acum
          return acum
        }, 0)

        const userTestStat:IStatistic = {
          userID: user.userID,
          testID: test.testID,
          FIO: `${user.name} ${user.surname}`,
          testTitle: test.title,
          countOfQuestions: test.questions.length,
          attemptsCount: userTests.length,
          correctsAnswerCount: correct,
          attempts: userTests
        }

        statistic.push(userTestStat)
      }
    })
  })

  return statistic
}


const initialState: ITestState = {
  tests,
  users, 
  prompts,
  statistics: createStatistic( prompts, users, tests )
}


export const testReducer = (state: ITestState = initialState, action: AnyAction) => {
  let newTests;
  switch(action.type) {
    case CREATE_TEST:
      return {...state, tests: [...state.tests, action.payload]} 
    case DELETE_TEST:
      newTests = state.tests.filter((test) => test.testID !== action.payload)
      return {...state, tests: newTests}
    case CHANGE_VISIBILITY:
      newTests = state.tests.map(e => {
        return (e.testID === action.payload.testID ? {...e, visibility: action.payload.visibility} : {...e})
      })
      return {...state, tests: newTests}

    case GET_ALL_STATISTICS:
      return {
        ...state, 
        statistics: createStatistic(state.prompts, state.users, state.tests)
      }
    case GET_TEST_STATISTICS:
      return {
        ...state, 
        statistics: createStatistic(state.prompts, state.users, state.tests)
                      .filter(stat => stat.testID === action.payload)
      }
    case GET_USER_STATISTICS:
      return {
        ...state, 
        statistics: createStatistic(state.prompts, state.users, state.tests)
                      .filter(stat => stat.userID === action.payload)
      }
    case GET_USER_TEST_STATISTICS:
      return {
        ...state, 
        statistics: createStatistic(state.prompts, state.users, state.tests)
                      .filter(stat => stat.testID === action.payload.testID && stat.userID === action.payload.userID)
      }
    default: return state
  }
}