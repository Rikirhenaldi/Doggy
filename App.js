import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeBaseProvider} from 'native-base';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

// import Icon from 'react-native-vector-icons/';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from "react-native-vector-icons/Ionicons"
import Favorite from './src/screens/Favorite';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#694e99',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarStyle: {height: 65, paddingBottom: 8},
      }}>
      <Tab.Screen
        name="Homepage"
        component={Home}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pricetag" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Home}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Upload',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="scan-circle-sharp" color={color} size={36} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          title: null,
          cardStyle: {backgroundColor: 'transparent'},
          headerTransparent: true,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={34} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Search}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FAIcon name="user-circle" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="welcome">
            <React.Fragment>
              <Stack.Screen
                component={Welcome}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                }}
                name="welcome"
              />
            </React.Fragment>
            <React.Fragment>
              <Stack.Screen
                component={BottomTab}
                options={{
                  title: null,
                  cardStyle: {backgroundColor: 'transparent'},
                  headerTransparent: true,
                }}
                name="home"
              />
              <Stack.Screen
                component={Search}
                options={{
                  title: 'search',
                  headerTitleStyle: {color: 'white'},
                  headerStyle: {backgroundColor: '#694e99'},
                  headerTintColor: 'white',
                }}
                name="search"
              />
            </React.Fragment>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;
