import { IQuestion } from "./Interfaces";

export const question: IQuestion = {
  question: '',
  answer: []
} // заглушка для вопроса

export const fiveQuestions: IQuestion[] = [question, question, question, question, question]
export const sevenQuestions: IQuestion[] = [...fiveQuestions, question, question]
export const fifteenQuestions: IQuestion[] = [...fiveQuestions, ...fiveQuestions, ...fiveQuestions];