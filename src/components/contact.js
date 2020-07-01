import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import '../styles/contact.css'


class Contact extends Component {
  render() {
      return(
          <div className="contact-body">
              <Grid className="contact-grid">
                  <Cell col={6}>

                    <h2> Albert Palacio</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png"
                    alt="avatar"
                    style={{height: '250px'}}
                    />

                    <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> A Full Stack Developer who specializes in Frontend technologies across the MERN stack
                     (MongoDB, Express, React, Node.js). 
                        Experience building complete web applications with built-in backend API systems as well as databases built from scratch. </p>

                  </Cell>

                  <Cell col={6}>
                      
                      <h2> Contact Me</h2>
                      <hr />
            <div className="contact-list">
               <List>
                 <ListItem>
                      <ListItemContent style={ { fontSize: '25px', fontFamily: 'Anton' }}>
                        <a href="mailto: albertpalacio@outlook.com"> <i className="fa fa-envelope" aria-hidden="true" />
                        </a>
                        Albertpalacio@outlook.com
                         
                          </ListItemContent>
                          
                </ListItem>
                 
                </List>
                       
                </div>
                  </Cell>
              </Grid>
          </div>
      )
  }
}

export default Contact