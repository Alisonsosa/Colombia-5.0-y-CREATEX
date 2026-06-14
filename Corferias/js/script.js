document.addEventListener('DOMContentLoaded', () => {

  const translations = {
    es: {
      "nav-about": "Sobre los Eventos",
      "nav-gallery": "Galería",
      "nav-reflection": "Reflexión",
      "hero-date-1": "Bogotá · Mayo 2026",
      "hero-date-2": "Bogotá · Mayo 2026",
      "hero-desc-tech": "Tecnología, gaming y soberanía digital. El evento tech más importante del país reunido en Corferias.",
      "hero-desc-moda": "Moda, textiles y creatividad colombiana. Desfiles, talleres y una agenda académica que inspira.",
      "btn-explore": "Explorar →",
      "hero-badge": "Dos mundos · Un viaje",
      "intro-eyebrow": "Mi experiencia",
      "intro-heading": "Dos eventos que<br>amplían la visión",
      "intro-p1": "En mayo de 2026 tuve la oportunidad de asistir a dos de los eventos académicos y creativos más importantes de Colombia: <strong>Colombia 5.0</strong>, la feria de tecnología e innovación digital del Ministerio de las TIC, y <strong>Createx</strong>, la feria de moda, textiles y diseño de Corferias.",
      "intro-p2": "Ambos eventos me mostraron algo que como estudiante de Análisis y Desarrollo de Software valoro profundamente: que la tecnología y la creatividad no son mundos separados — se potencian mutuamente y juntos definen la identidad cultural y digital de Colombia.",
      "fact-events": "Eventos",
      "fact-conferences": "Conferencias",
      "fact-attendees": "Asistentes",
      "fact-city": "Ciudad: Bogotá",
      "tech-eyebrow": "Evento 01 · Tecnología",
      "tech-sub": "Acceso, Soberanía y Productividad Digital",
      "tech-desc": "Organizado por el Ministerio de las TIC, Colombia 5.0 reunió a desarrolladores, gamers, emprendedores y estudiantes en torno a las tecnologías emergentes. La Zona Gammer, los hackathons y las conferencias académicas convirtieron el evento en un punto de encuentro entre la industria digital y la academia.",
      "card1-title": "Mejores decisiones, mejores experiencias, mejores juegos",
      "card1-text": "Andrés demostró que el UX design en imágenes, jerarquías y estructuras de diseño no es solo estética, sino una herramienta estratégica esencial para optimizar la usabilidad del producto digital.",
      "card2-title": "Experiencia Tech — Zona Gammer en vivo",
      "card2-text": "Un espacio inmersivo donde cientos de estudiantes y gamers experimentaron en vivo torneos de Fortnite y LoL. La zona dejó claro que el gaming colombiano tiene talento, público y estructura para competir a nivel latinoamericano.",
      "moda-eyebrow": "Evento 02 · Moda & Diseño",
      "moda-sub": "Entre Telas y Saberes — Agenda Académica y Desfiles",
      "moda-desc": "Createx es la feria de moda, textiles y diseño de Corferias Bogotá. Su propuesta académica \"Entre Telas y Saberes\" reunió a diseñadores, coloristas, artistas y educadores para reflexionar sobre el futuro de la industria creativa colombiana con énfasis en sostenibilidad y conocimiento.",
      "video-title": "Video · Createx 2026",
      "video-footer": "Escenario principal Createx 2026 · Corferias Bogotá",
      "card3-title": "Desfiles Createx — La moda colombiana en escena",
      "card3-text": "Los desfiles del escenario principal de Createx reunieron a cientos de personas en torno a colecciones que fusionan identidad colombiana, diseño sostenible y tendencias internacionales. Un recordatorio de que la moda es cultura materializada.",
      "gallery-eyebrow": "Registro fotográfico",
      "filter-all": "Todos",
      "filter-timeline": "Línea del tiempo",
      "cap-1": "Línea del tiempo Colombia 5.0",
      "cap-2": "Línea del tiempo Colombia 5.0",
      "cap-3": "Desfile Createx 2026",
      "cap-4": "Torneo Gaming en vivo",
      "cap-5": "Escenario principal Createx",
      "cap-6": "Conferencia Colombia 5.0",
      "ref-eyebrow": "Lo que me llevo",
      "ref-quote": "\"Asistir a Colombia 5.0 y Createx me enseñó que tecnología y creatividad son el mismo idioma, escrito en distintos alfabetos.\"",
      "ref-p1": "Como estudiante de ADSO en el SENA, estos eventos conﬁrmaron algo que intuía: el software que construimos impacta culturas, comunidades e industrias reales. El color que elige Sara Viloria para una colección tiene las mismas reglas semióticas que el color que yo elijo para un botón de conﬁrmación en una app.",
      "ref-p2": "Andrés Pisso y la Zona Gammer me mostraron que el diseño de experiencias no es un proceso separado del desarrollo — es parte esencial de él. Y la conferencia de IA me recordó que el código que escribimos tiene consecuencias humanas reales.",
      "rc-1": "El diseño centrado en el usuario transforma la industria: mejores decisiones = mejores experiencias.",
      "rc-t2": "Color como Lenguaje",
      "rc-2": "El color no es decoración: es semiótica, historia y comunicación visual con reglas propias.",
      "rc-3": "La IA generativa amplifica al desarrollador consciente. La responsabilidad ética no es opcional.",
      "rc-t4": "Moda Sostenible",
      "rc-4": "Createx mostró que innovar en textiles y en software comparte el mismo principio: menos desperdicio, más valor.",
      "rc-t5": "Colombia Crea",
      "rc-5": "Estos dos eventos juntos demuestran que Colombia tiene la creatividad, el talento y la voluntad para deﬁnir su propia identidad digital y cultural. Ser parte de esa conversación es un privilegio.",
      "footer-text": "Documentación académica · SENA ADSO · Bogotá 2026",
      "footer-sub": "Hecho con atención e inspiración 🇨🇴"
    },
    en: {
      "nav-about": "About the Events",
      "nav-gallery": "Gallery",
      "nav-reflection": "Reflection",
      "hero-date-1": "Bogota · May 2026",
      "hero-date-2": "Bogota · May 2026",
      "hero-desc-tech": "Technology, gaming, and digital sovereignty. The most important tech event in the country gathered at Corferias.",
      "hero-desc-moda": "Fashion, textiles, and Colombian creativity. Runways, workshops, and an inspiring academic agenda.",
      "btn-explore": "Explore →",
      "hero-badge": "Two Worlds · One Journey",
      "intro-eyebrow": "My Experience",
      "intro-heading": "Two Events That<br>Broaden the Vision",
      "intro-p1": "In May 2026, I had the opportunity to attend two of the most important academic and creative events in Colombia: <strong>Colombia 5.0</strong>, the digital innovation and technology fair by the Ministry of ICT, and <strong>Createx</strong>, Corferias' fashion, textile, and design fair.",
      "intro-p2": "Both events showed me something that I deeply value as a Software Analysis and Development student: technology and creativity are not separate worlds — they enhance each other and together define Colombia's cultural and digital identity.",
      "fact-events": "Events",
      "fact-conferences": "Conferences",
      "fact-attendees": "Attendees",
      "fact-city": "City: Bogota",
      "tech-eyebrow": "Event 01 · Technology",
      "tech-sub": "Access, Sovereignty, and Digital Productivity",
      "tech-desc": "Organized by the Ministry of ICT, Colombia 5.0 brought together developers, gamers, entrepreneurs, and students around emerging technologies. The Gamer Zone, hackathons, and academic lectures turned the event into a meeting point between the digital industry and academia.",
      "card1-title": "Better Decisions, Better Experiences, Better Games",
      "card1-text": "Andrés demonstrated that UX design in images, hierarchies, and design structures is not just aesthetics, but an essential strategic tool to optimize digital product usability.",
      "card2-title": "Tech Experience — Live Gamer Zone",
      "card2-text": "An immersive space where hundreds of students and gamers experienced live Fortnite and LoL tournaments. The zone made it clear that Colombian gaming has the talent, audience, and structure to compete at a Latin American level.",
      "moda-eyebrow": "Event 02 · Fashion & Design",
      "moda-sub": "Between Fabrics and Knowledge — Academic Agenda and Runways",
      "moda-desc": "Createx is the fashion, textile, and design fair at Corferias Bogota. Its academic proposal \"Between Fabrics and Knowledge\" gathered designers, colorists, artists, and educators to reflect on the future of the Colombian creative industry with an emphasis on sustainability and knowledge.",
      "video-title": "Video · Createx 2026",
      "video-footer": "Main Stage Createx 2026 · Corferias Bogota",
      "card3-title": "Createx Runways — Colombian Fashion on Stage",
      "card3-text": "The runways on the main stage of Createx brought hundreds of people together around collections blending Colombian identity, sustainable design, and international trends. A reminder that fashion is materialized culture.",
      "gallery-eyebrow": "Photo Record",
      "filter-all": "All",
      "filter-timeline": "Timeline",
      "cap-1": "Colombia 5.0 Timeline",
      "cap-2": "Colombia 5.0 Timeline",
      "cap-3": "Createx 2026 Runway",
      "cap-4": "Live Gaming Tournament",
      "cap-5": "Main Stage Createx",
      "cap-6": "Colombia 5.0 Conference",
      "ref-eyebrow": "My Takeaways",
      "ref-quote": "\"Attending Colombia 5.0 and Createx taught me that technology and creativity are the same language, written in different alphabets.\"",
      "ref-p1": "As an ADSO student at SENA, these events confirmed something I suspected: the software we build impacts real cultures, communities, and industries. The color Sara Viloria chooses for a collection follows the same semiotic rules as the color I choose for a confirmation button in an app.",
      "ref-p2": "Andrés Pisso and the Gamer Zone showed me that experience design is not a separate process from development — it is an essential part of it. And the AI lecture reminded me that the code we write has real human consequences.",
      "rc-1": "User-centered design transforms the industry: better decisions = better experiences.",
      "rc-t2": "Color as a Language",
      "rc-2": "Color is not decoration: it is semiotics, history, and visual communication with its own rules.",
      "rc-3": "Generative AI amplifies the conscious developer. Ethical responsibility is not optional.",
      "rc-t4": "Sustainable Fashion",
      "rc-4": "Createx showed that innovating in textiles and in software shares the same principle: less waste, more value.",
      "rc-t5": "Colombia Creates",
      "rc-5": "These two events together prove that Colombia has the creativity, talent, and will to define its own digital and cultural identity. Being part of that conversation is a privilege.",
      "footer-text": "Academic Documentation · SENA ADSO · Bogota 2026",
      "footer-sub": "Made with attention and inspiration 🇨🇴"
    }
  };

  let currentLang = 'es';
  const langToggle = document.getElementById('langToggle');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'es' ? 'en' : 'es';
      langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';

      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
          element.innerHTML = translations[currentLang][key];
        }
      });
    });
  }

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if(navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }


  const reveals = document.querySelectorAll('.reveal');
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add('in'); 
        revObs.unobserve(e.target); 
      } 
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => revObs.observe(el));

  const gfilters = document.querySelectorAll('.gfilter');
  const gitems   = document.querySelectorAll('.g-item');

  gfilters.forEach(btn => {
    btn.addEventListener('click', () => {
      gfilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const f = btn.dataset.f;
      gitems.forEach(item => {
        const show = f === 'all' || item.dataset.f === f;
        
        item.style.transition = 'opacity .3s, transform .3s';
        item.style.opacity = show ? '1' : '0';
        item.style.transform = show ? '' : 'scale(.95)';
        item.style.pointerEvents = show ? '' : 'none';
        
        setTimeout(() => { 
          item.style.display = show ? '' : 'none'; 
        }, show ? 0 : 300);
        
        if (show) {
          setTimeout(() => { 
            item.style.opacity = '1'; 
            item.style.transform = ''; 
          }, 10);
        }
      });
    });
  });

  const modal      = document.getElementById('imgModal');
  const modalImg   = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const imgElement = item.querySelector('img');
      if (imgElement) {
        modalImg.src = imgElement.src;
        modalImg.alt = imgElement.alt;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});