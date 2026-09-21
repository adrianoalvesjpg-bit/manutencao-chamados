import {useState} from 'react'

import StMain from '../style/Main.module.css'

export default function Main() {
  return (
    <div className={StMain.container}>
      <div className={StMain.card} id={StMain.open}>
        <div className={StMain.titleDiv}>
          <h1>Manutenção de Equipamento - MANEQP-0001</h1>
        </div>

        <div className={StMain.main}>
          <div className={StMain.item}>
            <p>Solicitante:</p>
            <span>Adriano Alves Vieira</span>
          </div>

          <div className={StMain.item}>
            <p>Setor:</p>
            <span>Engenharia</span>
          </div>

          <div className={StMain.item}>
            <p>Código do Equipamento:</p>
            <span>9252325</span>
          </div>
        </div>

      </div>
    </div>
  )
}
