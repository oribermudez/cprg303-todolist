import React from 'react';

import {SafeAreaView, Button, StyleSheet} from 'react-native';
import {useState} from 'react';

import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({navigation}) => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAdd = newTask => {
    setTasks([...tasks, newTask]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm onAdd={handleAdd} />
      </SafeAreaView>
      <Button
        style={styles.button}
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;
