/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginContainer from './LoginContainer.js'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.topContainer}>
            <View style={styles.roundContainer}>
              <Text style={styles.welcome}>[I'll put the logo here]</Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.roundContainer}>
              <Text style={styles.welcome}>[Login]</Text>
            </View>
            <View style={styles.roundContainer}>
              <Text style={styles.welcome}>[Password]</Text>
            </View>
            <LoginContainer text={"Test Text"}>
            </LoginContainer>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loginContainer: {
    flexDirection: "column",
    width: "90%",
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 25,
  },
  roundContainer: {
    height: 60,
    width: "90%",
    backgroundColor: "#EEE",
    borderRadius: 75,
    flexDirection: "column",
  },
  topContainer: {
    marginTop: "25%",
    height: "35%",
    width: "100%",
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  bottomContainer: {
    height: "35%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginBottom: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});