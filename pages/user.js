import Link from 'next/link'
import React from 'react'
import styles from '../styles/user.module.css'

export default function demo() {
  return (
    <div>
        <div className={styles.landingpage}>
  <div className={styles.navbar}>
    <a className={styles.navlogo}>insured.ZKP</a>
    <button className={styles.hamburger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>
    <div className={styles.navlinkwrap}>
      <span className={styles.navlink}>
        
      <Link href="/">
                      <a className="mr-6 text-blue-800">
                          
                      </a>
                  </Link>
      </span>
      <span className={styles.navlink}>
      <Link href="/create-item">
                      <a className="mr-6 text-blue-800">
                        
                      </a>
                  </Link>
      </span>
      <span className={styles.navlink}>
        
      <Link href="/my-assets">
                      <a className="mr-6 text-blue-800">
                      
                      </a>
                  </Link>
      </span>
      <span className={styles.navlink}>
      
        
      </span>
    </div>
    {/* <div className={styles.buttonwrap}>
      <button className={styles.createbtn}>CREATE</button>
      <button className={styles.createbtn}>SIGN IN</button>
    </div> */}
  </div>
  <div className={styles.box}>
    <div className={styles.infobox}>
      <p className={styles.infoboxboldtext}>
        Welcome to our simplified NFT insurance portal!
      </p>
      <p className={styles.infoboxslimtext}>
        {/* In aenean posuere lorem risus nec. Tempor tincidunt aenean purus purus vestibulum nibh mi venenatis */}
      </p>
     
    </div>
    <div className={styles.display}>
      {/* <img className={styles.displaynft} src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="unsplash-OG44d93i-NJk" border="0"/>
      <div className={styles.infowrapper}>
        <div className={styles.info}>
          <img className={styles.infoimg} src="https://images.unsplash.com/photo-1535207010348-71e47296838a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" alt="unsplash-OG44d93i-NJk" border="0"/>
          <div>
            <p>Laura</p>
            <p>0.21 Weth</p>
          </div>
  </div>
        <div className={styles.info2}>
          <p>WE ARE HERE</p>
          <div className={styles.iconwrapper}>
            <svg width="22" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.7365 2C3.6575 2 1.5 3.8804 1.5 6.5135c0 3.1074 2.3236 5.9603 4.8612 8.1207 1.2458 1.0606 2.4954 1.9137 3.4352 2.5022.4692.2937.8593.5203 1.1305.6727L11 17.85l.0731-.0409a27.984 27.984 0 0 0 1.1304-.6727c.9399-.5885 2.1895-1.4416 3.4353-2.5022C18.1764 12.4738 20.5 9.6209 20.5 6.5135 20.5 3.8805 18.3425 2 16.2635 2c-2.1054 0-3.8008 1.389-4.552 3.6426a.75.75 0 0 1-1.423 0C9.5373 3.389 7.8418 2 5.7365 2ZM11 18.7027l.3426.6672a.7502.7502 0 0 1-.6852 0L11 18.7027ZM0 6.5135C0 3.052 2.829.5 5.7365.5 8.0298.5 9.8808 1.7262 11 3.6048 12.1192 1.7262 13.9702.5 16.2635.5 19.171.5 22 3.052 22 6.5135c0 3.8183-2.8014 7.06-5.3888 9.2628-1.3167 1.121-2.6296 2.0166-3.6116 2.6314-.4918.308-.9025.5467-1.1918.7092a19.142 19.142 0 0 1-.4301.2347l-.0248.013-.007.0036-.0021.0011c-.0003.0001-.0012.0006-.3438-.6666-.3426.6672-.3424.6673-.3426.6672l-.0033-.0017-.007-.0036-.0248-.013a19.142 19.142 0 0 1-.4301-.2347 29.324 29.324 0 0 1-1.1918-.7092c-.982-.6148-2.295-1.5104-3.6116-2.6314C2.8014 13.5735 0 10.3318 0 6.5135Z" fill="#E0E0E0"/>
  </svg>
            25
          </div>
        </div>
      </div> */}
      <img src='./user.png' alt=''/>
    </div>
  </div>
  <div className={styles.auction}>
    <div className={styles.title}>
      <p className={styles.titlebold}>Approved</p>
      <p className={styles.titleslim}>View all</p>
    </div>
    <div className={styles.nft}>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://pbs.twimg.com/media/FEtXu55WUAI9xZU.jpg:large" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://render.fineartamerica.com/images/rendered/medium/print/8/7/break/images-medium-5/total-knee-replacement-x-rays-zephyr.jpg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://www.charliewaterslaw.com/wp-content/uploads/2020/06/secondImg4.jpg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://www.centreforsight.net/cfs/images/blog-img/smile-eye-surgery.jpg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
    </div>

    <div className={styles.title}>
      <p className={styles.titlebold}>New Requests</p>
      <p className={styles.titleslim}>View all</p>
    </div>
    <div className={styles.nft}>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2364021.jpeg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://www.altimadental.com/wp-content/uploads/2019/03/When-is-Dental-Surgery-Required.jpg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://images.myupchar.com/10746/original/bariatric-surgery-procedure-purpose-results-cost-price-in-hindi.png" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
      <div className={styles.item}>
        <img className={styles.itemimg} src="https://www.dryvrao.com/userfiles/Ear-Correction-Surgery-in-hyderabad.jpg" border="0"/>
        <div className={styles.itemtitle}>
          <p>Lorem Ipsum</p>
          <p>1.20 Weth</p>
        </div>
        
      </div>
    </div>
   
  </div>



</div>
    </div>
  )
}
