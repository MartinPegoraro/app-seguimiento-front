import React from 'react'
import Header from '../../../../components/Header'
import NavBar from '../../../../components/NavBar'
import Layout from '../../../../components/Layout'
import HomeAdmin from '../../../../components/HomeAdmin'

export default function HomeAdminministrator() {
    return (
        <>
            <Header />
            < NavBar />
            <Layout>
                <HomeAdmin />
            </Layout>
        </>
    )
}
