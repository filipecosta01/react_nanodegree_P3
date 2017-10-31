import React, { Component } from 'react'

import { FlatList, View, Text } from 'react-native'

import Deck from '../Deck'

import { baseBlue, white, red } from '../../utils/colors'

import styled from 'styled-components/native'

const DecksContainer = styled.View`
  flex: 1;
  background-color: ${baseBlue};
`

const DecksElementsContainer = styled.View`
  flex: 1;
`

const DecksTitle = styled.Text`
  padding: 20px;
  font-size: 30px;
  align-self: center;
  color: ${white}
`

const DecksEmptyText = styled.Text`
  color: ${red}
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

const DecksList = styled.FlatList`
  flex: 1;
`

const DecksEmptyContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`


export class Decks extends Component {

  componentDidMount() {
    const { getDecks, initialStateDecks} = this.props

    // initialStateDecks().then(() => 
      getDecks()
    // )
  }

  _keyExtractor = (item, index) => {
    return index
  }

  _handleOnPress = (deck) => {
    const { navigation } = this.props

    navigation.navigate('DeckDetails', { title: deck.title })
  }

  render() {
    const { decks, navigation } = this.props
    const hasDecks = decks && Object.keys(decks).length > 0

    return (
      <DecksContainer>
        {hasDecks &&
          <DecksElementsContainer>
            <DecksTitle>Current Decks Available</DecksTitle>
            <DecksList
              data={decks}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => ( <Deck onPressDeck={() => this._handleOnPress(item) } deck={item} /> )}
            />
          </DecksElementsContainer>
        }
        {!hasDecks &&
          <DecksEmptyContainer>
            <DecksEmptyText>Deck is empty right now. Add a new deck at the bottom.</DecksEmptyText>
          </DecksEmptyContainer>
        }
      </DecksContainer>
    )
  }
}

export default Decks
