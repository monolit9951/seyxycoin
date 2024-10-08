import Comics from 'components/comics'
import Footer from 'components/footer'
import Header from 'components/header'
import Roadmap from 'components/roadmap'
import Tokenomics from 'components/tokenomics'

import 'styles/index.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <main className='wrapper'>
        <Tokenomics />
        <Comics />
        <Roadmap />
      </main>

      <Footer />
    </div>
  )
}

export default App
