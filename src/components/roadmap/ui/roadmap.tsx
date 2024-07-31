import usualDesc from 'assets/images/buff-dog-desc@1x.webp'
import retinaDesc from 'assets/images/buff-dog-desc@2x.webp'
import usualMob from 'assets/images/buff-dog-mob@1x.webp'
import retinaMob from 'assets/images/buff-dog-mob@2x.webp'

import { SectionTitle } from 'components/sectionTitle'

import RoadmapCard from './roadmapCard'

import './roadmap.scss'

const Roadmap = () => {
  return (
    <section className='roadmap' id='roadmap'>
      <SectionTitle title='Roadmap' />
      <ul className='roadmap__list'>
        <RoadmapCard
          title='Born'
          text='Launch of a token, development of a family of holders and a Twitter'
        />
        <RoadmapCard
          title='Nfts generator'
          text='Development of an NFT generator for the project’s media exposure'
        />
        <RoadmapCard
          title='Growth'
          text='Project development marketing and connection with KOLs'
        />
        <RoadmapCard
          title='Cex listings'
          text='Listing on top exchange and partnerships with the best MMs'
        />
      </ul>
      <img
        srcSet={`${usualMob} 375w, ${retinaMob} 375w 2x, ${usualDesc} 1440w, ${retinaDesc} 1440w 2x`}
        alt='Big dog'
        className='roadmap__image'
      />
    </section>
  )
}

export default Roadmap
