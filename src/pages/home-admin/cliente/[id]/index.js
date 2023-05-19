import React from 'react'
import Header from '../../../../../components/Header'
import NavBar from '../../../../../components/NavBar'
import Layout from '../../../../../components/Layout'
import Cliente from '../../../../../components/Cliente'

export default function index() {
    return (
        <>
            <Header />
            <NavBar />
            <Layout>
                <Cliente />
            </Layout>
        </>
    )
}
