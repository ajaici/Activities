import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react'
import { listenerCount } from 'events';

function App() {

  const [activities, SetActitvities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      SetActitvities(response.data);
    }
    );

  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />

      <List>
        {activities.map((activity: any) => (
          <List.Item>{activity.title}</List.Item>
        ))}
      </List>
   
    </div>
  );
}

export default App;
