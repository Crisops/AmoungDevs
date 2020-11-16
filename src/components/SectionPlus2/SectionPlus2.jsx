import React, { useEffect } from 'react';
import logo from "./img/imagen1.png"
import "./css/sectionPlus2.css"

const SectionPlus2 = () => {


  useEffect(() => {
    window.addEventListener('scroll', function(){

      let animacion = document.getElementById('animadoImgSectionPlus2');
      let animacionTitleGame = document.getElementById('animadoTitleGame');
      let animacionDesGame = document.getElementById('animadoDesGame');
      let sizeTamanoWindow = window.innerHeight;
      let topImage = animacion.getBoundingClientRect().bottom
      let numeroTopImage = Math.floor(topImage)
  
      if (numeroTopImage < sizeTamanoWindow) {
        animacion.style.animation = 'entradaImageSectionPlus2 5s ease 0s forwards';
        animacionTitleGame.style.animation = 'entradaTitleGame 5s ease 1s forwards';
        animacionDesGame.style.animation = 'entradaDesGame 5s ease 1s forwards';
      }
  
    })
  }, [])

  return (
    <section className="containerInfoExtra2Plus">
      <div className="gridSection2Plus">
        <div className="containerInfoSection2Plus">
          <div className="infoSection2Plus">
            <div className="titleInformation2Plus" id="animadoTitleGame">
              <h1>GAME</h1>
            </div>
            <div className="descriptionInformation2Plus" id="animadoDesGame">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled</p>
            </div>
          </div>
        </div>
        <div className="contentSection2ContainerPlus">
          <div className="containerImagenSection2Plus">
            <img className="logoImagenSection2Plus" id="animadoImgSectionPlus2"  src={logo} alt="Imagen2"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPlus2;