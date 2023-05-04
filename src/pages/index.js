import Header from "../../components/Header";
import HomePage from "../../components/HomePage";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";


export default function Home() {
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
