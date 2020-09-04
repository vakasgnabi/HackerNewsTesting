import React from 'react';
import Time from './Time';
import PropTypes from 'prop-types'


function StoryInfo({story}){
    return(
        <div className="information">
            <span>
                {story.score} 
            </span>
            <span>
                points by
            </span>
            <span>
                {story.by}
            </span>
            <span>
               <Time time={story.time} isUnixTime={true} />  <span> | </span>
            </span>
            <span>
                hide <span> | </span>
            </span>
            <span>
                {story.descendants} comments
            </span>
        </div>

    )
}

StoryInfo.propTypes={
    story:PropTypes.object.isRequired
}

export default StoryInfo;