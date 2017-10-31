import { connect } from 'react-redux'

import { getDecks, initialStateDecks } from '../reducers/deck'

import DecksView from '../components/Decks'

const mapStateToProps = (state, props) => ({
  decks: Object.values(state.entities.decks),
  navigation: props.navigation
})

const mapAcionCreators = {
  initialStateDecks,
  getDecks
}

export default connect(mapStateToProps, mapAcionCreators)(DecksView)
