import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {Input, Button, Card, CardSection, Spinner} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }

  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onButtonPress(){
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  renderError() {
    if (this.props.error){
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Image
          resizeMode='contain'
          source={{uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/NHL_Center_Ice.svg/1280px-NHL_Center_Ice.svg.png'}}
          style={{height: 120, flex: 1, width: null}}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.email}
            placeholder="hockeyFan@gmail.com"
            label="Email:"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            placeholder="password"
            label="Password:"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    marginTop: 8,
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;
  return {email, password, error, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
