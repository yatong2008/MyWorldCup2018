import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import MatchCalendar from './components/match/MatchCalendar';
import MatchTable from "./components/match/MatchTable";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="calendar" component={MatchCalendar} />
    <Route path="table" component={MatchTable} />
    <Route path="about" component={AboutPage} />
  </Route>
);
