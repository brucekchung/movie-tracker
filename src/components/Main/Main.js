import React, {Component} from 'react';
import MovieContainer from '../MovieContainer/MovieContainer';
import { Login } from '../Login/Login';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
      <div >
        <Route path = '/' component={Header} />
        <Route exact path = '/' component={MovieContainer} />
        <Route exact path = '/login' component={Login} />
      </div>
    )
}

export default Main;