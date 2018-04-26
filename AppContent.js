import {
  Badge,
  Body,
  Button,
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  H1,
  Header,
  Icon,
  Input,
  Item,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Title
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
  },
  footerButton: {
    backgroundColor: "#111111"
  },
  welcome: {
    padding: 10
  },
  close: {
    fontSize: 30,
    color: "#800000",
    paddingRight: 10
  }
});

const todos = [
  "Create a web app",
  "Build a mobile app",
  "Enjoy life",
  "Adventure on!"
];

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
          <H1>Hello, user!</H1>

          <Form>
            <Item>
              <Input placeholder="What's on your mind?" />
            </Item>
          </Form>

          <Button block success>
            <Text>Submit Todo</Text>
          </Button>

          <List>
            {todos.map((todo, index) => {
              return (
                <ListItem key={index}>
                  <Icon name="close" style={styles.close} />
                  <Text>{todo}</Text>
                </ListItem>
              );
            })}
          </List>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Home</Text>
            </Button>
            <Button vertical badge active>
              <Badge>
                <Text>3</Text>
              </Badge>
              <Icon type="Foundation" name="clipboard-pencil" />
              <Text>Todo</Text>
            </Button>
            <Button vertical>
              <Icon active name="navigate" />
              <Text>Settings</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>About</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
