import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import {SearchBar} from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'african',
      list: '',
      data: [],
    };
  }
  onGetListBreeds = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    await this.setState({list: response});
    console.log(this.state.list);
  };
  onSearch = async () => {
    const response2 = await axios.get(
      `https://dog.ceo/api/breed/${this.state.search}/images/random`,
    );
    await this.setState({data: response2.data.message});
    console.log('ini hasil serach', this.state.data);
  };
  componentDidMount() {
    this.onGetListBreeds();
    this.onSearch();
    console.log('ini hasil serach', this.state.data);
  }
  render() {
    return (
      <View>
        <View style={styles.headerBox}>
          <Text style={styles.title}>Find Your Beloved</Text>
          <Icons name="dog" color={'#694e99'} size={40} />
        </View>
        <View style={styles.inputBoxWraper}>
          <SearchBar
            placeholder="Search"
            onChangeText={value => this.setState({search: value})}
            onSubmitEditing={this.onSearch}
            value={this.state.search}
            platform="android"
            containerStyle={styles.inputBoxParent}
            inputStyle={styles.inputBox}
          />
        </View>
        <View>
        <Image style={styles.imagebox} source={{uri: `${this.state.data}`}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  headerBox: {
    width: 320,
    height: 60,
    marginBottom: 5,
    marginHorizontal: 15,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#694e99',
    marginRight: 10,
  },
  inputBoxParent: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 20,
    elevation: 3,
  },
  inputBoxWraper: {
    marginBottom: 20,
    width: 360,
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagebox: {
    width: 320,
    height: 360,
    backgroundColor: '#694e99',
    marginHorizontal: 5,
    marginLeft: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
});
