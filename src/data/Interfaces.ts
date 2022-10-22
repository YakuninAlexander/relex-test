export interface IPrompt {
  userID: number
  datetime: number
  passingTime: string
  testID: number
  correctAnswers: number
}

export interface ITest {
  testID: number
  title: string
  description: string
  questions: IQuestion[]
  visibility: boolean
}

export interface IQuestion {
  question: string
  answer: IAnswer[]
}

export interface IAnswer {
  answer: string
  isCorrect: Boolean
}

export interface IUser {
  userID: number
  name: string
  surname: string
  age: number
}