import { useState } from 'react'
import StApp from './style/App.module.css'

import { MdOutlineAdd } from "react-icons/md";

import Side from './components/Side'
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'
import Register from './components/Register'


function App() {

  const [enabled, setEnabled] = useState(false)

  return (
    <div className={StApp.app}>
      <header className={StApp.header}> <Header/> </header>
      <div className={StApp.container}>
        <aside className={StApp.aside}> <Side/> </aside>
        <main className={StApp.main}>
            <div className={StApp.title}>
              <h1>Ordens de Manutenção</h1>
              <Button size='2' variant='primary' text={<> <MdOutlineAdd /> Novo Chamado</>} onClick={()=>{setEnabled(!enabled)}}/>
            </div>
            <Main/>
            <Register enabled={enabled} onClose={() => setEnabled(false)}/>
        </main>
      </div>
      <footer className={StApp.footer}> <p>&copy; 2026 Adriano Alves Vieira Development - Todos os direitos reservados</p> </footer>
    </div>
  )
}

export default App
