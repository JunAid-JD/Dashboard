import React from 'react'
import './Home.css'
import { Search } from '@mui/icons-material'
import WorkOrderBox from './WorkOrderBox'
import EstimateBox from './EstimateBox'
import InvoiceBox from './InvoiceBox'
import JobBox from './JobBox'
import SocialMediaBox from './SocialMediaBox'
import RecentBox from './RecentBox'
import EarningBox from './EarningBox'
import EmployeBox from './EmployeBox'
import RightBar from './Rightbar/Rightbar'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="homemain">
                    <div className="homeheader">
                        <h2><span className='username'>Billy</span>,How you doing?</h2>
                        <div className="search">
                            <Search />
                            <input type="search" placeholder="Let's find" />
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="homecontent">
                        <WorkOrderBox />
                        <EstimateBox />
                        <InvoiceBox />
                        <JobBox />
                        <SocialMediaBox />
                        <EarningBox />
                        <EmployeBox />
                        <RecentBox />
                    </div>
                </div>
                <div className="homesidebar">
                    <RightBar />
                </div>
            </div>
        </>
    )
}

export default Home
