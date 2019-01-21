import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Search from './Search';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Search/>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width={500}
                    height={500}
                />
            </div>
        );
    }
}

export default LandingPage;