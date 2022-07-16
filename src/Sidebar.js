import React from 'react';
import PropTypes from 'prop-types';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';

const Sidebar = props => {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>

                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/kOxV5aCYUAE.png"
                    title="COVID-19 information Centre"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
                    title="Friends"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"
                    title="Groups"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png"
                    title="Vidoes"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/DHBHg9MEeSC.png"
                    title="Ads"
                />
                <SidebarRow
                    url="https://cdn3.vectorstock.com/i/1000x1000/99/17/blood-donation-hand-icon-vector-23319917.jpg"
                    title="Blood donations"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/Doj4fJpfxHx.png"
                    title="Business Suite"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/cT5nPnO8Wsc.png"
                    title="Crisis Response"
                />
                <SidebarRow
                    url="https://image.shutterstock.com/image-vector/event-schedule-icon-260nw-606709283.jpg"
                    title="Events"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/SWt1APlIN82.png"
                    title="Films"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png"
                    title="Friend Lists"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/n2vd2VduYc1.png"
                    title="Fundraisers"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png"
                    title="Games"
                />
                <SidebarRow
                    url="https://static.vecteezy.com/system/resources/previews/002/061/701/original/video-games-icon-with-tv-and-gamepad-eps-vector.jpg"
                    title="Gaming video"
                />
                <SidebarRow
                    url="https://static.vecteezy.com/system/resources/previews/000/642/323/original/search-job-icon-vector.jpg"
                    title="Jobs"
                />
                <SidebarRow
                    url="https://thumbs.dreamstime.com/b/live-icon-stream-video-news-symbol-white-background-social-media-template-broadcasting-online-play-button-network-sign-vector-179158297.jpg"
                    title="Live videos"
                />
                <SidebarRow
                    url="https://cdn-icons-png.flaticon.com/512/2846/2846019.png"
                    title="Memories"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/4Y9Xi2D3hJv.png"
                    title="Messenger"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/1Xvrz50fHMF.png"
                    title="Messenger Kids"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png"
                    title="Most recent"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png"
                    title="Offers"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"
                    title="Pages"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/8OasGoQgQgF.png"
                    title="Recent ad activity"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"
                    title="Saved"
                />
                <SidebarRow
                    url="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/bo0Zt72NIra.png"
                    title="Weather"
                />
            </div>
            <div className='sidebar__bottom'>
                <div className='sidebar__bottom--title'>
                    <h3>Your Shortcuts</h3>

                </div>
                <div className='sidebar__bottom--content'>
                    <SidebarRow
                        src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-9/75317333_108050823979255_17253192865677312_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=BMyeUf9IEdcAX_WViQb&_nc_ht=scontent.fpat2-1.fna&oh=012f1f9d3afcaefd93bd1d0b805e8d25&oe=5FE4FE9D"
                        title="Projects On Real Life System"
                    />
                    <SidebarRow
                        url="https://assets.scaler.com/packs/images/logo.ab0be5.png"
                        title="Learn with Scaler"
                    />
                    <SidebarRow
                        url="https://pbs.twimg.com/profile_images/1323091380227305472/diwEOlVS_400x400.jpg"
                        title="Accenture India"
                    />
                    <SidebarRow
                        url="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        title="Github Social Coding"
                    />
                    <SidebarRow
                        url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo48Py2sv9-U-SpX7POeYnnD4GtCcVX710j8u3Lfn5Rq0taFMtiprAB0E-QcV4zvgJslU&usqp=CAU"
                        title="OMG"
                    />
                    <SidebarRow
                        url="data:image/png;base64,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"
                        title="REACT"
                    />

                </div>
            </div>

        </div>


    );
};



export default Sidebar;