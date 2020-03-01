import React, { Component } from 'react';
import axios from 'axios';

import "./UserPage.css"

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
                                <li class="is-active"><a>Pictures</a></li>
                                <li><a>Music</a></li>
                                <li><a>Videos</a></li>
                                <li><a>Documents</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default UserPage;