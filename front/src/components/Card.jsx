import React from 'react'
import { useState } from 'react'

import StCard from '../style/Card.module.css'

export default function Card({ data }) {

    const ordem= data.ordem
    const solicitante= data.solicitante
    const setor= data.setor
    const codigoEquipamento= data.codigoEquipamento
    const date= data.date

    const title = ordem.startsWith('MANEQP') ? 'Manutenção de Equipamento' : 'Manutenção Predial';
    return (
        <div className={StCard.card} id={StCard.open}>
            <div name="title" className={StCard.titleDiv}>
                <h1>{title} | {ordem}</h1>
            </div>

            <div className={StCard.main}>
                <div name="solicitante" className={StCard.item}>
                    <p>Solicitante:</p>
                    <span>{solicitante}</span>
                </div>

                <div name="setor" className={StCard.item}>
                    <p>Setor:</p>
                    <span>{setor}</span>
                </div>

                <div name="codigoEquipamento" className={StCard.item}>
                    <p>Código do Equipamento:</p>
                    <span>{codigoEquipamento}</span>
                </div>
            </div>

        </div>

    )
}
