import React from 'react'
import Tendy from './Pages/Trendy/Tendy'
import Routing from './Routing/Routing'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div>
      <Routes>
  {
    Routing.map((item, index)=>{
      return(
        <Route path={item.path} element={item.element} key={index} />
      )
    })
  }
  </Routes>
    </div>
  )
}

export default App
