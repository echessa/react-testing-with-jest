import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'Countdown';

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Countdown Timer
                    </li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="columns medium-6 large-4 small-centered">
                <Countdown/>
            </div>
        </div>
    </div>,
    document.getElementById('app')
);
