import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateUser from './components/CreateUser'
import ShowUser from './components/ShowUser'
import UpdateUser from './components/UpdateUser'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/' element={<ShowUser/>}/>
        <Route path='/update/:id' element={<UpdateUser/>} />
      </Routes>
    </>
  )
}

export default App