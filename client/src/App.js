import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import '../node_modules/grommet/grommet.min.css';
import TopSectionBar from './component/TopSectionBar';
import MainPage from './component/MainPage';
import DataTechMain from './component/DataTech/DataTechMain';
import WebTechMain from './component/WebTech/WebTechMain';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopSectionBar/>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/DataTech" component={DataTechMain} />
            <Route exact path="/WebTech" component={WebTechMain} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
