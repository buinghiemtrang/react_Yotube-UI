import React from 'react'
import PropTypes from 'prop-types'

const VideoTrending = props => {
    return (
        <div className="video-trending">
            <div className="video-trending__img">
                <img src={props.img} alt="" />
            </div>
            <div className="video-trending__info">
                <h2>
                    {props.title}
                </h2>
                <div className="video-trending__info__channel">
                    <p>
                        {props.channel}
                        <i className='bx bxs-music'></i>
                    </p>
                    <p>
                        {props.view}
                    </p>
                </div>
                <br />
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}

VideoTrending.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default VideoTrending
