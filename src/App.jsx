import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './router'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

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
