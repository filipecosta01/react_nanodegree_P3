import { connect } from 'react-redux'

import { addQuestionToDeck } from '../reducers/deck'

import DeckNewQuestionView from '../components/DeckNewQuestion'

const getTitle = (state, props) => props.navigation.state.params.title

const mapStateToProps = (state, props) => ({
  title: getTitle(state, props)
})

const mapAcionCreators = {
  addQuestionToDeck
}

export default connect(mapStateToProps, mapAcionCreators)(DeckNewQuestionView)
