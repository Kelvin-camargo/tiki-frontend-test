import '../../assets/styles/reset.scss'

import './index.scss'
function Carousel() {
  return (
    <>
      <div className='carousel'>
        <div className='carouselTitle'>CUIDADO, AO ROLAR PODE CONTER...</div>
        <img className="moreIcon" src="/assets/img/svg/icon-yellow(1).svg" alt="imagem do carrossel" /> 
        <img className="spoiler"src="/assets/img/svg/tittle1.svg" alt="titulo do carrossel" />
        <img className="arrowDownIcon"src="/assets/img/svg/arrow down.svg" alt="imagem do carrossel" />
        <div className='carouselText'>VOCÊ JA ESTAVA SABENDO?</div>
      </div>
    </>
  )
}

export default Carousel