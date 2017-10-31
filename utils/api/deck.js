import { AsyncStorage } from 'react-native'
import { UDACI_MOBILE_FLASHCARD } from '../../utils'

export const DeckAPI = {

  initialState() {
    return AsyncStorage.setItem(UDACI_MOBILE_FLASHCARD, JSON.stringify({
      React: {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }))
  },

  listAllDecks() {
    return AsyncStorage.getItem(UDACI_MOBILE_FLASHCARD)
  },

  addToDeck(title) {
    return AsyncStorage.mergeItem(UDACI_MOBILE_FLASHCARD, JSON.stringify({
      [title]: {
        title,
        questions: []
      }
    })).then(() => this.listAllDecks())
  },

  addQuestionToDeck(title, card) {
    return AsyncStorage.getItem(UDACI_MOBILE_FLASHCARD).then(
      (result) => {
        const myStorageResults = JSON.parse(result)
        const oldQuestions = myStorageResults[title].questions

        return AsyncStorage.mergeItem(UDACI_MOBILE_FLASHCARD, JSON.stringify({
          [title]: {
            questions: [
              ...oldQuestions,
              {
                question: card.question,
                answer: card.answer
              }
            ]
          }
        }))
      }
    ).then(() => this.listAllDecks())
  }
}