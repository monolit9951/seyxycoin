import X from 'assets/icons/X.svg?react'
import belt from 'assets/images/belt.jpg'
import bones from 'assets/images/bones.jpg'
import bowl from 'assets/images/bowl.jpg'
import usualDesc from 'assets/images/catdog-desc@1x.webp'
import retinaDesc from 'assets/images/catdog-desc@2x.webp'
import usualMob from 'assets/images/catdog-mob@1x.webp'
import retinaMob from 'assets/images/catdog-mob@2x.webp'

import { SectionTitle } from 'components/sectionTitle'

import TokenomicsItem from './tokenomicsItem'

import './tokenomics.scss'

const Tokenomics = () => {
  return (
    <section className='tokenomics' id='tokenomics'>
      <SectionTitle title='Tokenomics' />
      <div className='tokenomics__content'>
        <div className='tokenomics__first-block'>
          <h3>
            Tokenomics <X />
          </h3>
          <ul className='tokenomics__list'>
            <TokenomicsItem>
              <p>0 Taxes</p>
              <img src={belt} alt='belt' />
            </TokenomicsItem>
            <TokenomicsItem>
              <p>LP burned</p>
              <img src={bones} alt='bones' />
            </TokenomicsItem>
            <TokenomicsItem>
              <p>100B supply</p>
              <img src={bowl} alt='bowl' />
            </TokenomicsItem>
          </ul>
        </div>
        <div className='tokenomics__second-block'>
          <div className='tokenomics__liquidity'>
            <p>
              <span>100%</span> Liquidity
            </p>
          </div>
          <img
            srcSet={`${usualMob} 375w, ${retinaMob} 375w 2x, ${usualDesc} 1440w, ${retinaDesc} 1440w 2x`}
            alt='Catdog'
            className='tokenomics__liquidity__image'
          />
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
