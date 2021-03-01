import React from 'react';
import './Video.scss';

function Video({ video }) {
    const { id, snippet } = video || { id: null, snippet: null };
    return (
        <div className="video">
            {id && id.videoId ? (
                <>
                    <div className="video__player">
                        <iframe
                            className="video__iframe"
                            frameBorder="0"
                            width="100%"
                            height="100%"
                            title={snippet.title}
                            src={`https://www.youtube.com/embed/${id.videoId}`}
                        ></iframe>
                    </div>
                    <div className="video__detail">
                        <h3 className="video__title">{snippet.title}</h3>
                    </div>
                </>
            ) : (
                <p>Please search with a keyword and select a video to play</p>
            )}
        </div>
    );
}

export default Video;
