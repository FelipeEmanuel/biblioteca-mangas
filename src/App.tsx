import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MyList from './containers/myList'

function App() {

  return (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<MyList/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App