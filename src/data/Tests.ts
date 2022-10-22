import { ITest } from './Interfaces';
import { fifteenQuestions, fiveQuestions, sevenQuestions } from './Questions';



export const tests: ITest[] = [
  {
    testID: 0,
    title: 'Test #1',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: fiveQuestions,
    visibility: true
  },
  {
    testID: 1,
    title: 'Test #2',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: sevenQuestions,
    visibility: true
  },
  {
    testID: 2,
    title: 'Test #3',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: fiveQuestions,
    visibility: true
  },
  {
    testID: 3,
    title: 'Test #4',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: fifteenQuestions,
    visibility: false
  },
  {
    testID: 4,
    title: 'Test #5',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: fifteenQuestions,
    visibility: true
  },
  {
    testID: 5,
    title: 'Test #6',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: sevenQuestions,
    visibility: true
  },
  {
    testID: 6,
    title: 'Test #7',
    description: 'Тест о том как устроена планета Земля. Попробуйте решить его, и если вы наберете хотя бы 70%, то это уже лучше чем у 90% населения Земли',
    questions: fiveQuestions,
    visibility: false
  }
]

