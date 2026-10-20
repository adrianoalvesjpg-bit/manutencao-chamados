import React from 'react'
import { useState, useEffect, useRef } from 'react'

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import StDropDownMenu from '../style/DropDownMenu.module.css'

export default function DropDownMenu({ show, onClose, btnRef }) {

    const refMenu = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                refMenu.current &&
                !refMenu.current.contains(e.target) &&
                btnRef.current &&
                !btnRef.current.contains(e.target)
            ) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode])

    return (
        <div ref={refMenu} className={`${StDropDownMenu.container} ${show ? StDropDownMenu.show : ''}`}>
            <section>
                <a>Configurações da Conta</a>
                <IoSettingsOutline />
            </section>
            <section onClick={() => setDarkMode(!darkMode)}>
                <a>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</a>
                {darkMode === true ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </section>

            <section className={StDropDownMenu.close}>
                <a>Sair</a>
                <IoIosLogOut />
            </section>

            <hr />
            <p>adrianoalves.jpg@gmail.com</p>
        </div>
    )
}
