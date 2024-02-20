import React from 'react'
import { serviceCardData, heroBannerData, data } from '../../data'
import { ServiceCard } from '../../components/cards/service-card'
import { partsData } from '../../data'
import "./home.scss"
import { Parts } from '../../components/cards/parts-card/parts'
import btn from "/public/added_slider.svg"
import { Link } from 'react-router-dom'
import { TabHeader } from '../../layout/header/components/tabHeader/tabHeader'
import { Added } from '../../components/added/added'
export const Home = () => {
  return (
    <div>
      
      <div className='container tabHeader__container'>
        <TabHeader />
      </div>
      <section className='container hero__container'>
        <div className="hero__wrapper">
          <h2 className='hero__title'>
            Кўп ўқилаётганлар
          </h2>
          <div className='hero__banner'>
            <div className='hero__list'>
              {heroBannerData.map((item) =>
                <Link to={`/added/${item.id}/heroBannerData`} className='hero__item' data-aos="flip-left" key={item.id}>
                  <img className='hero__img' src={item.img} alt="img" />
                  <p className='hero__text'> {item.name}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="hero__card">
          <h3 className='card__title'>Китоб ўқишни ёқтирасизми?</h3>
          <p className='card__text'>
            Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
          </p>
          <button className='card__btn'>
            Обуна бўлиш
          </button>
        </div>
      </section>
      <section className='service'>
        <div className="container service__container">
          {serviceCardData.map((item) =>
          (<Link key={item.id} >
            <ServiceCard key={item.id} {...item} />
          </Link>)
          )}
        </div>
      </section>
      <section className='parts'>
        <div className="parts__container container">
          <h2 className='parts__title'>Рукнлар</h2>
          <div className="parts__wrapper">
            {partsData.map((item) =>
              <Parts key={item.id} img={item.img} name={item.name} />
            )}
          </div>
        </div>
      </section>
      <section className='added'>
        <div className="added__container container">
          <div className="added__box">
            <h2 className='added__title'>Янги қўшилганлар</h2>
            <img src={btn} alt="img" />
          </div>
          <div className="added__block">
            {data.addedData.map((item) =>
              <Link data-aos="fade-left" data-aos-duration="1000" data-aos-delay={item.duration} to={`/added/${item.id}/addedData`} key={item.id}>
                <Added name={item.name} img={item.img} text={item.text} />
              </Link>
            )}
          </div>
        </div>
      </section>
      <section className='audio'>
        <div className="container audio__container">
          <div className="added__box">
            <h2 className='added__title'>
              Аудио китоблар
            </h2>
            <img src={btn} alt="img" />
          </div>
          <div className="added__block">
            {data.audioData.map((item) =>
              <Link data-aos="fade-right" data-aos-duration="1000" data-aos-delay={item.duration} to={`/added/${item.id}/audioData`} key={item.id}>
                <Added name={item.name} img={item.img} text={item.text} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
