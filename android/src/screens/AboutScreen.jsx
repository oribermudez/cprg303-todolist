import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toDateString(); // Get the current date as a string

  return (
    <MainLayout>
      <SafeAreaView>
        <Text>To Do List</Text>
        <Text>Created by: Ori Bermudez</Text>
        <Text>Current Date: {currentDate}</Text>
      </SafeAreaView>
    </MainLayout>
  );
};

export default AboutScreen;
