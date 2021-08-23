import React from 'react'
import PropTypes from 'prop-types'

const VideoThumb = props => {
    return (
        <div>
            <div className="video-thumb">
                <div className="video-thumb__img">
                    <img src={props.img} alt="" />
                </div>
                <div className="video-thumb__title">
                    <p>{props.title}</p>
                </div>
                <div className="video-thumb__channel">
                    <span>
                        {props.channel}
                        <i className='bx bxs-check-circle'></i>
                    </span>
                </div>
                <div className="video-thumb__view">
                    <span>{props.view}</span>
                </div>
            </div>
        </div>
    )
}

VideoThumb.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    channel: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
}

export default VideoThumb
