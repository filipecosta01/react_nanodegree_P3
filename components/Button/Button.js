import React, { Component } from 'react'

import { pink, white } from '../../utils/colors'

import styled from 'styled-components/native'

const StyledButton = styled.TouchableOpacity`
  height: 60px;
  background: ${pink};
  align-items: center;
  justify-content: center;
`

const StyledButtonTitle = styled.Text`
  color: ${white};
  font-size: 15px;
`

export class Button extends Component {

  render() {
    const { title, style, disabled, onPress } = this.props

    return (
      <StyledButton
        style={style}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={ disabled ? 1 : 0.5 }
      >
        <StyledButtonTitle>{title}</StyledButtonTitle>
      </StyledButton>
    )

  }
}

export default Button
