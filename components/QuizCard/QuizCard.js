import React, { Component } from 'react'

import styled from 'styled-components/native'

import { white, baseBlue, darkGrey, red, lightYellow, green, pink, blueBar, darkBlue, darkerBlue } from '../../utils/colors'

const QuizCardContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 12px;
  align-items: center;
  justify-content: center;
`

const MainCardContainer = styled.View`
  width: 300px;
  height: 200px;
  padding: 20px;
  border-radius: 15px;
  align-items: center;
  border: 1px solid ${blueBar};
`

const QuestionTitle = styled.Text`
  flex: 2;
  color: ${darkBlue};
  font-size: 40px;
  align-self: center;
`

const QuestionText = styled.Text`
  flex: 2;
  font-size: 20px;
  color: ${darkerBlue};
`

const QuestionTip = styled.Text`
  flex: 1;
  font-size: 15px;
  color: ${red};
`

const AnswerTitle = styled.Text`
  flex: 2;
  color: ${white};
  font-size: 40px;
  align-self: center;
`

const AnswerText = styled.Text`
  flex: 2;
  font-size: 20px;
  color: ${darkGrey};
`

const AnswerTip = styled.Text`
  flex: 1;
  font-size: 15px;
  color: ${pink};
`

export class QuizCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showCardBack: false
    }

    this._handleOnFlip = this._handleOnFlip.bind(this)
  }

  _handleOnFlip() {
    const { showCardBack } = this.state

    this.setState({ showCardBack: !showCardBack })
  }

  render() {
    const { showCardBack } = this.state
    const { question, answer } = this.props

    return (
      <QuizCardContainer onPress={this._handleOnFlip}>
        {!showCardBack &&
          <MainCardContainer style={{ backgroundColor: lightYellow }}>
            <QuestionTitle>
              Question
            </QuestionTitle>
            <QuestionText>
              {question}
            </QuestionText>
            <QuestionTip>Show Answer</QuestionTip>
          </MainCardContainer>
        }
        {showCardBack &&
          <MainCardContainer style={{ backgroundColor: blueBar }}>
            <AnswerTitle>
              Answer
            </AnswerTitle>
            <AnswerText>
              {answer}
            </AnswerText>
            <AnswerTip>Show Question</AnswerTip>
          </MainCardContainer>
        }
      </QuizCardContainer>
    )
  }
}

export default QuizCard