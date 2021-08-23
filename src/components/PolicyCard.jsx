import React from 'react'
import PropTypes from 'prop-types'

const PolicyCard = props => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <img src={props.icon} alt=""/>
            </div>
            <div className="policy-card__name">
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

PolicyCard.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default PolicyCard
