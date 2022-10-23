import { prompts } from './../data/Prompts';
import { IUser, IPrompt, IStatistic } from './../data/Interfaces';
import { users } from './../data/Users';
import { ITest } from "../data/Interfaces"

export interface AuthProps {
  login: string,
  password: string
}

export interface IAction<T> {
  type: string
  payload: T
}

interface filter {
  testID: number | undefined
  userID: number | undefined
}

export interface ISort {
  type: string
  payload: filter
}

export interface IAppState {
  authorize: boolean
}

export interface ITestState {
  tests: ITest[]
  users: IUser[]
  prompts: IPrompt[],
  statistics: IStatistic[]
}

export interface IStatisticState {

}

export interface IState {
  app: IAppState
  test: ITestState
}