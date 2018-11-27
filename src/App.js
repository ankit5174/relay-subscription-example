import React, { Component } from 'react';
import './App.css';
import UserList from "./components/user/userList";
import environment from './enviornment';
import {QueryRenderer} from "react-relay";
import graphql from "babel-plugin-relay/macro";

const appQuery = graphql`
    query AppQuery {
        viewer {            
            ...userList_viewer
            id
        }
    }
`;

class App extends Component {
  render() {
    return (
        <QueryRenderer
            environment={environment}
            query={appQuery}
            variables={{}}
            render={({error, props}) => {
                if (error) {
                    return <div>{error.message}</div>
                } else if (props) {
                    return (
                        <UserList viewer={props.viewer}/>
                    )
                }
                return <div>Loading</div>
            }}
        />
    );
  }
}

export default App;
