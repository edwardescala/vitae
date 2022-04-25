onload = () => {
  
  document.querySelector('nav').addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    history.pushState('','',e.target.name)
    renderComponent();
  }
})

renderComponent()
}
function getComponents() {
  const aboutMe = `<section class="profile" id="profile">
      <h1>Quien Soy</h1>
      <p>Ingeniero de Sistemas, nací en un pequeño pueblo de Guárico y recientemente me traslade hacia Valencia en vista de la falta de oportunidades en mi pueblo natal</p>
    </section>`;
    
  const contactHtml = `<section class="contact" id="contact">
      <h1>Contacto</h1>
      <p>Edward Escala</p>
      <p>21065878</p>
      <p>San Diego, Carabobo. Venezuela</p>
      <p>escalaedward2011@gmail.com</p>
      <p>0412-479-3577</p>`;
  
  const educacion = `<section>
      <h1>Educación</h1>
      <p>
        Universidad Nacional Experimental de la Fuerza Armada (UNEFA). <strong>2016 </strong>
      </p>
      <p class="titulo">
        Bachiller en Ciencias
      </p>
    </section>`;
  
  const exp = `<section>
      <h1>Experiencia</h1>
      <p>
        ENAVAL PDVSA Industrial. <strong>2015</strong>
      </p>
      <p class="titulo">Analista de Sistemas</p>
    </section>`;
    
  const know = `<section>
  <h1>Conocimientos</h1> <ul>
    <li class="">Cableado</li>
    <li class="">Programación</li>
    <li class="">Mantenimiento</li>
    <li>Bases de Datos</li>
  </ul></section>`;
    
  const idiomas = `<section>
      <h1>Idiomas</h1>
      <p>
         Español, Inglés (lectura, escritura)
      </p>
    </section>`;
    
  const home = `<section class="banner">
        <h1>Genere su Curriculum Facilmente</h1>
      </section><section class="crea">
      <p>Crea tu Síntesis de Forma Gratuita en Pocos Pasos</p>
      <button type="button">¡Empieza Ya!</button>
    </section>
    <footer>
      <address>
        <h6>Nuestas Redes</h6>
        <a href="#" class="material-icons-outlined">facebook</a>
        <a href="#" class="material-icons-outlined">whatsapp</a>
        <a href="#" class="material-icons-outlined">telegram</a>
        <span>Edward Escala</span>
        <p>Derechos Reservados 2022</p>
      </address>
    </footer>`;
      
    return {
      '/know': know,
      '/about': aboutMe,
      '/contact': contactHtml,
      '/education': educacion,
      '/exp': exp,
      '/idiomas': idiomas,
      '/index': home,
      '/': home
    }
}
function renderComponent() {

  const pathname = location.pathname;
  console.log(pathname)
  const replace = pathname.replace(/\.html$/,'')
  const component = getComponents()[replace];
  const cont = document.querySelector('.container');
  cont.innerHTML = component;
  
  console.log(replace)
}
