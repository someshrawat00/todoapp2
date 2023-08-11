import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../../pages/Layout/Layout'
import Home from '../../pages/Home/Home'
import Today from '../../pages/Today/Today'
import Personal from '../../pages/Personal/Personal'
import Work from '../../pages/Work/Work'
import { AnimatePresence } from 'framer-motion'

const Animatedroutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="today" element={<Today />} />
                    <Route path="personal" element={<Personal />} />
                    <Route path="work" element={<Work />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default Animatedroutes