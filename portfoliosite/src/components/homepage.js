import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../styles/homepage.css'
import Contact from './contact'


class HomePage extends Component {
  render() {
      return(
          <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="homepage-grid">
                <Cell col={12}>
                  <img 
                  src="https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png"
                  alt="avatar"
                  className="avatar-img"
                  />
                  <div className="banner-text">
                      <h1> Full Stack Web Developer</h1>

                      <hr />
                      
                      <p> 
                        React | Javascript | HTML/CSS | Express | Node.js | MongoDB 
                      </p>
                      <div className="socials">
                        {/* LinkedIn*/}
                          <a href="https://www.linkedin.com/in/albert-palacio-047533144/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin-square"  aria-hidden="true" />
                          </a>
                           {/* Github*/}
                          <a href="https://github.com/albertpalacio" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github-square"  aria-hidden="true" />
                          </a>
                         
                      </div>
                  </div>
                   </Cell>

              </Grid>
              <Contact />
          </div>
         
      )
  }
}

export default HomePage