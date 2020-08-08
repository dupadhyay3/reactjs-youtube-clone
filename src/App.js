import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      {/* Router */}
      <Router>
        {/* Header */}
        <Header />
        <Switch>
          {/* SearchPage */}
          <Route path="/search/:searchTearm">
            <h1>search page</h1>
          </Route>
          {/* Homepage */}
          <Route path="/"> 
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
