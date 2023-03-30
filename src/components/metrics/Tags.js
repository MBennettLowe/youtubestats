import React from 'react';

function Tags(props) {
    var tags = props.tags.map(function(tag, i){
        return <li key={tag}>- {tag}</li>
    })
    return(
        <div className="w-1/2 px-2 rounded overfloww-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className='font-bold text-xl mb-2'>Tags</div>
                <ul className='text-gray-700 text-base'>{tags}</ul>
            </div>
        </div>
    )
}

export default Tags;