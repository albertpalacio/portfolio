import React, { Component } from "react";
import "../styles/aboutme.css";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-bg">
        <div className="about-div">
          <h1> About Me </h1>
          <h4>
            The name's Albert! I come from a retail background in
            telecomunications managing small and medium sized teams while
            exceeding all sales goals set for me. While thinking what to conquer
            next I decided I would follow something that made me happier early
            on in life and arrived at Wyncode.
          </h4>
          <h4>
            Here I was able to acquire the knowledge to become a Full Stack Web
            Developer. I found my love for coding during this time and even more
            the love for Front-End technologies. The ability to let your
            creativity flow and design simple yet elegant websites motivates me
            to keep growing.
          </h4>
          <div classname="download-me">
            <div>
              <h5> Download My Resume! Click Over There!</h5>

              <a
                href="https://docdro.id/37aBYUa"
                download="AlbertPalacioResume"
              >
                <button className="clickme">Yes, here!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
