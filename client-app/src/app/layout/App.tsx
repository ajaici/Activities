import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDasboard from "../../features/activities/dashboard/ActivityDashboard";
import {v4 as uuid } from 'uuid';
function App() {
  const [activities, setActitvities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] =
    useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActitvities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEdit(activity : Activity)
  {
    activity.id ? setActitvities([...activities.filter(x => x.id !== activity.id),activity])
    : setActitvities([...activities, {...activity, id: uuid()}]);
    setEditMode(false);
    setSelectedActivity(activity);

  }

  function handleDeleteActivity(id : string)
  {
    setActitvities([...activities.filter(x => x.id !== id)])
  }
  return (
    <Fragment>
      <Navbar openForm = {handleFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDasboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit = {handleCreateOrEdit}
          deleteActivity = {handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
}

export default App;
