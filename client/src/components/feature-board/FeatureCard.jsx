import React from 'react';
import './FeatureCard.css';

const FeatureCard = (props) => {
    return (
        <div className="feature-card">
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="card-up-vote">
                <div className="card-up-vote-arrow">^</div>
                <div className="card-up-vote-count">{props.votes}</div>
            </div>
        </div>
    )
}

export default FeatureCard