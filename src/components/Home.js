import React from 'react'
import SideBar from "./SideBar"
import Header from "./Header"
import Dashboard from "./Dashboard"

export default function Home() {
    return (
        <div>
            <Header></Header>
            <SideBar></SideBar>
            <Dashboard></Dashboard>  
        </div>
    )
}

