import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import VideoList from './components/VideoList';
import Video from './components/Video';

function App() {
    const [searchResults, setSearchResults] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    return (
        <div className="App">
            <Header setSearchResults={setSearchResults}></Header>
            <div className="content">
                <div className="content__left">
                    <Video video={currentVideo}></Video>
                </div>
                <div className="content__right">
                    <VideoList
                        list={searchResults}
                        setCurrentVideo={setCurrentVideo}
                    ></VideoList>
                </div>
            </div>
        </div>
    );
}

export default App;
