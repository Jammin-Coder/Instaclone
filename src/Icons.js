import { useState } from 'react';

const defaultSize = '24px'

export function Icon({ src, size}) {
    size ? size = size + 'px': size = defaultSize;
    return <img src={ src } style={{width: size, height: size }}/>
}


export function FollowLink({ username }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [content, setContent] = useState('Follow');
    const [styles, setStyles] = useState({});

    function handleClick() {
        if (!isFollowing) {
            setIsFollowing(true);
            setContent('Following')
            setStyles({
                padding: '0.2rem 0.4rem',
                border: '1px solid gray'
            });
        }
    }

    let classList = 'w-[min-content] h-[min-content] grid place-items-center text-blue-500 font-bold rounded-md'

    return (
        <a style={{ ...styles }} className={classList} onClick={ handleClick }>
            { content }
        </a>
    );
}

export function LikeButton(props) {
    const [isLiked, setLiked] = useState(false);
    const [source, setSource] = useState('https://jammincoder.github.io/Instaclone/img/heart.png')


    function handleClick() {
        if (isLiked) {
            setSource('https://jammincoder.github.io/Instaclone/img/heart.png');
            setLiked(false)
        } else  {
            setSource('https://jammincoder.github.io/Instaclone/img/liked.png');
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
            <Icon src='https://jammincoder.github.io/Instaclone/img/comment.png'/>
        </div>
    );
}