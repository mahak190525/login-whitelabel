import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Link } from 'react-router'
import './App.css'
import Login from '@/pages/Login';
import Success from '@/pages/Success';
import ResetPassword from '@/pages/ResetPassword'
import { Button } from '@/components/ui/button'
import SignUp from '@/pages/SignUp';
import { Toaster } from '@/components/ui/sonner';

const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page</h2>
// const Login = () => <h2>Login Page</h2>

function App() {

  return (
    <>
    <Toaster position="top-right"/>
    <div>
      {/* <Button><Link to='/'>Home</Link></Button>
      <Button><Link to='/about'>About</Link></Button> */}
      {/* <Button><Link to='/'>Login</Link></Button> */}
    </div>

    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
