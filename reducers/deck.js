import { DeckAPI } from '../utils/api'
import { normalize } from 'normalizr'

import * as schemas from '../schemas'
import * as entities from './entities'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_DECKS = 'GET_MEMBERS'
export const GET_DECKS_FAILURE = 'GET_DECKS_FAILURE'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'

export const ADD_DECK = 'ADD_DECK'
export const ADD_DECK_FAILURE = 'ADD_DECK_FAILURE'
export const ADD_DECK_SUCCESS = 'ADD_DECK_SUCCESS'

export const ADD_QUESTION_TO_DECK = 'ADD_QUESTION_TO_DECK'
export const ADD_QUESTION_TO_DECK_FAILURE = 'ADD_QUESTION_TO_DECK_FAILURE'
export const ADD_QUESTION_TO_DECK_SUCCESS = 'ADD_QUESTION_TO_DECK_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
// ------------------------------------
// Actions
// ------------------------------------
export const getDecks = () => async dispatch => {
  dispatch({ type: GET_DECKS })

  try {
    const response = await DeckAPI.listAllDecks()
    return getDecksSuccess({ response, dispatch })
  } catch(error) {
    dispatch({ type: GET_DECKS_FAILURE, error })
  }
}

export const addToDeck = (title) => async dispatch => {
  dispatch({ type: ADD_DECK })

  try {
    const response = await DeckAPI.addToDeck(title)
    return addToDeckSuccess({ response, dispatch })
  } catch(error) {
    dispatch({ type: GET_DECKS_FAILURE, error })
  }
}

export const addQuestionToDeck = (title, card) => async dispatch => {
  dispatch({ type: ADD_QUESTION_TO_DECK })

  try {
    const response = await DeckAPI.addQuestionToDeck(title, card)
    return addQuestionToDeckSuccess({ response, title, dispatch })
  } catch(error) {
    console.log(error)
    dispatch({ type: ADD_QUESTION_TO_DECK_FAILURE, error })
  }
}

export const initialStateDecks = () => async dispatch => {
  try {
    const response = await DeckAPI.initialState()
    return {}
  } catch(error) {
    console.log(error)
  }
}

// ------------------------------------
// Actions Success
// ------------------------------------
export const getDecksSuccess = ({ response, dispatch }) => {
  const normalized = normalize(JSON.parse(response), [ schemas.deck ] )
  const { decks } = normalized.entities

  dispatch(entities.mergeDecks(decks))

  dispatch({ type: GET_DECKS_SUCCESS })

  return normalized.result
}

export const addToDeckSuccess = ({ response, dispatch }) => {
  const normalized = normalize(JSON.parse(response), [ schemas.deck ] )
  const { decks } = normalized.entities

  dispatch(entities.mergeDecks(decks))

  dispatch({ type: ADD_DECK_SUCCESS })

  return normalized.result
}

export const addQuestionToDeckSuccess = ({ response, title, dispatch }) => {
  const normalized = normalize(JSON.parse(response), [ schemas.deck ] )
  const { decks } = normalized.entities

  dispatch(entities.mergeDecks(decks))

  dispatch({ type: ADD_QUESTION_TO_DECK_SUCCESS })

  return JSON.parse(response)[title]
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_DECKS]: state => ({
    ...state,
    error: null,
    isLoading: true
  }),
  [GET_DECKS_FAILURE]: (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }),
  [GET_DECKS_SUCCESS]: state => ({
    ...state,
    error: null,
    isLoading: false
  }),

  [ADD_DECK]: state => ({
    ...state,
    error: null,
    isLoading: true
  }),
  [ADD_DECK_FAILURE]: (state, { error }) => ({
    ...state,
    error,
    isLoading: false
  }),
  [ADD_DECK_SUCCESS]: state => ({
    ...state,
    error: null,
    isLoading: false
  })
}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  /**
   * Application wide entities
   */
  error: null,
  isLoading: false
}

export default function deckReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
