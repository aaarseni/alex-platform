import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import VideoList from './Components/pages/VideoList';
import Course from './Components/pages/Course';
import CourseChapter from './Components/pages/CourseChapter';
import CourseVideo from './Components/pages/CourseVideo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/videolist' exact component={VideoList} />
          <Route path='/course/:id' exact component={Course} />
          <Route path='/course/:id/chapter/:chapterId' exact component={CourseChapter} />
          <Route path='/course/:id/chapter/:chapterId/video/:videoId' exact component={CourseVideo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
