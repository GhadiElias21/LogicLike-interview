import React from 'react'
import styles from './errors.module.scss'
const Errors = () => {
  return (
    <div className={styles['error-container']}>
        <div className={styles.error}>error fetching data</div>
        <button className={styles.button} onClick={()=>{window.location.reload()}}>Reload</button>
        
        
        </div>
  )
}

export default Errors