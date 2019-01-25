import React, { Component } from 'react';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'


class AdminPage extends Component {

  render() {


    return (
      <React.Fragment>
        <h1>The Sam Barker Fanclub Page</h1>
        <hr></hr>
        <img src="https://flatiron-v3-production.imgix.net/barker-500x.jpg" alt="The one and only"/>
        <hr></hr>
      <Link to='/'><Button compact color='blue'>Go back home</Button></Link>

  </React.Fragment>
    )

  }
}

export default withRouter(AdminPage);
