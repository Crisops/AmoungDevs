import React, {useEffect} from 'react';
import "./css/sectionPlus.css"
import logo from "./img/image2.png"
import ButtonsNav from "../ButtonsNav/ButtonsNav"

const SectionPlus = () => {

 useEffect(() => {
  function efecto(){
    let animacionImagen = document.getElementById('animadoImg')
    let animacionTitle = document.getElementById('animadoTitleNav')
    let animacionDes = document.getElementById('animadoDesNav')
    let posicionObj1 = animacionImagen.getBoundingClientRect().top;
    let numero = Math.floor(posicionObj1);
    // console.log(numero);
    let sizePantalla = window.innerHeight;
    if(numero < sizePantalla){
      animacionImagen.style.animation = 'entradaLogoSection2 5s ease 1s forwards'
      animacionTitle.style.animation =  'entradaTituloSection2 5s ease 2s forwards'
      animacionDes.style.animation =  'entradaDescriptionSection2 5s ease 3s forwards'
    }
  }
  window.addEventListener('scroll', efecto)

  return () =>{
    window.removeEventListener('scroll',efecto)
  }

 }, [])

  




  return (
    <section className="containerInfoExtra">
      <div className="gridSection2">
        <div className="contentSection2Container">
          <div className="containerImagenSection2">
            <img className="logoImagenSection2" id="animadoImg"  src={logo} alt="Imagen2"></img>
          </div>
        </div>
        <div className="containerInfoSection2">
          <div className="infoSection2">
            <div className="titleInformation2" id="animadoTitleNav">
              <h1>Navegation</h1>
            </div>
            <div className="descriptionInformation2" id="animadoDesNav">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled</p>
            <ButtonsNav/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPlus;