import React, { Component } from 'react'
import { Animated, View, Text} from 'react-native'
import { red, green, white, baseBlue, pink, blueBar, darkerBlue } from '../../utils/colors'

import Button from '../Button'
import QuizCard from '../QuizCard'
import { Bar } from 'react-native-progress'
import styled from 'styled-components/native'

const QuizContainer = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${darkerBlue};
`

const QuizCardContainer = styled.View`
  flex: 2;
`

const QuizProgressContainer = styled.View`
  flex: 1;
  align-items: center;
`

const QuizCardActionContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`

const QuizProgressText = styled.Text`
  font-size: 20;
  color: ${white};
`

const QuizCardScore = styled.View`
  flex: 2;
`

const QuizCardScoreContainer = styled.View`
  flex: 1;
  padding: 20px;
  margin: 25px 35px;
  border-radius: 20px;
  border: 1px solid ${white};
  background-color: ${baseBlue}
`

const SummaryTitle = styled.Text`
  flex: 2;
  color: ${white};
  font-size: 40px;
  align-self: center;
`

const QuizCorrectAnswersText = styled.Text`
  flex: 1;
  color: ${green};
  font-size: 30px;
  align-self: center;
`

const QuizWrongAnswersText = styled.Text`
  flex: 1;
  color: ${red};
  font-size: 30px;
  align-self: center;
`

export class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.title} Questions`,
  })

  constructor(props) {
    super(props)

    this.state = {
      wrongAnswers: 0,
      correctAnswers: 0,
      currentQuestion: 0,
    }

    this._onPressWrongAnswer = this._onPressWrongAnswer.bind(this)
    this._onPressCorrectAnswer = this._onPressCorrectAnswer.bind(this)

    this._onPressRestart = this._onPressRestart.bind(this)
    this._onPressFinish = this._onPressFinish.bind(this)
  }

  _onPressCorrectAnswer() {
    const { correctAnswers, currentQuestion } = this.state
    this.setState({ correctAnswers: correctAnswers + 1, currentQuestion: currentQuestion + 1 })
  }

  _onPressRestart() {
    const { wrongAnswers, currentQuestion } = this.state
    this.setState({ wrongAnswers: 0, currentQuestion: 0, correctAnswers: 0 })
  }

  _onPressFinish() {
    const { navigation } = this.props
    navigation.goBack()
  }

  _onPressWrongAnswer() {
    const { wrongAnswers, currentQuestion } = this.state
    this.setState({ wrongAnswers: wrongAnswers + 1, currentQuestion: currentQuestion + 1 })
  }

  render() {
    const { questions } = this.props
    const { currentQuestion, wrongAnswers, correctAnswers } = this.state
    const leftQuestions = questions.length - currentQuestion
    const progressInformation = leftQuestions === 0 ? "All done!"
      : `${leftQuestions} question${leftQuestions !== 1 ? "s" : ""} left`

    const progress = currentQuestion / questions.length
    const hasMoreQuestions = currentQuestion < questions.length
    const { question, answer } = hasMoreQuestions ? questions[currentQuestion] : {}

    return(
      <QuizContainer>
        {hasMoreQuestions &&
          <QuizCardContainer>
            <QuizCard question={question} answer={answer} />
          </QuizCardContainer>
        }
        {!hasMoreQuestions &&
          <QuizCardScore>
            <QuizCardScoreContainer>
              <SummaryTitle>
                Summary
              </SummaryTitle>
              <QuizCorrectAnswersText>
                {correctAnswers}
                {' '}
                correct answer{correctAnswers !== 1 && "s"}.
              </QuizCorrectAnswersText>
              <QuizWrongAnswersText>
                {wrongAnswers}
                {' '}
                wrong answer{wrongAnswers !== 1 && "s"}.
              </QuizWrongAnswersText>
            </QuizCardScoreContainer>
          </QuizCardScore>
        }
        <QuizProgressContainer>
          <Bar
            width={300}
            height={20}
            color={pink}
            progress={progress}
            borderColor={white}
          />
          <QuizProgressText>{progressInformation}</QuizProgressText>
        </QuizProgressContainer>
        <QuizCardActionContainer>
          <Button
            title={hasMoreQuestions ? "Wrong Answer" : "Restart Quiz"}
            onPress={hasMoreQuestions ? this._onPressWrongAnswer : this._onPressRestart}
            style={{ width: 200, backgroundColor: red }}
          />

          <Button
            title={hasMoreQuestions ? "Correct Answer" : "Finish Quiz"}
            style={{ width: 200, backgroundColor: green }}
            onPress={hasMoreQuestions ? this._onPressCorrectAnswer : this._onPressFinish}
          />
        </QuizCardActionContainer>
      </QuizContainer>
    )
  }
}

export default Quiz