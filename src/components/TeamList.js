import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import TeamDetail from './TeamDetail';

class TeamList extends Component {
  state = { teams: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/19mm07')
      .then(response => this.setState({teams: response.data.teams }));
  }

  renderTeams() {
    return this.state.teams
    .sort((a, b) => a.locationName > b.locationName)
    .map(team =>
       <TeamDetail key={team.teamName} team={team} />
     );
  }

  render() {
    return (
      <ScrollView style={{marginBottom: 10}}>
        {this.renderTeams()}
      </ScrollView>
    );
  }
}

export default TeamList;
