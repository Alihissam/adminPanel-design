import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Sidebar from './Pages/sidebar/Sidebar';
import Topbar from './Pages/topbar/Topbar';
import Dashboard from './Pages/dashboard/Dashboard';
import Team from './Pages/team/Team';
import Invoices from './Pages/invoices/Invoices';
import Contact from './Pages/contacts/Contact';
import Profile from './Pages/profile/Profile';
import Calendar from './Pages/calendar/Calendar';
import Faq from './Pages/faq page/Faq';
import Barchart from './components/Barchart';
import Piechart from './components/Piechart';
import Linechart from './components/Linechart';
import Geography from './components/Geography';



function App() {
  return (
    <div className="App">
      <Sidebar/>
     <main className='content' style={{width:"100%"}}>
     <Topbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/invoices" element={<Invoices/>}></Route>
        <Route path="/contats" element={<Contact/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
        <Route path="/faq/page" element={<Faq/>}></Route>
        <Route path="/bar" element={<Barchart/>}></Route>
        <Route path="/pie" element={<Piechart/>}></Route>
        <Route path="/line" element={<Linechart/>}></Route>
        <Route path="/geo" element={<Geography/>}></Route>
      </Routes>
     </main>
    </div>
  );
}

export default App;
