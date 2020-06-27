import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
        <div>
    <Layout fixedHeader>
        <Header className="header-color" title={<strong>Home</strong>} >
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link href="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Main />
        <Content />
    </Layout>
</div>
  );
}

export default App;
