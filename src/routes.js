import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './Components/HomePage';
import LibraryPage from './Components/LibraryPageComponents/LibraryPage';
// import BookPage from './Components/BookPageComponents/BookPage';
import UserPage from './Components/UserPageComponents/UserPage';



export default (
    <Switch>
        <Route component={ HomePage } exact path='/' />
        <Route component={ LibraryPage } path='/Library' />
        {/* <Route component={ BookPage } path='/book' /> */}
        <Route component={ UserPage } path='/userPage' />
        {/* <Route component={  } path='/' /> */}

    </Switch>
)