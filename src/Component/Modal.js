import React from 'react'
import styles from './modal.module.css'
const Modal = ({search,show,onClose,children,tempdata}) => {
  if(!show){
    return null
  }
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <button onClick={onClose}  className={`${styles.btnClose} btn-close`}/>
        <img className="center" src={tempdata} width="500px" height="500px"/>
      </div>
    </div>
  )
}

export default Modal