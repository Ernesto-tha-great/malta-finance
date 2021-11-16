import { FontAwesome, MaterialIcons, MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import ExploreScreen from '../screens/ExploreScreen';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SendScreen from '../screens/SendScreen';
import WalletScreen from '../screens/WalletScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { Dimensions } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;


export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{   
        tabBarStyle: {
          borderTopLeftRadius:21, 
          borderTopRightRadius:21,
          backgroundColor:"#778899",
          position:'absolute',
          bottom: 0,
          width: DEVICE_WIDTH,
          height: 78,
          zIndex: 8 
        },
        tabBarInactiveTintColor:"#555555",
        tabBarActiveTintColor: "#FFBF00", //#800080
        //tabBarLabel: () => {return null},
        headerShown: false,
        
        
        //
        
      
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          tabBarIcon: ({color}) => <MaterialIcons  name="home-filled" size={30} color={color}  />
        })}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
         
          tabBarIcon: ({color}) =>  <MaterialCommunityIcons style={{}}  name="wallet" size={30} color={color}  />,
        }}
      />

      <BottomTab.Screen
        name="Send"
        component={SendScreen}
        options={{
         
          tabBarIcon: ({color}) => <FontAwesome name="send" size={27}  color={color}  />,
        }}
      />

      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
        
          tabBarIcon: ({color}) => <Ionicons name="notifications" size={30} color={color}   />,
        }}
      />

      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color}) => <AntDesign name="bars" size={30} color={color}    />,
        }}
      />
    </BottomTab.Navigator>
  );
}

