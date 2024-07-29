import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useMediaQuery } from 'react-responsive';
import '../styles/CustomSidebar.css';
import { GoShieldCheck } from "react-icons/go";
import { LuWrench } from "react-icons/lu";
import { BsUnlockFill, BsLockFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CustomSidebar = ({ menuItems, menuName, collapsed, toggled, handleToggleSidebar, handleCollapsedChange }) => {
    const [activeTab, setActiveTab] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isLockHovered, setIsLockHovered] = useState(false);

    const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

    useEffect(() => {
        if (isSmallScreen) {
            handleCollapsedChange(true);
        } else {
            handleCollapsedChange(false);
        }
    }, [isSmallScreen]);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <Sidebar
                className='text-white w-64 h-full'
                backgroundColor='#001f3f'
                collapsed={collapsed}
                toggled={toggled}
                onToggle={handleToggleSidebar}
            >
                <Menu>
                    {collapsed ? (
                        <MenuItem icon={<BsLockFill />} onClick={handleCollapsedChange} style={
                          isLockHovered
                              ? { color: '#001f3f' }
                              : { color: 'white' }
                          }
                          onMouseEnter={() => setIsLockHovered(true)}
                          onMouseLeave={() => setIsLockHovered(false)}></MenuItem>
                    ) : (
                        <MenuItem icon={<BsUnlockFill />} onClick={handleCollapsedChange} style={
                          isLockHovered
                              ? { color: '#001f3f' }
                              : { color: 'white' }
                          }
                          onMouseEnter={() => setIsLockHovered(true)}
                          onMouseLeave={() => setIsLockHovered(false)}>Close Menu</MenuItem>
                    )}
                    <hr />
                </Menu>
                <Menu>
                    <SubMenu
                        label={menuName}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        icon={<GoShieldCheck />}
                        style={
                            isHovered
                                ? { color: '#001f3f' }
                                : { color: 'white' }
                        }
                    >
                        {menuItems?.map((tab) => (
                            <MenuItem
                                key={tab.path}
                                active={activeTab === tab.path}
                                onClick={() => setActiveTab(tab.path)}
                                className={`cursor-pointer`}
                                icon={<LuWrench />}
                                style={
                                    activeTab === tab.path
                                        ? { color: '#001f3f' }
                                        : {
                                              backgroundColor: '#001f3f',
                                              color: 'white',
                                          }
                                }
                            >
                                <Link to={tab.path}>
                                    {tab.label}
                                </Link>
                            </MenuItem>
                        ))}
                    </SubMenu>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default CustomSidebar;
