import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <ScrollTop />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
