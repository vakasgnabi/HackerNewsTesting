import React from 'react';
import StoryInfo from './story-info';

function NewsList({ stories }) {
    return (
        // {stories.map(story=>{

        // })}
        <div className="row content-row">
            <div className="col-md-12">
                <ol start={1}>
                    {stories.map(story=>(
                    <li key={story.id}>
                        <span className="news-icon">
                            <i className="fas fa-caret-up fa-1x"></i>
                        </span>
                        <span className="news-data">
                           {story.title}
                        </span>
                        <StoryInfo story={story} />
                    </li>

                    ))}
                    
                </ol>
            </div>
        </div>
    )
}

export default NewsList;