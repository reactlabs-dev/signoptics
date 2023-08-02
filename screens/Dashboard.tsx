/* eslint-disable react-native/no-inline-styles */
// src/screens/DashboardScreen.tsx
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card, useTheme} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types'; // Import the RootStackParamList type

// Define the type for the screen navigation prop
type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Dashboard'
>;

interface DashboardScreenProps {
  navigation: DashboardScreenNavigationProp;
}

interface JobItem {
  id: string;
  title: string;
  location: string;
  date: string;
}

const upcomingJobs: JobItem[] = [
  {
    id: '1',
    title: 'Medical Appointment',
    location: 'San Francisco, CA',
    date: '2023-07-15',
  },
  {
    id: '2',
    title: 'Educational Workshop',
    location: 'New York, NY',
    date: '2023-07-20',
  },
  {
    id: '3',
    title: 'Business Meeting',
    location: 'London, UK',
    date: '2023-07-25',
  },
  {
    id: '4',
    title: 'Community Event',
    location: 'Chicago, IL',
    date: '2023-07-28',
  },
  {
    id: '5',
    title: 'Social Gathering',
    location: 'Los Angeles, CA',
    date: '2023-08-02',
  },
  {
    id: '6',
    title: 'Legal Consultation',
    location: 'Austin, TX',
    date: '2023-08-05',
  },
  {
    id: '7',
    title: 'Workplace Training',
    location: 'Seattle, WA',
    date: '2023-08-10',
  },
  {
    id: '8',
    title: 'Cultural Festival',
    location: 'Boston, MA',
    date: '2023-08-15',
  },
  {
    id: '9',
    title: 'Parent-Teacher Meeting',
    location: 'Berlin, Germany',
    date: '2023-08-20',
  },
  {
    id: '10',
    title: 'Social Services Appointment',
    location: 'Toronto, Canada',
    date: '2023-08-25',
  },
  {
    id: '11',
    title: 'Art Exhibition',
    location: 'Paris, France',
    date: '2023-08-30',
  },
  {
    id: '12',
    title: 'Municipal Meeting',
    location: 'Tokyo, Japan',
    date: '2023-09-05',
  },
  // Add more upcoming jobs here
];

const Dashboard: React.FC<DashboardScreenProps> = ({}) => {
  const {colors} = useTheme();

  const renderJobItem: React.FC<{item: JobItem}> = ({item}) => (
    <Card style={{backgroundColor: colors.surfaceVariant, marginBottom: 2}}>
      <Card.Title
        title={item.title}
        subtitle={item.location}
        titleStyle={{color: colors.primary}}
      />
      <Card.Content>
        <Text style={{color: colors.onSurfaceVariant}}>Date: {item.date}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <View style={{backgroundColor: colors.background, padding: 12, margin: 0}}>
      <Text
        style={{
          color: colors.onBackground,
          marginBottom: 12,
          fontWeight: 'bold',
        }}>
        Upcoming Interpreting Jobs
      </Text>
      <FlatList
        data={upcomingJobs}
        renderItem={renderJobItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Dashboard;
