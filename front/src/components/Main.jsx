import { useState } from 'react'

import Card from './Card'
import StMain from '../style/Main.module.css'
import { use } from 'react'

export default function Main() {


  const bd = [
    {
      index: 1,
      ordem: 'MANEQP-0001',
      solicitante: 'Adriano Alves Vieira',
      setor: 'Engenharia',
      codigoEquipamento: 923512325,
      date: '10/02/26',
    },
    { 
      index: 2,
      ordem: 'MANEQP-0002',
      solicitante: 'Maria Fernanda Souza',
      setor: 'Produção',
      codigoEquipamento: 823412678,
      date: '12/02/26',
    },
    {
      index: 3,
      ordem: 'MANPRED-0003',
      solicitante: 'João Carlos Mendes',
      setor: 'Infraestrutura',
      codigoEquipamento: null, // predial não tem código de equipamento
      date: '15/02/26',
    },
    {
      index: 4,
      ordem: 'MANEQP-0004',
      solicitante: 'Patrícia Oliveira',
      setor: 'Qualidade',
      codigoEquipamento: 456789123,
      date: '18/02/26',
    },
    {
      index: 5,
      ordem: 'MANPRED-0005',
      solicitante: 'Ricardo Lima',
      setor: 'Segurança',
      codigoEquipamento: null,
      date: '20/02/26',
    },
    {
      index: 6,
      ordem: 'MANEQP-0006',
      solicitante: 'Carla Dias',
      setor: 'Engenharia',
      codigoEquipamento: 987654321,
      date: '22/02/26',
    }
  ];


  return (
    <div className={StMain.container}>
      <ul>
        {bd.map((item, index) => (
          <li key={index}>
            <Card data={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
