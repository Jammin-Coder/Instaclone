import { ProfilePic } from '../Profile/Profile';
import { CommentButton, Icon, LikeButton } from '../Icons';
import { useState } from 'react';


export function PostInfo(props) {
    return (
        <div>
            <div className='flex gap-3'>
                <LikeButton />
                <CommentButton />
            </div>
            <p className='mt-3'><b>15,000 likes</b></p>
        </div>
        
    );
}

export function Comment(props, { username }) {
    return (
        <div>
            <a className='underline font-bold mr-2' href={ `/${ props.username }` }> { props.username } </a>
            <p className='inline'>{ props.children }</p>
        </div>
    );

}

export function PostPreviewContent(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('3rem');
    const [contentOption, setContentOption] = useState('See More');

    function handleClick() {
        if (!isExpanded) {
            setHeight('auto');
            setIsExpanded(true);
            setContentOption('See Less');
        } else {
            setHeight('3rem');
            setIsExpanded(false);
            setContentOption('See More');
        }
    }

    return (
        <div>
            <div style={{ height: height }} className='overflow-hidden'>
                { props.children }
            </div>
            <p className='underline text-sm cursor-pointer mt-3 text-gray-600' onClick={ handleClick }>{ contentOption }</p>
        </div>
    );
}

export function PostPreview(props) {
    return (
        <section className='grid place-content-center border rounded-md w-[90%] mb-10'>
            <div className='p-3 flex [align-items:center] justify-between'>
                <div className='flex [align-items:center] gap-2'>
                    <ProfilePic className='w-8 h-auto' />
                    Username
                </div>
            </div>


            <div className='max-h-[35rem]'>
                <img src='/img/posts/panda.png' className='aspect-square'/>
            </div>

            <div className='mt-3 p-3'>
                <PostInfo/>

                <PostPreviewContent>
                    <Comment username='jammin_coder'>
                        Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML.

                        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
                        work correctly both with client-side routing and a non-root public URL.
                        Learn how to configure a non-root public URL by running `npm run build`.
                    </Comment>
                </PostPreviewContent>
            </div>

        </section>
    );
}


export function Suggestions(props) {
    return <div className='absolute hidden md:block'>sugestions for you</div>
}


export function HomePage(props) {
    return (
        <div className='page-wrapper'>
            <div className='page-content grid place-items-center md:place-items-start md:[grid-template-columns:70%_30%]'>
                <div>
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                    <PostPreview />
                </div>


  
                <div className='hidden relative md:block'>
                    <Suggestions/>
                </div>
                
            </div>
            
        </div>
    );
}