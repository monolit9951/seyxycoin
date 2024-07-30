import { SocialsList } from 'components/socialsList'

import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <h1 className='footer__title'>SEXYDOG</h1>
      <ul className='footer__nav-list'>
        <li>
          <a href='https://raydium.io/swap/?inputMint=sol&outputMint=CATTzAwLyADd2ekzVjTjX8tVUBYfrozdkJBkutJggdB7'>
            BUY
          </a>
        </li>
        <li>
          <a href='#roadmap'>Roadmap</a>
        </li>
        <li>
          <a href='#tokenomics'>Tokenomics</a>
        </li>
        <li>
          <a href='https://www.dextools.io/app/en/solana/pair-explorer/mh2TEd7H29EZ4YTXPvgzysBWHFqtPQbT2MVy6kDUwSh?t=1721652181824'>
            Chart
          </a>
        </li>
      </ul>
      <SocialsList />
      <p className='footer__rights'>2024 All rights reserved</p>
    </footer>
  )
}

export default Footer
