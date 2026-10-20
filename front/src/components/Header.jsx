import { useState, useRef } from 'react'
import StHeader from '../style/Header.module.css'

import DropDownMenu from './DropDownMenu'

export default function Header() {

  const [showDropDownMenu, setShowDropDownMenu] = useState(false)
  const userbtnRef=useRef()
  return (
    <div className={StHeader.container}>
      <h1>Task Hub</h1>
      <button ref={userbtnRef} onClick={() => setShowDropDownMenu(prev => !prev)} className={StHeader.user}>AV</button>
      <DropDownMenu  btnRef={userbtnRef} show={showDropDownMenu} onClose={() => {setShowDropDownMenu(false)}} />
      
    </div>
  )
}
