import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Enrollment from './pages/Enrollment';

const App:FC = () => {
  return (
    <Router>
      <Sidebar/>
        <Switch>
          <Route path="/dashboard" component={Dashboard} exact></Route>
          <Route path="/search" component={Search} exact></Route>
          <Route path="/enrollment" component={Enrollment} exact></Route>
        </Switch>
    </Router>
  );
}

export default App;
