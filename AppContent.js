import {
  Container,
  Header,
  Title,
  text,
  ListItem,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import Expo from "expo";
import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    backgroundColor: "#800000"
  },
  footer: {
    backgroundColor: "#800000"
  }
});

export default class AppContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container style={styles.container}>
        {/* <StatusBar hidden={true} /> */}

        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Impact Todo</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Text>Hello, user!</Text>

          <Button>
            <Text>Submit</Text>
          </Button>

          <ListItem />
        </Content>

        <Footer style={styles.footer}>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
