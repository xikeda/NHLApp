import React from 'react';
import firebase from 'firebase';
import {Scene, Router, Actions, Stack} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TeamList from './components/TeamList';
import TeamDetail from './components/TeamDetail';
import TeamCenter from './components/TeamCenter';
import News from './components/News';

const RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: '#2980b9'}}  titleStyle={{ color:'#fff', alignSelf:'center' }}>
      <Stack key="root" hideNavBar>
        <Stack key="auth">
          <Scene key="Login" component={LoginForm} title="NHL Center Ice"
          initial/>
        </Stack>
        <Stack key="main">
          <Scene key="TeamList" component={TeamList} title="NHL Teams"
          onLeft={() => logUserOut()} leftTitle="Log out" leftButtonTextStyle={{color: '#fff'}}
          rightTitle="News" navButtonTextStyle={{color: '#fff'}} onRight={() => Actions.News()} navBarButtonColor='#fff'/>
          <Scene key="TeamCenter" component={TeamCenter} title="Team"
          leftTitle="Back" navButtonTextStyle={{color: '#fff'}} onLeft={() => Actions.TeamList()} navBarButtonColor='#fff'/>
          <Scene key="News" component={News} title="NHL News"
          leftTitle="Back" navButtonTextStyle={{color: '#fff'}} onLeft={() => Actions.TeamList()} navBarButtonColor='#fff'/>
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
