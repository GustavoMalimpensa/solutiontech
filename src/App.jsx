import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { Servico, HomePage,  Contato, Error } from './pages/index'
import ScrollToTop from './hooks/useScrollToTop';
import BigTech from './pages/About/Bigtech';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/Serviços" element={
          <Layout>
            <Servico />
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