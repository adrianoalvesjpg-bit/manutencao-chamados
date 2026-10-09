import { useState } from 'react'
import StHeader from '../style/Header.module.css'

export default function Header() {

  return (
    <div className={StHeader.container}>
      <h1>Task Hub</h1>
      <button className={StHeader.user}>AV</button>
    </div>
  )
}
