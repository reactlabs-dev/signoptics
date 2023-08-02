// types.tsx
import {StackNavigationProp} from '@react-navigation/stack';

// Define your screen names and their respective parameters here
type RootStackParamList = {
  Dashboard: undefined;
  Profile: undefined;
  About: undefined;
  // Add more screens with their parameters here
};

export type DrawerParamList = {
  Main: undefined;
  SubMenu: undefined;
};

// Define the type for the screen navigation prop
type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

// Export the RootStackParamList and DashboardScreenNavigationProp types
export type {RootStackParamList, DashboardScreenNavigationProp};
