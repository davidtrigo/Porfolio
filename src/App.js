import React, { Component } from 'react';
import './App.css';
import { Content, Drawer, Header, Layout, Navigation } from 'react-mdl';
import Main from './components/main';
import NavegationBar from './components/navegationBar';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <NavegationBar />
          </Header>
          <Drawer title="Title">
            <Navigation>
              <NavegationBar/>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }

}


export default App;
