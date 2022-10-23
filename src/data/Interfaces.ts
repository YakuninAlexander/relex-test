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

export interface IStatistic {
  userID: number //польз
  testID: number //тест
  FIO: string //фио
  testTitle: string //название теста
  countOfQuestions: number //кол-во вопросов в тесте
  attemptsCount: number //количество попыток
  correctsAnswerCount: number // количесвто успешных прохождений
  attempts: IPrompt[] //попытки
}