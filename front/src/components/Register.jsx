import { useState } from 'react'

import StRegister from '../style/Register.module.css'

import { VscSend } from "react-icons/vsc";

export default function Register() {
  const [sector, setSector] = useState('eng1')
  const [category, setCategory] = useState('1')
  const [codeEquipament, setCodeEquipament] = useState(true)
  const [textDisabled, setTextDisabled] = useState()

  const selectSector = (value) => {
    setSector(value)
  }

  const selectCategory = (value) => {
    setCategory(value)
    const isEquipament = value === '1'
      setCodeEquipament(isEquipament)
      setTextDisabled(isEquipament ? StRegister.text : StRegister.textDisabled)
  }

  return (
    <div className={StRegister.container}>
      <div className={StRegister.main}>
        <div className={StRegister.input}>
          <span>Solicitante</span>
          <input type="text" />
        </div>

        <div className={StRegister.input}>
          <span>Setor</span>
          <select value={sector} onChange={(e) => selectSector(e.target.value)}>
            <option value="eng1">Engenharia de Produto</option>
            <option value="eng2">Engenharia de Processo</option>
            <option value="qualidade">Qualidade</option>
            <option value="admin">Administrativo</option>
            <option value="pcp">PCP</option>
            <option value="comercial">Comercial</option>
            <option value="rh">RH</option>
            <option value="amx">Almoxarifado</option>
            <option value="exp">Expedição</option>
            <option value="m_1">Montagem Agrale</option>
            <option value="m_2">Montagem Marcopolo</option>
            <option value="m_3">Montagem Spheros</option>
            <option value="m_4">Montagem TKE</option>
            <option value="m_5">Montagem Outros</option>
            <option value="weg">WEG</option>
            <option value="linha_c">Linha Contínua</option>
            <option value="corte">Corte</option>
            <option value="aplicacao">Aplicação</option>
            <option value="acabamento">Acabamento</option>
            <option value="calha">Calha</option>
            <option value="teste">Teste</option>
          </select>
        </div>

        <div className={StRegister.input}>
          <span>Categoria</span>
          <select value={category} onChange={(e) => selectCategory(e.target.value)}>
            <option value="1">Manutenção de Equipamento</option>
            <option value="2">Manutenção Predial</option>
          </select>
        </div>

        <div className={StRegister.input}>
          <span className={textDisabled}>Código do Equipamento</span>
          <input type="number" disabled={!codeEquipament}/>
        </div>

      </div>

      <div className={StRegister.description}>
          <span>Descrição</span>
          <textarea type="text" />
      </div>
      <div className={StRegister.button}>
          <button>
            <VscSend />
          </button>
      </div>
    </div>
  )
}
