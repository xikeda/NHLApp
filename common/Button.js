import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle} = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    // LIGHT BLUE backgroundColor: '#65B2DA',
    // DARK BLUE backgroundColor: '#2980b9',
    backgroundColor: '#2980b9',
    borderRadius: 5,
    borderWidth: 1,
    // LIGHT BLUE borderColor: '#65B2DA',
    // DARK BLUE borderColor: '#2980b9',
    borderColor: '#2980b9',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5
  }
};

export {Button};
