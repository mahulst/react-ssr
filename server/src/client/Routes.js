import React from 'react';
import Home from './components/Home.js';
import UsersList, { loadData } from './components/UsersList.js';

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
    loadData
  }
];