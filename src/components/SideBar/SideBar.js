import React from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';
const SideBar = () => {
    return (
        <div className='sidebar'>
            <div style={{margin:'25px 0px', textAlign:'center'}}>
                <h1>House 301</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to='/members'>Members</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addmember'>Add Member</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;