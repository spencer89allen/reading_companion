import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route, Redirect } from 'react-router-dom';


import "./UserPage.css"
import BookTab from './UserComponents/BookTab/BookTab';
import ProfileTab from './UserComponents/ProfileTab/ProfileTab';
import AddABookTab from './UserComponents/AddABookTab/AddABookTab';

class UserPage extends Component {




    render() {
        console.log(this.props.match.url)
        return (
            <div>
                <section className="hero is-medium is-primary is-warning">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                User's Page
                            </h1>
                            <h2 className="subtitle">
                                It will be responsive at some point
                            </h2>
                        </div>
                    </div>
                </section>
                <section className="mainSection">
                    <div className="container is-fluid">
                        <div className="tabs">
                            <ul>
                                <li>
                                    <Link to={`${this.props.match.url}/books`}>
                                        <p>Books</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${this.props.match.url}/profile`}>
                                        <p>Profile</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={`${this.props.match.url}/add_book`}>
                                        <p>Add a Book</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Switch>
                            <Route component={BookTab} exact path={`${this.props.match.url}/books`} />
                            <Route component={ProfileTab} path={`${this.props.match.url}/profile`} />
                            <Route component={AddABookTab} path={`${this.props.match.url}/add_book`} />

                            <Redirect to={`/userPage/books`}/>

                        </Switch>
                    </div>
                </section>
            </div>
        )
    }
}

export default UserPage;