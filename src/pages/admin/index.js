import React from 'react'
import Header from '../../../components/Header'
import NavBar from '../../../components/NavBar'
import Layout from '../../../components/Layout'
import HomePage from '../../../components/HomePage'

export default function indexAdmin() {
    return (
        <>
            <Header />
            <NavBar />
            <Layout>
                <HomePage />
            </Layout>
        </>
    )
}
