import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './VideoList.scss';

function VideoList({ list, setCurrentVideo }) {
    return (
        <div className="video-list">
            {list.map((video, index) => (
                <div
                    className="video-list__item"
                    key={video.id.videoId}
                    onClick={() => setCurrentVideo(video)}
                >
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt=""
                        className="video-list__img"
                    />
                    <div className="video-list__detail">
                        <h5 className="video-list__title">
                            {video.snippet.title}
                        </h5>
                        <p className="video-list__channel">
                            {video.snippet.channelTitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoList;
