import React, { Component } from 'react'

import { Keyboard, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import { white, baseBlue, pink, blueBar, darkerBlue } from '../../utils/colors'

import styled from 'styled-components/native'

import Input from '../Input'
import SubmitButton from '../Button'

const NewQuestionContainer = styled.View`
  flex: 1;
  background-color: ${baseBlue};
`

const NewQuestionTitle = styled.Text`
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

  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.title}`,
  })

  constructor(props) {
    super(props)

    this.state = {
      question: {
        value: '',
        error: null
      },
      answer: {
        value: '',
        error: null
      }
    }

    this._handleSubmit = this._handleSubmit.bind(this)
    this._onQuestionChangeText = this._onQuestionChangeText.bind(this)
    this._onAnswerChangeText = this._onAnswerChangeText.bind(this)
  }

  _onQuestionChangeText(value) {
    if (!value) {
      return this.setState({ question: { value, error: 'Should not be empty' } })
    }
    this.setState({ question: { value, error: null } })
  }

  _onAnswerChangeText(value) {
    if (!value) {
      return this.setState({ answer: { value, error: 'Should not be empty' } })
    }
    this.setState({ answer: { value, error: null } })
  }

  _handleSubmit() {
    const { title, addQuestionToDeck, navigation } = this.props
    const { question, answer } = this.state

    if (question.error || !question.error && !question.value) {
      this.setState({ question: { value: '', error: 'Should not be empty' } })
      return
    }

    if (answer.error || !answer.error && !answer.value) {
      this.setState({ answer: { value: '', error: 'Should not be empty' } })
      return
    }

    const card = {
      question: `${question.value}`,
      answer: `${answer.value}`
    }

    addQuestionToDeck(title, card)
      .then(() => navigation.goBack())
  }

  render() {
    const { question, answer } = this.state

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <NewQuestionContainer>
          <View style={{ flex: 1}}>
            <NewQuestionTitle>Insert New Question</NewQuestionTitle>
            <Input
              title="Question Title   "
              value={question.value}
              formError={question.error}
              onChangeText={this._onQuestionChangeText}
            />

            <View style={{ margin: 10 }} />

            <Input
              title="Correct Answer"
              value={answer.value}
              formError={answer.error}
              onChangeText={this._onAnswerChangeText}
            />
          </View>

          <ActionButtonContainer>
            <SubmitButton title="Submit" onPress={this._handleSubmit} />
          </ActionButtonContainer>
        </NewQuestionContainer>
      </TouchableWithoutFeedback>
    )
  }
}

export default NewDeck
