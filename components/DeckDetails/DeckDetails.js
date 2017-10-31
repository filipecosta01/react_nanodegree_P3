import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import { red, green, white, blueBar, darkGrey, darkerBlue } from '../../utils/colors'

import Button from '../Button'
import Question from '../Question'
import Deck from '../Deck'
import styled from 'styled-components/native'

const DeckDetailsContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${darkerBlue};
`

const DeckInfoContainer = styled.View`
  flex: 2;
  margin-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
  flex-direction: row;
  justify-content: center;
`

const DeckCard = styled.View`
  flex: 1;
  height: 100px;
  padding: 20px;
  border-radius: 2px;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${white};
  background-color: ${blueBar};
`

const DeckTitle = styled.Text`
  flex: 1;
  color: ${white};
  font-size: 20px;
`

const DeckCardsNumber = styled.Text`
flex: 1;
font-size: 15px;
color: ${darkGrey};
`

const QuestionsEmptyContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`

const QuestionsEmptyText = styled.Text`
  color: ${red}
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

const QuestionActionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

export class DeckDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.title}`,
  })

  _keyExtractor = (item, index) => {
    return index
  }

  _handleAddQuestion = () => {
    const { navigation, deck } = this.props

    navigation.navigate('DeckNewQuestion', { title: deck.title })
  }

  render() {
    const { deck } = this.props
    const pluralize = deck.questions.length !== 1
    const hasQuestions = deck.questions.length > 0

    return (
      <DeckDetailsContainer>
        {hasQuestions &&
          <DeckInfoContainer>
            <DeckCard>
              <DeckTitle>{deck.title}</DeckTitle>
              <DeckCardsNumber>{deck.questions.length} card{pluralize ? 's' : ''} on this deck</DeckCardsNumber>
            </DeckCard>
          </DeckInfoContainer>
        }
        {!hasQuestions &&
          <QuestionsEmptyContainer>
            <QuestionsEmptyText>No questions for this deck. Add new questions to start the quiz.</QuestionsEmptyText>
          </QuestionsEmptyContainer>
        }

        <QuestionActionContainer>
          <Button
            title="Add New Question"
            style={{ width: 200 }}
            onPress={this._handleAddQuestion}
          />

          <Button
            title="Start Quiz"
            onPress={this._handleStartQuiz}
            style={{ width: 200, backgroundColor: green }}
          />

        </QuestionActionContainer>
      </DeckDetailsContainer>
    )
  }
}

export default DeckDetails
