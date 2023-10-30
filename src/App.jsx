import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import AppRouter from './router/router'

const App = () => {

  return (
    <>
    <BrowserRouter >
      <Header />
        <AppRouter />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
