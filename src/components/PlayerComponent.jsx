import React from 'react';

const PlayerComponent = ({ appKey, startTime, endTime, channel }) => {
    const playerUrl = `https://app.tv.alticelabs.com/Demo/TuneService/Tune?appkey=${appKey}&start=${startTime}&end=${endTime}&channel=${channel}`;

    return (
        <div>
            <h3>Player</h3>
            <iframe
                title="Video Player"
                src={playerUrl}
                width="320"
                height="240"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default PlayerComponent;
