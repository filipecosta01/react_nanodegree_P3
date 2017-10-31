import React, { Component } from 'react'

import { View, Text, TouchableOpacity } from 'react-native'

import { white, blueBar, darkGrey, darkerBlue } from '../../utils/colors'

import styled from 'styled-components/native'

const DeckContainer = styled.View`
  flex: 1;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 20px;
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

export class Deck extends Component {

  render() {
    const { deck, onPressDeck } = this.props
    const pluralize = deck.questions.length !== 1

    return (
      <DeckContainer>
        <TouchableOpacity onPress={onPressDeck}>
          <DeckCard>
            <DeckTitle>{deck.title}</DeckTitle>
            <DeckCardsNumber>{deck.questions.length} card{pluralize ? 's' : ''} on this deck</DeckCardsNumber>
          </DeckCard>
        </TouchableOpacity>
      </DeckContainer>
    )
  }
}

export default Deck
