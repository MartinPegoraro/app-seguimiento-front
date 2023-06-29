import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomePage from "../../components/HomePage";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";


export default function Home() {
  const [state, setState] = useState()
  return (
    <>
      <Header />
      <NavBar setState={setState} />
      <Layout>
        <HomePage />
      </Layout>
      <Footer state={state} />
    </>
  )
}
