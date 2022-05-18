import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiTwotoneHome />,
        cName: 'nav-text'
    },
    {
        title: 'Create Webform',
        path: '/create-webform',
        icon: <AiIcons.AiFillPlusCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Saved Webforms',
        path: '/saved-webforms',
        icon: <AiIcons.AiFillSave />,
        cName: 'nav-text'
    },
    {
        title: 'Webform Templates',
        path: '/webform-templates',
        icon: <AiIcons.AiFillFileAdd />,
        cName: 'nav-text'
    },
    {
        title: 'FAQ',
        path: '/faq',
        icon: <AiIcons.AiFillQuestionCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiTwotoneSetting />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <AiIcons.AiOutlineLogout />,
        cName: 'nav-text'
    }
]