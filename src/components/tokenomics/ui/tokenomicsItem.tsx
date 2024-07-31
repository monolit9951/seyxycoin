import { ReactNode } from 'react'
import Check from 'assets/icons/collateral.svg?react'

interface Props {
  children: ReactNode
}

const TokenomicsItem = ({ children }: Props) => {
  return (
    <li className='tokenomics__list-item'>
      <Check />
      <div>{children}</div>
    </li>
  )
}

export default TokenomicsItem
