import {
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
  close: {
    fontSize: 30,
    color: "#800000",
    paddingRight: 10
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
          <H1>Hello, user!</H1>

          <Form>
            <Item>
              <Input placeholder="What's on your mind?" />
            </Item>
          </Form>

          <Button full success>
            <Text>Submit Todo</Text>
          </Button>

          <List>
            <ListItem>
              <Icon name="close" style={styles.close} />
              <Text>Create a web app</Text>
            </ListItem>
            <ListItem>
              <Icon name="close" style={styles.close} />
              <Text>Build a mobile app</Text>
            </ListItem>
            <ListItem>
              <Icon name="close" style={styles.close} />
              <Text>Enjoy life...</Text>
            </ListItem>
          </List>
        </Content>

        <Footer style={styles.footer}>
          <FooterTab>
            <Button full style={styles.footerButton}>
              <Text>&copy; Impact Byte</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
