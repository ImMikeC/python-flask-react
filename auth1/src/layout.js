import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LandingPage } from './landing.page'
import App from './App'

const Layout = () => {
    return (
        <BrowserRouter>
            <App />            
        </BrowserRouter>
    )
}

export default Layout