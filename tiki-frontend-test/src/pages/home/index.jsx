import '../../assets/styles/reset.scss'
import './index.scss'
import Header from '../../components/Header/index.jsx'
import Carousel from '../../components/Carousel/index.jsx'
import Register from '../../components/Register/index.jsx'



function Home() {
  return (
    <>
        <Header />
        <Carousel/>
        <Register/>

    </>
  )
}

export default Home