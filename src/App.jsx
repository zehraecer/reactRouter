import { createContext, useRef, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Login } from './pages/Login'

export const userContext = createContext()

function App() {

  const formRef = useRef()
  const summaryRef = useRef()
  const loginRef = useRef()
  const [form, setForm] = useState([])

  return (
    <userContext.Provider value={{ formRef, form, setForm, summaryRef, loginRef }}>

      <Header />
      <Outlet />

    </userContext.Provider>
  )
}

export default App
