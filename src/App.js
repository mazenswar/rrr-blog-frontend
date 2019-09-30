import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import userActions from './redux/actions';
import Routes from './Routes';
import Nav from './Components/Nav';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.token) {
      dispatch(userActions.persistUser());
    }
  }, []);

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;
