import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import AppRouter from './router/router'
import Footer from './components/footer/Footer'

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
