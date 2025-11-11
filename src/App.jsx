import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        {/* 기본은 로그인 페이지 */}
        <Route path="/login" element={<Login />} />
        {/* 로그인 버튼 누르면 여기로 이동 */}
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
        {/* 이상한 주소로 들어오면 /login 으로 보내기 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
