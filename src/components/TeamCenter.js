import React, { Component } from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {Card, CardSection, Button} from './common';
import TeamCardSection from './TeamCardSection';
import TeamCardSection2 from './TeamCardSection2';

const TeamCenter = ({team}) => {
  const {name, venue, firstYearOfPlay, division, conference, teamName, locationName, logo, officialSiteUrl, longitude, latitude} = team;

  return (
      <Card>
        <CardSection>
          <Image
            resizeMode='contain'
            source={{uri: logo}}
            style={{height: 120, flex: 1, width: null}}
          />
        </CardSection>
        <TeamCardSection2>
          <Text style={styles.titleStyle}>{name}</Text>
        </TeamCardSection2>
        <TeamCardSection>
          <Text>{division.name} Division</Text>
          <Text>{conference.name} Conference</Text>
        </TeamCardSection>
        <TeamCardSection>
          <Text>Inaugural season: {firstYearOfPlay}</Text>
          <Text>Location: {locationName}</Text>
        </TeamCardSection>
        <TeamCardSection2>
          <Text>{venue.name}</Text>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button onPress={() => Linking.openURL(officialSiteUrl)}>Buy Tickets!</Button>
        </TeamCardSection2>
        <TeamCardSection2>
          <Button onPress={() => Linking.openURL(officialSiteUrl)}>Visit Website</Button>
        </TeamCardSection2>
      </Card>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    alignSelf: 'center',
  },
  map: {

    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
};

export default TeamCenter;
