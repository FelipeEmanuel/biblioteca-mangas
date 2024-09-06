import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyList from './containers/myList'
import Login from './containers/login'
import Cadastro from './containers/cadastro'
import { Container } from '@mui/material'

function App() {

  return (
    <>
      <Router>
        <div className='App'>
          <Container fixed>
            <Routes>
              <Route path='/' element={<MyList/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/cadastro' element={<Cadastro/>}/>
            </Routes>
          </Container>
        </div>
      </Router>
    </>
  )
}

export default App