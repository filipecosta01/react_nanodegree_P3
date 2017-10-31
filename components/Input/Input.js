import React, { Component } from 'react'

import { red, white, baseBlue, blueBar, darkGrey } from '../../utils/colors'

import { View, Text, TextInput } from 'react-native'

import styled from 'styled-components/native'

const Container = styled.View`
  margin: 0 10px;
  align-items: center;
`

const InputContainer = styled.View`
  border-radius: 2px;
  align-items: center;
  flex-direction: row;
  background-color: ${blueBar};
`

const InputLabelContainer = styled.View`
  padding: 12px;
  border-right-width: 1px;
  border-right-color: ${darkGrey};
`

const StyledInput = styled.TextInput`
  flex: 1;
  margin-left: 12px;
  margin-right: 12px;
  background-color: ${blueBar};
`

const MainErrorContainer = styled.View`
  flex-direction: row;
`

const ErrorContainer = styled.View`
  flex: 1;
  max-height: 30px;
  border-radius: 2px;
  background-color: ${red};
`

const ErrorText = styled.Text`
  color: ${white};
  align-self: center;
`

export class Input extends Component {
  render() {
    const { style, title, value, onChangeText, formError } = this.props

    return (
      <Container>
        <InputContainer style={style}>
          <InputLabelContainer>
            <Text>{title}</Text>
          </InputLabelContainer>
          <StyledInput
            value={value}
            onChangeText={onChangeText}
          />
        </InputContainer>
        {formError &&
          <MainErrorContainer>
            <ErrorContainer>
              <ErrorText>{formError}</ErrorText>
            </ErrorContainer>
          </MainErrorContainer>
        }
      </Container>
    )
  }
}

export default Input
