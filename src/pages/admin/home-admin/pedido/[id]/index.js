import React from 'react'
import Header from '../../../../../../components/Header'
import NavBar from '../../../../../../components/NavBar'
import Layout from '../../../../../../components/Layout'
import Order from '../../../../../../components/Order'

export default function IndexPedido() {
    return (
        <>
            <Header />
            <NavBar />
            <Layout>
                <Order />
            </Layout>
        </>
    )
}
