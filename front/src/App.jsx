import { useState } from 'react'
import StApp from './style/App.module.css'

import Side from './components/Side'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div>
      <header className={StApp.header}> <Header/> </header>
      <main className={StApp.app}>
        <aside className={StApp.sidebar}> <Side/> </aside>
        <main className={StApp.main}> <Main/> </main>
      </main>
    </div>
  )
}

export default App
