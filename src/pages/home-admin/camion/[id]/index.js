import React from 'react'
import Header from '../../../../../components/Header'
import Layout from '../../../../../components/Layout'
import NavBar from '../../../../../components/NavBar'
import Order from '../../../../../components/Order'
import Truck from '../../../../../components/Truck'

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
