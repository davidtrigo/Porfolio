import React, { Component } from 'react';
import './App.css';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import NavegationBar from './components/navegationBar';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Title" scroll>
            <NavegationBar/>
          </Header>
          <Drawer title="Title">
            <Navigation>
            <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }

}


export default App;
