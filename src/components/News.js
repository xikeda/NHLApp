import React, { Component } from 'react';
import {  ScrollView, Text, StyleSheet, Image } from 'react-native'
import { Card, CardSection, Button} from './common';
import axios from 'axios';
import moment from 'moment'

class News extends Component {
  state = {data: []};

  componentWillMount() {
    axios.get('https://newsapi.org/v2/top-headlines?sources=nhl-news&apiKey=cc1ea0b08c4e4887af35e9fce8d5d88d -d').then(response => this.setState({data: response.articles}))
  }

  render() {
        const {data} = this.state
        return (
           <Card>
               <CardSection>
               <ScrollView dataArray={data}
                    renderRow={(item) =>
                        <Card style={{flex: 0}}>
                        <CardSection>
                              <Text>{item.author}</Text>
                              <Text note>{moment(item.publishedAt).format("LL")}</Text>
                        </CardSection>
                        <CardSection>
                            <Image source={{uri: item.urlToImage}} style={{height: 200, width: '100%', flex: 1}}/>
                            <Text>
                              {item.description}
                            </Text>
                        </CardSection>
                      </Card>
                    }>
                </ScrollView>
               </CardSection>
            </Card>
        )
    }
}

export default News;
