import { useState } from 'react';

const defaultSize = '24px'

export function Icon({ src, size}) {
    size ? size = size + 'px': size = defaultSize;
    return <img src={ src } style={{width: size, height: size }}/>
}


export function LikeButton(props) {
    const [isLiked, setLiked] = useState(false);
    const [source, setSource] = useState('/img/heart.png')


    function handleClick() {
        if (isLiked) {
            setSource('/img/heart.png');
            setLiked(false)
        } else  {
            setSource('/img/liked.png');
            setLiked(true);
        };
    }

    return (
        <div className='w-[fit-content]' onClick={ handleClick }>
            <Icon src={ source }/>
        </div>
    );
}


export function CommentButton(props) {
    return (
        <div className='w-[fit-content]'>
            <Icon src='/img/comment.png'/>
        </div>
    );
}