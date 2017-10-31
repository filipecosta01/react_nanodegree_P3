import React, { Component } from 'react'
import { red, white, blueBar, darkGrey, darkerBlue } from '../../utils/colors'

import styled from 'styled-components/native'

const QuestionCard = styled.View`
  flex: 1;
  height: 100px;
  padding: 20px;
  margin: 10px 10px 0 10px;
  border-radius: 2px;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${white};
  background-color: ${blueBar};
`

const QuestionCardInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`

const QuestionCardMoreInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const QuestionTitle = styled.Text`
  color: ${white};
  font-size: 20px;
`

const QuestionSubtitle = styled.Text`
  color: ${darkGrey};
  font-size: 15px;
`

export class Question extends Component {
  render() {
    const { question } = this.props

    return (
      <QuestionCard>
        <QuestionCardInfo>
          <QuestionTitle>Question: </QuestionTitle>
          <QuestionCardMoreInfo>
            <QuestionSubtitle>{question}</QuestionSubtitle>
          </QuestionCardMoreInfo>
        </QuestionCardInfo>
      </QuestionCard>
    )

  }
}

export default Question
