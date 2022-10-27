import React from 'react'
import { Menu } from 'antd';
import Logo from '../view/img/logo.png'
import Notification from '../view/img/notification.png'
import Message from "../view/img/message.png"
import Profile from "../view/img/profile.png"
const Navbar = () => (
    <div className="header">
        <div className="header__logo" >
            <img src={Logo} alt='logo' />
        </div>
        <Menu className='header__section'
            mode="horizontal"
        >
            <Menu.Item key='1' className='header-item'>
                My Favorite
            </Menu.Item>
            <Menu.Item key='2' className='header-item'>
                My Teacher
            </Menu.Item>
            <Menu.Item key='3' className='header-item'>
                My Course
            </Menu.Item>
            <div className='notification'>
                <img src={Notification} alt="notification" />
            </div>
            <div className='message'>
                <img src={Message} alt="message" />
            </div>
            <div className='avatar'>
                <img src={Profile} alt="avatar" />
            </div>
        </Menu>

    </div>
);
export default Navbar;
