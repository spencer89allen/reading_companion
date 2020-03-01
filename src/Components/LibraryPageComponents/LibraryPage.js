import React, { Component } from 'react';
import axios from 'axios';

import './LibraryPage.css'

class LibraryPage extends Component {




    render() {
        return (
            <div>
                <section class="hero is-medium is-primary is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                LibraryPage
                            </h1>
                            <h2 class="subtitle">
                                See what folks are reading
                            </h2>
                        </div>
                    </div>
                </section>
                <br />
                <section class='libraryContent'>
                    <div class="container is-widescreen">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>
                                                <a class="navbar-item"
                                                    href="#/userPage">
                                                    User's Page
                                                </a>
                                            </strong>
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                    <nav class="level is-mobile">
                                        <div class="level-left">
                                            <a class="level-item" aria-label="reply">
                                                <span class="icon is-small">
                                                    <i class="fas fa-reply" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="retweet">
                                                <span class="icon is-small">
                                                    <i class="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a class="level-item" aria-label="like">
                                                <span class="icon is-small">
                                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default LibraryPage;