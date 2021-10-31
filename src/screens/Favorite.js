import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {justifyContent} from 'styled-system';
class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      data3: [],
    };
  }
  onGetData = async () => {
    const response = await axios.get(
      'https://dog.ceo/api/breeds/image/random/8',
    );
    await this.setState({data1: response.data.message});
    console.log(this.state.data1);
  };
  onGetDataBreeds = async () => {
    const response = await axios.get(
      'https://dog.ceo/api/breed/hound/images/random/9',
    );
    await this.setState({data2: response.data.message});
    console.log(this.state.data2);
  };
  onGetDataSubBreeds = async () => {
    const response = await axios.get('https://dog.ceo/api/breed/hound/list');
    await this.setState({data3: response.data.message});
    console.log(this.state.data3);
  };
  componentDidMount() {
    this.onGetData();
    this.onGetDataBreeds();
    this.onGetDataSubBreeds();
  }
  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.parent}
        ListHeaderComponent={() => (
          <View>
            <View style={styles.UpperBox}>
              <View style={styles.headerBox}>
                <Text style={styles.title}>Favorites</Text>
                <TouchableOpacity>
                  <Image
                    style={styles.roundpict}
                    source={require('../assets/dogy.jpg')}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.subTitle}>Most Liked Photos </Text>
            </View>
            <View style={styles.headerBox}>
              <Text style={styles.subTitle2}>Hall of Fame</Text>
            </View>
            <View>
              <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                style={styles.boxWrapper}
                data={this.state.data1}
                renderItem={({item}) => (
                  <View>
                    <Image style={styles.imagebox} source={{uri: item}} />
                    <Text />
                  </View>
                )}
              />
            </View>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  UpperBox: {
    backgroundColor: '#694e99',
    height: 140,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 5,
  },
  title: {
    fontSize: 35,
    fontFamily: 'poppins',
    color: 'black',
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 14,
    marginHorizontal: 15,
    fontFamily: 'poppins',
    color: 'black',
    paddingTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  subTitle2: {
    fontSize: 18,
    marginHorizontal: 5,
    fontFamily: 'poppins',
    color: '#694e99',
    // paddingTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle3: {
    fontSize: 14,
    marginHorizontal: 5,
    fontFamily: 'poppins',
    color: '#694e99',
    paddingTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  headerBox: {
    display: 'flex',
    width: 320,
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBox2: {
    display: 'flex',
    width: 320,
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roundpict: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 3,
  },
  imagebox: {
    width: 160,
    height: 200,
    backgroundColor: '#694e99',
    marginHorizontal: 5,
    marginLeft: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagebox2: {
    width: 100,
    height: 100,
    backgroundColor: '#694e99',
    marginHorizontal: 5,
    marginLeft: 15,
    borderRadius: 10,
  },
  imagebox3: {
    width: 100,
    height: 50,
    backgroundColor: '#694e99',
    marginHorizontal: 5,
    marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subbreeds: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default Favorite;
