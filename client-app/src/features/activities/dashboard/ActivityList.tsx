import React from 'react';
import { Activity } from '../../../app/models/activity';
import { Segment, Item, Button, Label } from 'semantic-ui-react';

interface Props {
    activities: Activity[];
    selectActivity: (id : string) => void;
    deleteActivity: (id : string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item id={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>
                                {activity.title}
                            </Item.Header>
                            <Item.Meta>
                                {activity.date}
                            </Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button floated='right' onClick = {() => selectActivity(activity.id)} content='View' color='blue'></Button>
                            <Button floated='right' onClick = {() => deleteActivity(activity.id)} content='Delete' color='red'></Button>
                                <Label basic content={activity.venue} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}