import Router, { useRouter } from 'next/router';
import React, { useState } from 'react'
import styles from '../styles/details.module.css'
import Link from 'next/link'
import { useAnchorWallet, useConnection, useWallet } from '@solana/wallet-adapter-react';

export default function Details() {
  const [open, setOpen] = useState(false);
  const { connection } = useConnection()
  const { publicKey } = useWallet()
  const anchorWallet = useAnchorWallet()


  const handleConfirm = result => {
    if (result) {
      console.log('some action...')
    }

    setOpen(false)
  }

  const location = useRouter();
  const event = location.query;
  console.log(location.query)

  // if (isConnected) {
  //  setWallet(address)
  // }
  const mintNow = async (contractAddress) => {


  }
  return (
    <div className={styles.component}>


      <div>
        {/* <button  className={styles.walletbtn} >
          Connect Wallet
        </button> */}

      </div>


      {open && <div className={styles.modal}>
        <div className={open ? styles.confirmShow : styles.confirm}>
          {!connection ?

            <div>
              <div className={styles.select}>
                SELECT WALLET
              </div>
              <div className={styles.wallets}>

              <WalletMultiButton/>
            

              </div>

            </div>

            :
            <div 
            
            className={styles.mint}>
              <button 
                className={styles.walletbtn}
              >
                QOUTE
              </button>
            </div>
          }

          <button className={styles.cancel} onClick={() => handleConfirm(false)}>Cancel</button>


        </div>
        <div
          className={styles.overlay}
          onClick={() => handleConfirm(false)}
        />

      </div>}


      <div>

      </div>

      <div className={styles.cardBox}>
        <div className={styles.detailCard} >
          <div

            className={styles.detailCardImg} >
            {/* {event.image} */}
            <img
              initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .2
                  }
                },
              }}
              src=
              {event.img}
            // "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
               />
            {/* <p className='topic'>
{event.name}
</p> */}
            {/* <div
              initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .3
                  }
                },
              }}
              className={styles.topic}>

              {event.name}

            </div> */}
          </div>
          <div className={styles.detailCardBox} >

            <button
                initial="hidden" animate="visible" variants={{
                  hidden: {
                    scale: .8,
                    opacity: 0
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: .3
                    }
                  },
                }}
            
            className={styles.openBtn} onClick={() => setOpen(true)}>
              QOUTE
            </button>
            <div className={styles.descriptionBox}
              initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .4
                  }
                },
              }}
            >

              <div

                className={styles.description}>
                METADATA:
              </div>

              <div style={{ marginTop: 20 }}>
                {/* {event.description} */}
                

              </div>
            </div>
           

          </div>
        </div>

      </div>



    </div>
  )
}
