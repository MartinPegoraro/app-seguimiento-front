import { useState } from 'react'
import React from 'react'
import Header from '../../../../components/Header'
import NavBar from '../../../../components/NavBar'
import Layout from '../../../../components/Layout'
import SearchOrder from '../../../../components/SearchOrder'
import Footer from '../../../../components/Footer'


export default function Search() {
    const [state, setState] = useState()
    return (
        <>
            <Header />
            <NavBar setState={setState} />
            <Layout >
                <SearchOrder />
            </Layout>
            <Footer state={state} />

        </>
    )
}
