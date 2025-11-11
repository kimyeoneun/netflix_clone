import React, { useState } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  // 가짜 로그인 상태
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleFakeLogin = () => {
    // 아무 값이나 입력하고 로그인 누르면 true로 바뀌게
    setIsLoggedIn(true)
  }

  return (
    <div>
      <ToastContainer theme='dark' />
      {isLoggedIn ? (
        // 로그인 됐으면 홈/플레이어 라우트 보이게
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/player/:id' element={<Player />} />
        </Routes>
      ) : (
        // 아직 로그인 안 됐으면 무조건 로그인 화면
        <Login onLogin={handleFakeLogin} />
      )}
    </div>
  )
}

export default App
