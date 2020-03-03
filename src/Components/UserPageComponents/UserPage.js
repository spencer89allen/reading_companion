import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route, Redirect } from 'react-router-dom';


import "./UserPage.css"
import BookTab from './UserComponents/BookTab/BookTab';
import ProfileTab from './UserComponents/ProfileTab/ProfileTab';
import AddABookTab from './UserComponents/AddABookTab/AddABookTab';

class UserPage extends Component {




    render() {
        return (
            <div>
                <section class="hero is-medium is-primary is-warning">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                User's Page
                            </h1>
                            <h2 class="subtitle">
                                It will be responsive at some point
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="mainSection">
                    <div class="container is-fluid">
                        <div class="tabs">
                            <ul>
                                <li>
                                    <Link to={`userPage/books`}>
                                        <p>Books</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`userPage/profile`}>
                                        <p>Profile</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`userPage/add_book`}>
                                        <p>Add a Book</p>
                                    </Link>
                                </li>
                                <li>
                                    <a>Documents</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Switch>
                            <Route component={BookTab} exact path='userPage/books' />
                            <Route component={ProfileTab} path='userPage/profile' />
                            <Route component={AddABookTab} path='/add_book' />

                            <Redirect to={`/userPage/books`}/>

                        </Switch>
                    </div>
                </section>
            </div>
        )
    }
}

export default UserPage;