import { Routes, Route } from 'react-router'
import './App.css'
import Login from '@/pages/Login';
import Success from '@/pages/Success';
import ResetPassword from '@/pages/ResetPassword';
import UpdatePassword from '@/pages/UpdatePassword';
import SignUp from '@/pages/SignUp';
import { Toaster } from '@/components/ui/sonner';

function App() {

  return (
    <>
    <Toaster position="top-right"/>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
      <Route path='/update-password' element={<UpdatePassword/>}/>
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
