/* eslint-disable react-native/no-inline-styles */
// src/screens/AboutScreen.tsx

import React from 'react';
import {Text, View} from 'react-native';
import {
  Title,
  Paragraph,
  Divider,
  List,
  useTheme,
  Card,
} from 'react-native-paper';

const About: React.FC = () => {
  const {colors} = useTheme();

  return (
    <View style={{backgroundColor: colors.background, padding: 12, margin: 0}}>
      <Card style={{backgroundColor: colors.surfaceVariant, marginBottom: 2}}>
        <Card.Title
          title="About SignOptics"
          subtitle="Real-time Interpreting Jobs"
          titleStyle={{color: colors.primary}}
        />
        <Card.Content>
          <Text style={{color: colors.onSurfaceVariant}}>
            <Paragraph>
              SignOptics is a leading provider of interpretation services for
              the deaf and hard of hearing community. We are dedicated to
              bridging the communication gap and ensuring equal access to
              information and services for individuals with hearing impairments.
            </Paragraph>
          </Text>
          <Text style={{color: colors.onSurfaceVariant, marginTop: 12}}>
            <Paragraph>
              Our team of skilled and certified interpreters work diligently to
              facilitate effective communication in various settings, including
              medical appointments, educational workshops, business meetings,
              community events, social gatherings, and more.
            </Paragraph>
          </Text>
          <Divider style={{marginBottom: 20}} />
        </Card.Content>
      </Card>
      <Card style={{backgroundColor: colors.surfaceVariant, marginBottom: 2}}>
        <Card.Content>
          <Title style={{fontSize: 16, color: colors.onSurface}}>
            Contact Information
          </Title>
          <List.Item
            title="Address"
            description="123 Main Street, Anytown, USA"
            left={() => <List.Icon icon="map-marker" />}
          />
          <List.Item
            title="Phone"
            description="(555) 123-4567"
            left={() => <List.Icon icon="phone" />}
          />
          <List.Item
            title="Email"
            description="info@signoptics.com"
            left={() => <List.Icon icon="email" />}
          />
          <List.Item
            title="Website"
            description="www.signoptics.com"
            left={() => <List.Icon icon="earth" />}
          />
        </Card.Content>
      </Card>
    </View>
  );
};

export default About;
