import { connect } from 'react-redux'

import { addToDeck } from '../reducers/deck'

import NewDecksView from '../components/NewDeck'

const mapStateToProps = (state, props) => ({})

const mapAcionCreators = {
  addToDeck
}

export default connect(mapStateToProps, mapAcionCreators)(NewDecksView)
