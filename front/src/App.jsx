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
        <section className={StApp.title}>
          <h1>Ordens de Manutenção</h1>
        </section>
        <aside className={StApp.sidebar}> <Side/> </aside>
        <main className={StApp.main}> <Main/> </main>
      </main>
      <footer className={StApp.footer}> <p>&copy; 2026 Adriano Alves Vieira Development - Todos os direitos reservados</p> </footer>
    </div>
  )
}

export default App
