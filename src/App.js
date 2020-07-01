import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'

function App() {
  return (
        <div>
    <Layout fixedHeader>
        <Header className="header-color" title={`Albert's Portfolio`} >
           
        </Header>
        <Drawer title={<Link style={{ textDecoration: 'underline', color: 'black'}} to='/'> Portfolio</Link>}>
            
        </Drawer>
        <Main />
        <Content />
       
    </Layout>
</div>
  );
}

export default App;
