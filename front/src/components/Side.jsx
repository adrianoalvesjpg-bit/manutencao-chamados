import React from 'react'

import StSide from '../style/Side.module.css'

export default function Side({data}) {
    data={
        openTask: 11,
        closeTask: 47
    }

    let openTask=data.openTask
    let closeTask=data.closeTask

  return (
    <div className={StSide.main}>
        <div className={StSide.divStatus} id={StSide.open}>
            <h1>Chamados Abertos</h1>
            <p>{openTask}</p>
        </div>

        <div className={StSide.divStatus} id={StSide.close}>
            <h1>Chamados Fechados</h1>
            <p>{closeTask}</p>
        </div>

        <div className={StSide.divStatus} id={StSide.all}>
            <h1>Total de Chamados</h1>
            <p>{openTask+closeTask}</p>
        </div>
      
    </div>
  )
}
