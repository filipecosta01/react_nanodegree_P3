import React, { Component } from 'react'

import { Keyboard, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import { white, baseBlue, pink, blueBar, darkerBlue } from '../../utils/colors'

import styled from 'styled-components/native'

import Input from '../Input'
import SubmitButton from '../Button'

const NewDeckContainer = styled.View`
  flex: 1;
  background-color: ${baseBlue};
`

const NewDeckTitle = styled.Text`
  padding: 20px;
  font-size: 30px;
  align-self: center;
  color: ${white}
`

const ActionButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export class NewDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deckTitle: {
        value: '',
        error: null
      }
    }

    this._onChangeText = this._onChangeText.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }

  _onChangeText(value) {
    if (!value) {
      return this.setState({ deckTitle: { value, error: 'Should not be empty' } })
    }
    this.setState({ deckTitle: { value, error: null } })
  }

  _handleSubmit() {
    const { addToDeck, navigation } = this.props
    const { deckTitle } = this.state
    const { value, error } = deckTitle

    if (error || !error && !value) {
      this.setState({ deckTitle: { value: '', error: 'Should not be empty' } })
      return
    }

    addToDeck(value)
      .then(() => navigation.navigate('Home'))
  }

  render() {
    const { deckTitle } = this.state

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <NewDeckContainer>
          <View style={{ flex: 1 }}>
            <NewDeckTitle>Insert New Deck</NewDeckTitle>
            <Input title="Deck Name" value={deckTitle.value} formError={deckTitle.error} onChangeText={this._onChangeText} />
          </View>
          <ActionButtonContainer>
            <SubmitButton title="Submit" onPress={this._handleSubmit} />
          </ActionButtonContainer>
        </NewDeckContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default NewDeck
