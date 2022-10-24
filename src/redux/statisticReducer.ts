import { GET_ALL_STATISTICS, GET_TEST_STATISTICS, GET_USER_STATISTICS, GET_USER_TEST_STATISTICS } from './types';
import { AnyAction } from 'redux';
import { IStatistic } from './../data/Interfaces';


export const statisticReducer = (state: IStatistic[] = [], action: AnyAction) => {
  switch(action.type) {
    case GET_ALL_STATISTICS:
      return state
    case GET_TEST_STATISTICS:
      return state
    case GET_USER_STATISTICS:
      return state
    case GET_USER_TEST_STATISTICS:
      return state

    default: return state
  }
}