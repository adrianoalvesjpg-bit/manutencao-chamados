import { useState } from 'react'
import StApp from './style/App.module.css'

import Side from './components/Side'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div className={StApp.app}>
      <header className={StApp.header}> <Header/> </header>
      <div className={StApp.container}>
        <aside className={StApp.aside}> <Side/> </aside>
        <main className={StApp.main}>
            <div className={StApp.title}>
              <h1>Ordens de Manutenção</h1>
            </div>
            <Main/>
        </main>
      </div>
      <footer className={StApp.footer}> <p>&copy; 2026 Adriano Alves Vieira Development - Todos os direitos reservados</p> </footer>
    </div>
  )
}

export default App
