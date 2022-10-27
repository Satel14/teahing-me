import React from 'react'
import { Menu } from 'antd';
import { EditOutlined, BellOutlined, InfoCircleOutlined } from '@ant-design/icons'
import Profile from "../view/img/profile.png"
import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import eu from 'world_countries_lists/data/countries/eu/world.json';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { Button, Checkbox, Form, Input } from 'antd';
const Main = () => {
    const dayYear = 'DD/YYYY';
    return (
        <div className='main'>
            <h3>General Settings</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean integer in non lorem.</h5>

            <div className='main__box'>
                <Menu
                    mode='horizontal'
                >
                    <Menu.Item className='main__box-item' icon={<EditOutlined />}>
                        Account
                    </Menu.Item>
                    <Menu.Item className='main__box-item' icon={<BellOutlined />}>
                        Notification
                    </Menu.Item>
                    <Menu.Item className='main__box-item' icon={<InfoCircleOutlined />}>
                        FAQ
                    </Menu.Item>
                </Menu>
                <div className='main__box-title'>
                    <h4>Account</h4>
                </div>
                <div className='main__box-avatar'>
                    <h5>Your photo</h5>
                    <span>This will be displayed on your profile.</span>
                </div>
                <div className='main__box-'>
                    <h4>Basic Information</h4>
                </div>
                <div className='profile__form'>
                    <Form
                    >
                        <h1>First name</h1>
                        <Form.Item
                            label="Username"
                            name="username"
                        >
                            <Input placeholder='Joshua' />
                        </Form.Item>
                        <h1>Country</h1>
                        <Form.Item
                            label="Country"
                            name="country"
                        >
                            <Input placeholder='example' />
                        </Form.Item>
                        <h1>Email Address</h1>
                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input placeholder='j.e.dukes@aol.com' />
                            <Button type="primary" htmlType="submit">
                                Verify
                            </Button>
                        </Form.Item>
                        <h1>Last name</h1>
                        <Form.Item
                            label="Lastname"
                            name="lastname"
                        >
                            <Input placeholder='Jones' />
                        </Form.Item>
                        <h1>City</h1>
                        <Form.Item
                            label="City"
                            name="city"
                        >
                            <Input placeholder='example' />
                        </Form.Item>
                        <h1>Your Phone Number</h1>
                        <ConfigProvider locale={eu}>
                            <CountryPhoneInput placeholder='0' />
                        </ConfigProvider>
                        <Button type="primary" htmlType="submit">
                            Verify
                        </Button>
                    </Form>
                    <Form>
                        <h1>Password</h1>
                        <Form.Item>
                            <Button>
                                Change Password
                            </Button>
                        </Form.Item>
                        <h1>Education</h1>
                        <Form.Item
                            label="University"
                            name="University"
                        >
                            <Input placeholder='University' />
                        </Form.Item>
                        <Form.Item>
                        <h1>From</h1>
                        <DatePicker defaultValue={moment('2022/10', dayYear)} format={dayYear} />
                        </Form.Item>
                        <Form.Item>
                        <h1>To</h1>
                        <DatePicker defaultValue={moment('2022/10', dayYear)} format={dayYear} />
                        </Form.Item>
                        <Form.Item>
                            <h1>About me</h1>
                            <Input placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hendrerit sem viverra enim cursus varius augue nullam morbi. Feugiat vel quisque congue pharetra mattis ipsum. Eget turpis elementum in ornare. Convallis sodales viverra nibh ut semper montes, blandit pretium. Ornare sit egestas elementum egestas pellentesque aliquet ut id.'/>
                        </Form.Item>
                        <Form.Item>
                            <h1>Skills</h1>
                            <Input placeholder='Add at least 1 of your basic skills'/>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Main