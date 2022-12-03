import React from 'react'
import './sidebar.css';
import MenuIcon from '@mui/icons-material/Menu';
import hissam from '../../images/hissam.jpg';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import TerrainIcon from '@mui/icons-material/Terrain';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

const Sidebar = () => {

    const [open, setOpen] = React.useState(false);

    const toggle = () => setOpen(!open);



    return (
        <motion.div className='sidebar' animate={{
            width: open ? "80px" : "250px", transition: {
                duration: 0.5,
                type: "spring",
                damping: 10,
            },
        }}>
            <div className="sidebar-main-section">
                <div className="sidebar-top-section">
                    {!open && <span className="sidear-title">Panel</span>}
                    <div className="menuicon">
                        <MenuIcon className='menu-bar' onClick={toggle} />
                    </div>
                </div>
                {!open && <div className="sidebar-img-container">
                    <div className="main-img">
                        <img src={hissam} alt="hissam" className='avatar-img' />
                        <div className="name-container">
                            <h3 className="avatar-name">Hissam Ali</h3>
                            <span className='profession'>web developer</span>
                        </div>
                    </div>
                </div>}

                <div className="menu-container">
                    <div className="sidebar-menu">
                        <ul className="menu-item-section">
                            <li className="menu-list-section">
                                <NavLink to="/" className="invoices" >
                                    <HomeIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Dashboard</a>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-header">
                    <span className="content-title">Data</span>
                </div>
                <div className="menu-container">
                    <div className="sidebar-menu">
                        <ul className="menu-item-section">
                            <li className="menu-list-section">
                                <NavLink to="/team" className="invoices">
                                    <PeopleAltIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Manage Team</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/contats" className="invoices">
                                    <ContactsIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Contact Information</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/invoices" className="invoices">
                                    <ReceiptIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Invoices Balance</a>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-header">
                    <span className="content-title">Pages</span>
                </div>
                <div className="menu-container">
                    <div className="sidebar-menu">
                        <ul className="menu-item-section">
                            <li className="menu-list-section">
                                <NavLink to="/profile" className="invoices">
                                    <PersonIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Profile Form</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/calendar" className="invoices">
                                    <CalendarTodayIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Calendar</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/faq/page" className="invoices">
                                    <LiveHelpOutlinedIcon className='icons' />
                                    {!open && <a className='sidebar-links'>FAQ Pages</a>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content-header">
                    <span className="content-title">Charts</span>
                </div>
                <div className="menu-container">
                    <div className="sidebar-menu">
                        <ul className="menu-item-section">
                            <li className="menu-list-section">
                                <NavLink to="/bar" className="invoices">
                                    <BarChartOutlinedIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Bar Chart</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/pie" className="invoices">
                                    <PieChartOutlineOutlinedIcon className='icons' />
                                    {!open && <a className=''>Pie Chart</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/line" className="invoices" >
                                    <TimelineIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Line Chart</a>}
                                </NavLink>
                            </li>
                            <li className="menu-list-section">
                                <NavLink to="/geo" className="invoices">
                                    <TerrainIcon className='icons' />
                                    {!open && <a className='sidebar-links'>Geography Chart</a>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar
