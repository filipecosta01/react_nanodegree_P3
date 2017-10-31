import React, { Component } from 'react'

import { Constants } from 'expo'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { View, Platform, StatusBar } from 'react-native'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'
import { blueBar, darkerBlue, white, pink } from '../../utils/colors'

import DeckDetailsContainer from '../../containers/DeckDetailsContainer'
import DeckNewQuestionContainer from '../../containers/DeckNewQuestionContainer'
import DecksContainer from '../../containers/DecksContainer'
import NewDeckContainer from '../../containers/NewDeckContainer'

import styled from 'styled-components/native'

const MainContainer = styled.View`
  flex: 1;
`

const StyledStatusBar = styled.View`
  background-color: ${darkerBlue};
  height: ${Constants.statusBarHeight};
`

const Tabs = TabNavigator(
  {
    Decks: {
      screen: DecksContainer,
      navigationOptions: {
        tabBarLabel: 'All Decks',
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
      }
    },

    NewDeck: {
      screen: NewDeckContainer,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <Entypo name='plus' size={30} color={tintColor} />
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: pink,
      style: {
        height: 56,
        backgroundColor: darkerBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

const Stack = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckDetails: {
      screen: DeckDetailsContainer
    },
    DeckNewQuestion: {
      screen: DeckNewQuestionContainer
    }
  },
  {
    navigationOptions: {
      headerBackTitle: 'Back',
      headerTintColor: white,
      headerBackTitleStyle: {
        color: white
      },
      headerStyle: {
        paddingTop: 0,
        borderBottomColor: white,
        backgroundColor: blueBar
      }
    },
  }
)

const FlashCardsStatusBar = ({ ...props }) => {
  return(
    <StyledStatusBar>
      <StatusBar translucent {...props} />
    </StyledStatusBar>
  )
}

export class MainNavigator extends Component {
  render() {
    return (
      <MainContainer>
        <FlashCardsStatusBar barStyle='light-content' />
        <Stack />
      </MainContainer>
    )
  }
}

export default MainNavigator
