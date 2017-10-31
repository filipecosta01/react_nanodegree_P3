import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const MERGE_DECKS = 'MERGE_DECKS'
export const MERGE_QUESTION = 'MERGE_QUESTION'

// ------------------------------------
// Actions
// ------------------------------------
export const mergeDecks = (decks = {}) => ({
  type: MERGE_DECKS,
  decks
})

export const mergeQuestion = (deckName = '', question = {}) => ({
  type: MERGE_QUESTION,
  deckName,
  question
})

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [MERGE_DECKS]: (state, { decks }) => ({
    ...state,
    decks: {
      ...state.decks,
      ...decks
    }
  }),
  [MERGE_QUESTION]: (state, { deckName, question }) => ({
    ...state,
    decks: {
      ...state.decks,
      [deckName]: {
        ...state.decks[deckName],
        questions: [
          ...state.decks[deckName].questions,
          ...question
        ]
      }
    }
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  /**
   * Application wide entities
   */
  decks: {}
}

export default function entitiesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
