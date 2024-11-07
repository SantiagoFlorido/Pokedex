import React from 'react'
import { Outlet } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
      <h1>Navegación</h1>

      <Outlet />
    </div>
  )
}

export default Navigation