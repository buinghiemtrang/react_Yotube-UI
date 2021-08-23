import React from 'react'
import PropTypes from 'prop-types'

const Grid = props => {

    const style = {
        gap: props.gap ?  `${props.gap}px` : '0'
    }

    const col = props.col ? `grid-col-${props.col}` : ''

    return (
        <div className={`grid ${col}`} style = {style}>
            {props.children}
        </div>
    )
}

Grid.propTypes = {
    col: PropTypes.number.isRequired,
    gap: PropTypes.number
}

export default Grid
