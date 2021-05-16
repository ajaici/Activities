import React from 'react';
import { Menu, Container, Button } from "semantic-ui-react";

interface Props 
{
    openForm : () => void;
}

export default function Navbar({openForm}:Props)
{
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button positive onClick = {openForm} content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}