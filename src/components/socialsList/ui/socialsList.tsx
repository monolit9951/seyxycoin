import DexScreener from 'assets/icons/dexscreener.svg?react'
import Telegram from 'assets/icons/telegram.svg?react'
import Twitter from 'assets/icons/x-twitter.svg?react'

import './socialsList.scss'

const SocialsList = () => {
  return (
    <ul className='socials'>
      <li>
        <a
          href='https://dexscreener.com/solana/mh2ted7h29ez4ytxpvgzysbwhfqtpqbt2mvy6kduwsh'
          aria-label='Dexscreener.com'>
          <DexScreener />
        </a>
      </li>
      <li>
        <a href='https://x.com/Sexy_doge_meme' aria-label='X.com'>
          <Twitter />
        </a>
      </li>
      <li>
        <a href='https://t.me/+Olop6TDLkSgyZDY6' aria-label='Telegram.me'>
          <Telegram />
        </a>
      </li>
    </ul>
  )
}

export default SocialsList
