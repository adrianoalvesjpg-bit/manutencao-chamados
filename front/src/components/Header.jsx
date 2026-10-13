import { useState } from 'react'
import StHeader from '../style/Header.module.css'

import DropDownMenu from './DropDownMenu'

export default function Header() {

  const [showDropDownMenu, setShowDropDownMenu] = useState(false)

  return (
    <div className={StHeader.container}>
      <h1>Task Hub</h1>
      <button onClick={() => setShowDropDownMenu(!showDropDownMenu)} className={StHeader.user}>AV</button>
      <DropDownMenu show={showDropDownMenu}/>
      
    </div>
  )
}
