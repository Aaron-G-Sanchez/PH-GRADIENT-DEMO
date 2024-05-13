import './App.scss'
import {Routes, Route} from 'react-router-dom'
import { Landing } from './pages/landing/Landing'

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
      </Routes>
    </>
  )
}

