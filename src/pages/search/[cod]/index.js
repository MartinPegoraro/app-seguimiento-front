import React from 'react'
import Header from '../../../../components/Header'
import NavBar from '../../../../components/NavBar'
import Layout from '../../../../components/Layout'
import SearchOrder from '../../../../components/SearchOrder'


export default function search() {
    let state = 'search'
    return (
        <>
            <Header />
            <NavBar state={state} />
            <Layout >
                <SearchOrder />
            </Layout>
        </>
    )
}
