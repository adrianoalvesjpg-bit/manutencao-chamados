import { useState } from 'react'
import StHeader from '../style/Header.module.css'

export default function Header() {

  return (
    <div className={StHeader.container}>
      <h1>Chamados de Manutenção</h1>
      <button>Login</button>
    </div>
  )
}
