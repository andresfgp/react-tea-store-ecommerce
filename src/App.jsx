import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRouter from './router/Router'

const App = () => {

  return (
    <>
    <BrowserRouter >
      <div className='app'>
        <Header />
          <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
