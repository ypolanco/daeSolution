import React from 'react'
import './FeatureBoard.css'
import FeatureCard from './FeatureCard'

import features from '../../data/features.json'
import Layout from '../shared/Layout'

const FeatureBoard = () => {

    const CARDS = features.map((feature, index) =>
        <FeatureCard id={feature.id} title={feature.title} description={feature.description} votes={feature.votes} key={index} />
    )

    return (
        <Layout>
            <div className="feature-board">
                <div className="feature-board-title">FEATURES</div>
                <div className="feature-board-cards">
                    {CARDS}
                </div>
            </div>
        </Layout>
    )
}

export default FeatureBoard