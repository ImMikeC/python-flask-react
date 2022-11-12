import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LandingPage } from './landing.page'
import App from './App'

const Layout = () => {
    return (
        <BrowserRouter>
            <App />
            {/* <Routes>
                <Route path="/" component={LandingPage} />
            </Routes> */}
        </BrowserRouter>
    )
}

export default Layout