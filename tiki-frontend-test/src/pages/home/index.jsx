import './index.css'
import Header from '../../components/header/index.jsx'
import Carousel from '../../components/carousel/index.jsx'
import From from '../../components/form/index.jsx'
function Home() {
  return (
    <>
      <div className="homePage">
        
        <Header />
        <Carousel/>
        <From/>
        
      </div>
    </>
  )
}

export default Home