import React, { useMemo, useState } from 'react'
import styles from '../styles/doctor.module.css'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import * as anchor from '@project-serum/anchor'

export default function doctor() {
  const [open, setOpen] = useState(false);
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const anchorWallet = useAnchorWallet()

  return (
    <div className={styles.landingpage}>
        {/* <div className={styles.picLeft} >
        <img src="./bro.png" alt=''/>

        </div> */}
            <div className={styles.svg}>
<img src="./Login-rafiki.png" alt=''/>
            </div>
        <div className={styles.formBody}>
        
            <div>
            <form className={styles.form} action="#" method="post">

<h1 className={styles.h1}>MINT DISEASE NFT</h1>

<div>
  <label className={styles.label} for="name">Wallet Address:</label>
  <input className={styles.input} type="text" id={styles.name} name="user_name"/>

  <label className={styles.label}   for="disease">Disease:</label>
  <input className={styles.input}  type="text" id={styles.name} name="user_disease"/>

  <label className={styles.label} for="age">Age:</label>
  <input  className={styles.input} type="text" id={styles.name} name="user_age"/>

  <label className={styles.label} for="gd">Claim Amount:</label>
  <input  className={styles.input} type="text" id={styles.name} name="user_gd"/>


</div>





<button className={styles.btn}  type="submit">MINT NFT</button>


</form>
            </div>
        </div>
      
    </div>
  )
}
