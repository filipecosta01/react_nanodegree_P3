import { combineReducers } from 'redux'

import deckReducer from './deck'
import entitiesReducer from './entities'

const rootReducer = combineReducers({
  deck: deckReducer,
  entities: entitiesReducer
})

export default rootReducer
