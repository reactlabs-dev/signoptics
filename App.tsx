// App.tsx

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import About from './screens/About';
import Jobs from './screens/Jobs';
import Entries from './screens/Entries';
import Settings from './screens/Settings';
import {PaperProvider, useTheme} from 'react-native-paper';
import theme from './CusomTheme';
import SplashScreen from 'react-native-splash-screen';

type RootStackParamList = {
  Dashboard: undefined;
  Profile: undefined;
  About: undefined;
};

type DrawerParamList = {
  Main: undefined;
  SubMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

const SubMenuStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Jobs" component={Jobs} />
    <Stack.Screen name="Entries" component={Entries} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

const MainApp: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={Dashboard} />
      <Drawer.Screen name="My Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="SubMenu" component={SubMenuStack} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();

const App: React.FC = () => {
  useEffect(() => {
    // Hide the splash screen after a certain duration (e.g., 2 seconds)
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MainApp />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
