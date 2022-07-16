import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Header.css"
import { Input } from 'antd';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
const Header = props => {
    return (
        //BEM Convention
        <div className='header'>
            <div className='header__left'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/225px-Facebook_f_logo_%282021%29.svg.png"
                    alt='logo' />
                <div className='header__input'>
                    <SearchIcon />
                    <Input type="text" placeholder='search facebook' className='header__input__text' />
                </div>
            </div>
            <div className='header__middle'>
                <div className='header__options'>
                    <HomeIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <FlagIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SubscriptionsOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <StorefrontOutlinedIcon fontSize='large' />
                </div>
                <div className='header__options'>
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar />
                    <h4>Username</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownOutlinedIcon />
                </IconButton>

            </div>
        </div>
    );
};

Header.propTypes = {

};

export default Header;