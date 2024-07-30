import Comics from 'components/comics'
import Footer from 'components/footer'
import Header from 'components/header'
import Hero from 'components/hero'
import Roadmap from 'components/roadmap'
import Tokenomics from 'components/tokenomics'

const App = () => {
  return (
    <div className='layout layout__wrapper'>
      <Header />

      <main className='layout__content'>
        <Hero />
        <Tokenomics />
        <Comics />
        <Roadmap />
      </main>

      <Footer />
    </div>
  )
}

export default App
