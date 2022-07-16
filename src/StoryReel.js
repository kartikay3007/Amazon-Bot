import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel(props) {
    return (
        <div className='storyReel'>
            <Story
                image="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=600"
                profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I5c-DmL7bKB_FDon9OJCcSqyMJTjG74oke7tdpoLw=s32-c-mo"
                title="Checkout My Story"
            />
            <Story
                image="https://images.pexels.com/photos/259915/pexels-photo-259915.jpeg?auto=compress&cs=tinysrgb&w=600"
                profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I5c-DmL7bKB_FDon9OJCcSqyMJTjG74oke7tdpoLw=s32-c-mo"
                title="Checkout My Story"
            />
            <Story
                image="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600"
                profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I5c-DmL7bKB_FDon9OJCcSqyMJTjG74oke7tdpoLw=s32-c-mo"
                title="Checkout My Story"
            />
            <Story
                image="https://images.pexels.com/photos/276092/pexels-photo-276092.jpeg?auto=compress&cs=tinysrgb&w=600"
                profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I5c-DmL7bKB_FDon9OJCcSqyMJTjG74oke7tdpoLw=s32-c-mo"
                title="Checkout My Story"
            />
            <Story
                image="https://images.unsplash.com/photo-1529179307417-ca83d48bd790?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://lh3.googleusercontent.com/ogw/ADea4I5c-DmL7bKB_FDon9OJCcSqyMJTjG74oke7tdpoLw=s32-c-mo"
                title="Checkout My Story"
            />
        </div>
    );
}

export default StoryReel;