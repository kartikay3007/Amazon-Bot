import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import "./Feed.css"
import MessageSender from './MessageSender';
import Post from './Post';
import db from './Firebase'

function Feed(props) {
    const [post, setPost] = useState([]);
    // useEffect = (() => {
    //     db.collection('posts').orderBy('timeStamp', 'desc')
    //     onSnapshot((snapShot)=> setPost(snapShot.docs.map(doc => {
    //         id: doc.id
    //         data: doc.data()
    //     }))
    // }, [])
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            <Post props />
        </div>
    );
}

export default Feed;