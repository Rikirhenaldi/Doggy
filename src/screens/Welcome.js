import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Image style={styles.banner} source={require('../assets/dogy.jpg')} />
        <Text style={styles.title}> Welcome to Doggy</Text>
        <View style={styles.buttonwrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.reset({index: 0, routes: [{name: 'home'}]});
            }}>
            <Text style={styles.buttonName}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F2F2F2',
    // backgroundColor: 'blue',
    flex: 1,
  },
  banner: {
    flex: 1,
    zIndex: -4,
  },
  title: {
    fontSize: 32,
    marginHorizontal: 35,
    fontFamily: 'poppins',
    color: '#694e99',
    paddingTop: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#694e99',
    borderRadius: 20,
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonwrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 360,
    height: 40,
    position: 'absolute',
    paddingTop: 460,
    //   backgroundColor: "blue"
  },
});
export default Welcome;
