import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    return (
        <>
            <div className='topbar' >
                <div className="left">
                    <div className="search-container">
                        <div className="search-section">
                            <input type="text" placeholder='Search' className='search-bar' />
                        </div>
                        <div className="search-section-icon">
                            <SearchIcon className='search-icon' />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-container">
                        <NotificationsIcon className='right-icons' />
                    </div>
                    <div className="right-container">
                        <SettingsIcon className='right-icons' />
                    </div>
                    <div className="right-container">
                        <PersonIcon className='right-icons' />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Topbar
