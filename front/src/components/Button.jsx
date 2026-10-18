import React from 'react'
import StButton from '../style/Button.module.css'
export default function Button({
  text='',
  func=()=>{},
  variant='primary',
  size='1',
}) {

  const variants={
    'primary': StButton.primary,
    'secondary': StButton.secondary,
    'destruction': StButton.destruction,
    'accept': StButton.accept,
  }

  const sizes= {
    '0': StButton.size0,
    '1': StButton.size1,
    '2': StButton.size2,
    '3': StButton.size3,
    '4': StButton.size4,
    '5': StButton.size5,
  }

  const classVariant= variants[variant]
  const classSize=sizes[size]

  return (
    <div className={StButton.container}>
      <button className={`${classVariant} ${classSize}`} onClick={func}>{text}</button>
    </div>
  )
}
