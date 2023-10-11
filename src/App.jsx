import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import Layout2 from './utils/Layout2';
import { HomePage,  Contato, Error } from './pages/index'
import { Servico, Sites, Catalogo, Otimizacao, Markteplace, Consultoria, Email, Datascience } from './pages/index';
import BigTech from './pages/About/Bigtech';


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout2>
            <HomePage />
          </Layout2>
        } />


        <Route path="/Serviços" element={
          <Layout>
            <Servico />
          </Layout>
        } />
        <Route path="/Serviços-sites" element={
          <Layout>
            <Sites />
          </Layout>
        } />
        <Route path="/Serviços-catalogo" element={
          <Layout>
            <Catalogo />
          </Layout>
        } />
        <Route path="/Serviços-otimizacao" element={
          <Layout>
            <Otimizacao />
          </Layout>
        } />
        <Route path="/Serviços-consultoria" element={
          <Layout>
            <Consultoria />
          </Layout>
        } />
        <Route path="/Serviços-email" element={
          <Layout>
            <Email />
          </Layout>
        } />
        <Route path="/Serviços-datascience" element={
          <Layout>
            <Datascience />
          </Layout>
        } />
        <Route path="/Serviços-markteplace" element={
          <Layout>
            <Markteplace />
          </Layout>
        } />
        


         <Route path="/Big-Tech" element={
          <Layout>
            <BigTech />
          </Layout>
        } />
        <Route path="/contato" element={
          <Layout>
            <Contato />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <Error />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App