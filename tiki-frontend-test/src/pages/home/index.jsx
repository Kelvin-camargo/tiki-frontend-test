import '../../assets/styles/reset.scss'
import './index.scss'
import Carousel from '../../components/Carousel/index.jsx';
import Register from '../../components/Register/index.jsx';



function Home() {
  return (
      <div className='homePage'>
          <img src="/assets/img/Background.jpg" alt="background" class="background-image"></img>
        <h1 className='title'>
            <img src="/assets/img/svg/logo-tiki.svg" alt="titulo da página" />
        </h1>
      
        <Carousel/>

        <div className='enrollment'>
          <img src="/assets/img/svg/tittle2.svg" alt="inscrição " />

          <img src="/assets/img/svg/icon-yellow.svg" />
        </div>


        <Register/>

        <footer className='footer'>

          <h2 className='footerTitle'>TEXTO LEGAL</h2>

          <p className='footerText1'>
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Duls dul odio, ullamcorper vel leo sed, lacinia aliquam tortor.
            Donec in nulla nisl. Integer imperdiet vulputate elit, sed varius sem commodo vel. Vestibulum ac lacus<br></br> 
            eros.Nulla facilisi. Morbi ornare, erat lobortis semper aliquet, ligula neque pulvinar tellus, a eleifend est ligula a nulla. 
            Ut ut sapien lacinia odio ullamcorper aliquet. Nullam ac neque lorem. Nulla id erat in massa hendrerit<br></br> consequat.
          </p>

          <p className='footerText2'>
            Nulla fringilla pretium pharetra. In lacinia vulputate lectus, ut commodo neque aliquam nec.
            Vestibulum vitae ante turpis. Donec quis aliquet elit, non dictum neque. Vivamus tempor neque sit amet ante auctor, et<br></br>
            rhoncus leo vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ac metus augue. Curabitur eget 
            tincidunt erat. Integer vitae feugiat dui, nec auctor nunc. Suspendisse interdum augue et ipsum<br></br>
            pharetra, vitae cursus erat tincidunt.
          </p>

          </footer>
      </div>
  )
}

export default Home