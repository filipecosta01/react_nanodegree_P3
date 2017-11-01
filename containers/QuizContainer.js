import { connect } from 'react-redux'

import QuizView from '../components/Quiz'

const getQuestionsFromDeckTitle = (state, props) => state.entities.decks[props.navigation.state.params.title].questions

const mapStateToProps = (state, props) => ({
  questions: getQuestionsFromDeckTitle(state, props)
})

const mapAcionCreators = {}

export default connect(mapStateToProps, mapAcionCreators)(QuizView)
