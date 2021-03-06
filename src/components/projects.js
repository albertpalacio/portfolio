import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";
import "../styles/projects.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <h1> Full Stack Project - Housed</h1>
          <Card shadow={8} style={{ minWidth: "650", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orange",
                height: "176px",
                background: "url(https://i.imgur.com/QdhLgtf.png) center/cover",
              }}
            ></CardTitle>
            <CardText>
              <ul>
                <li>
                  Full Stack Website built using React.js, JavaScript, Node.js,
                  CSS, Express, and MongoDB.
                </li>
                <li>
                  Designed and managed our own API/database for the listings
                  rendered for cities searched in South Florida.
                </li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/albertpalacio/housed"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
              <Button
                colored
                href="https://gethoused.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> Full Stack Project - Brewskis</h1>
          <Card shadow={8} style={{ minWidth: "650", margin: "auto" }}>
            <CardTitle
              style={{
                color: "orange",
                height: "176px",
                background: "url(https://i.imgur.com/QdhLgtf.png) center/cover",
              }}
            ></CardTitle>
            <CardText>
              <ul>
                <li>
                  Full Stack Website built using JavaScript, React.js, HTML,
                  CSS, Node.js, and Express
                </li>
                <li>
                  Implemented the Yelp API to render open breweries registered
                  and match the user input.
                </li>
              </ul>
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/albertpalacio/Midterm-Project-"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Button>
              <Button
                colored
                href="https://brewskis-breweries.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className="tabs"
        style={{ background: "linear-gradient(to right, #2c3e50, #2980b9)" }}
      >
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "black", fontWeight: "bold" }}>Housed</Tab>
          <Tab style={{ color: "black", fontWeight: "bold" }}>Brewskis</Tab>
        </Tabs>
        <Grid className="main-div">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
