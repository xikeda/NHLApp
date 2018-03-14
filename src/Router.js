import React from 'react';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TeamList from './components/TeamList';
// import GameList from './components/GameList';
import TeamDetail from './components/TeamDetail';
// import TeamCenter from './components/TeamCenter';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#2980b9'}}  titleStyle={{ color:'#fff', alignSelf:'center' }}>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene key="Login" component={LoginForm} title="NHL Center Ice"/>
        </Stack>
        <Stack key="main">
          <Scene key="TeamList" component={TeamList} title="NHL Teams"
          onLeft={() => logUserOut()} leftTitle="Log out" leftButtonTextStyle={{color: '#fff'}}/>
        </Stack>
      </Stack>
    </Router>
  );
};

const logUserOut = () => {
    firebase.auth().signOut()
      .then(() => {
        Actions.auth();
      });
};

export default RouterComponent;
