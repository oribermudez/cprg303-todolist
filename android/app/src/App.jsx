import React from 'react';

import {SafeAreaView} from 'react-native';
import {useState} from 'react';

import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const handleAdd = newTask => {
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm onAdd={handleAdd} />
    </SafeAreaView>
  );
};

export default App;
