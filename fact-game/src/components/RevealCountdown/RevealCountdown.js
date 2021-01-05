import React from 'react'
import styles from './RevealCountdown.module.css'

function RevealCountdown({ secondsLeft }) {
    return <div className={styles.revealCountdown}>{secondsLeft}</div>
}

export default RevealCountdown
