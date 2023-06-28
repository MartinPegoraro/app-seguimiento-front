import React from 'react'
import Header from '../../../../../../components/Header'
import NavBar from '../../../../../../components/NavBar'
import Layout from '../../../../../../components/Layout'
import Truck from '../../../../../../components/Truck'

export default function IndexPedido() {
    return (
        <>
            <Header />
            <NavBar />
            <Layout>
                <Truck />
            </Layout>
        </>
    )
}
