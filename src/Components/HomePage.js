import React, { Component } from 'react';
import axios from 'axios';

import './HomePage.css'

class HomePage extends Component {




    render() {
        return (
            <div class="homePage">
                <section class="hero is-info is-large">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Home Page
                            </h1>
                            <h2 class="subtitle">
                                Something will be here soon
                            </h2>
                        </div>
                    </div>
                </section>
                <div class="container">
                    <div class="notification">
                        The <strong>Home Page</strong> container is <strong>centered</strong> on desktop.
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;