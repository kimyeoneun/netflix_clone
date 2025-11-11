import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import Help from './pages/Help/Help'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        {/* 🔹 기본 진입 시 /login 으로 리다이렉트 */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* 로그인 */}
        <Route path="/login" element={<Login />} />

        {/* 홈 */}
        <Route path="/home" element={<Home />} />

        {/* 플레이어 */}
        <Route path="/player/:id" element={<Player />} />

        {/* 헬프 센터 */}
        <Route path="/help" element={<Help />} />

        {/* 잘못된 경로 → /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  )
}

export default App
