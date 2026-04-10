// ========================================
// DATOS DE PROYECTOS
// ========================================
const projectsData = {
  'ar-dog-trainer': {
    title: 'Trufosos - Entrenador de perros',
    category: 'AR',
    description: `Aplicación de realidad aumentada para Android que permite a los usuarios visualizar 
    y aprender técnicas de entrenamiento canino de manera interactiva. Los usuarios pueden observar un catálogo 
    diferentes razas de perros, por medio de la cámara de su dispositivo móvil al contar con los marcadores descargables
    seleccionar uno de ellos e iniciar un pequeño juego de tres niveles como guía del paso a paso del entrenamiento, 
    con ello aprender los diferentes escenarios que se enfrentarán con un perro real.
    
    La aplicación cuenta con comandos básicos como "sentado" y "dame la pata". Cada truco incluye instrucciones paso
    a paso para que el usuario pueda entrenar a su mascota real.`,
    tools: [
      { name: 'Unity', icon: '🎮' },
      { name: 'Vuforia', icon: '📱' },
      { name: 'C#', icon: '💻' },
      { name: '3ds Max', icon: '🎨' },
    ],
    features: [
      'Visualización de múltiples razas de perros',
      'Visualización en realidad aumentada',
      'Biblioteca de trucos "Sentado" y "Dar la pata"',
      'Instrucciones paso a paso',
      'Interfaz intuitiva y amigable',
      'Detección de marcadores',
      "Detección de voz al dar el comando de entrenamiento"
    ],
    implementation: `El proyecto fue desarrollado en Unity y con la ayuda de un asset se implemento el reconocimiento de voz.
    Los modelos 3D de los perros fueron adquiridos en internet, y el perro seleccionable fue modificado y animado en 3ds Max. 
    Se implementó un sistema de detección de marcadores para posicionar los modelos en el mundo real.`,
    links: {
      demo: '#',
      github: 'https://github.com/marlene-Mar/ProyectoRA.git'
    },
    media: [
      { type: 'image', src: 'images/vistaRA.jpeg', text: 'Vista principal AR' },
      { type: 'image', src: 'images/trucos.jpeg', text: 'Selección de trucos' },
      { type: 'image', src: 'images/instrucciones.jpeg', text: 'Intrucciones' },
      { type: 'image', placeholder: '📋', text: 'Vídeo' }
    ]
  },
  'sweet-fight': {
    title: 'Sweet Fight',
    category: 'Videojuego',
    description: `Sweet Fight es un videojuego de acción con una estética colorida y temática de dulces. 
    Los jugadores controlan personajes inspirados en postres y golosinas mientras luchan en escenarios 
    fantásticos llenos de color y diversión.
    
    El juego combina mecánicas de combate accesibles con un estilo visual único que atrae tanto a 
    jugadores casuales como a fans de los juegos de peleas.`,
    tools: [
      { name: 'Unity', icon: '🎮' },
      { name: 'Blender', icon: '🎨' },
      { name: 'C#', icon: '💻' },
      { name: 'Photoshop', icon: '🖌️' },
      { name: 'Substance Painter', icon: '🎭' }
    ],
    features: [
      'Personajes originales temáticos',
      'Sistema de combate fluido',
      'Múltiples escenarios coloridos',
      'Efectos visuales estilizados',
      'Modo historia y versus',
      'Banda sonora original'
    ],
    implementation: `Desarrollado en Unity con un pipeline de arte personalizado para lograr el estilo 
    visual distintivo. Los personajes fueron modelados en Blender con un estilo low-poly estilizado 
    y texturizados en Substance Painter. El sistema de combate fue diseñado para ser accesible 
    pero con profundidad suficiente para jugadores experimentados.`,
    links: {
      demo: '#',
      github: '#'
    },
    media: [
      { type: 'image', placeholder: '🍬', text: 'Gameplay' },
      { type: 'image', placeholder: '🧁', text: 'Personajes' },
      { type: 'image', placeholder: '🍭', text: 'Escenarios' }
    ]
  },
  'computacion-grafica': {
    title: 'Recorrido Virtual',
    category: 'Computación Gráfica',
    description: `Recorrido virtual de un hotel, enfocado en aplicar los conocimientos adquiridos de la 
    materia "Computación Gráfica", tales como: texturizado, iluminación, shaders, modelado 3D y animación 
    por keyframes.`,
    
    tools: [
      { name: 'OpenGL', icon: '🔷' },
      { name: 'GLSL', icon: '✨' },
      { name: 'C++', icon: '💻' },
      { name: '3ds Max', icon: '🖌️' },
    ],
    features: [
      'Shaders personalizados GLSL',
      'Documentación técnica completa',
      'Manual de usuario'
    ],
    implementation: `El proyecto fue implementado desde cero utilizando OpenGL. Se desarrolló un pipeline 
    de renderizado completo incluyendo vertex y fragment shaders. Modelado 3D de algunos elementos del hotel,
    así como el texturizado de los modelos en 3ds Max.`,
    links: {
      demo: '#',
      github: 'https://github.com/marlene-Mar/ProyectoGrafica.git'
    },
    media: [
      { type: 'image', placeholder: '💎', text: 'Escena renderizada'},
      { type: 'image', placeholder: '🌟', text: 'Efectos de luz' },
      { type: 'image', placeholder: '🔮', text: 'Shaders' }
    ]
  }
};

// ========================================
// ELEMENTOS DEL DOM
// ========================================
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-progress');

// ========================================
// HEADER SCROLL EFFECT
// ========================================
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ========================================
// MOBILE MENU
// ========================================
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
  });
});

// ========================================
// ACTIVE NAV LINK ON SCROLL
// ========================================
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// PROJECT MODAL
// ========================================
function openModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  // Update modal content
  document.getElementById('modalCategory').textContent = project.category;
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalImplementation').textContent = project.implementation;
  
  // Update tools
  const toolsContainer = document.getElementById('modalTools');
  toolsContainer.innerHTML = project.tools.map(tool => `
    <div class="tool-badge">
      <span class="tool-badge-icon">${tool.icon}</span>
      <span>${tool.name}</span>
    </div>
  `).join('');
  
  // Update features
  const featuresContainer = document.getElementById('modalFeatures');
  featuresContainer.innerHTML = project.features.map(feature => `
    <li>${feature}</li>
  `).join('');
  
// Update media
  const mediaContainer = document.getElementById('modalMedia');
  const getMediaHTML = (item) => {
    if (item.type === 'video') {
      return `<video src="${item.url || item.src}" controls class="media-content"></video>`;
    } else if (item.url || item.src) {
      return `<img src="${item.url || item.src}" alt="${item.text}" class="media-content">`;
    } else {
      // Si no hay URL, mostramos el placeholder anterior
      return `
        <div class="media-placeholder">
          <span class="media-placeholder-icon">${item.placeholder}</span>
          <span>${item.text}</span>
        </div>`;
    }
  };

  mediaContainer.innerHTML = `
    <div class="media-main">
      ${getMediaHTML(project.media[0])}
    </div>
    <div class="media-thumbnails">
      ${project.media.map((item, index) => `
        <div class="media-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
          ${(item.url || item.src) 
            ? `<img src="${item.url || item.src}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;">${item.placeholder}</div>`
          }
        </div>
      `).join('')}
    </div>
  `;
  
// Add thumbnail click handlers (Actualizado para cambiar imágenes reales)
  const thumbnails = mediaContainer.querySelectorAll('.media-thumb');
  const mainMedia = mediaContainer.querySelector('.media-main');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index);
      const mediaItem = project.media[index];
      
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      
      mainMedia.innerHTML = getMediaHTML(mediaItem);
    });
  });
  
  // Update links
  const linksContainer = document.getElementById('modalLinks');
  linksContainer.innerHTML = `
    <a href="${project.links.demo}" class="modal-link primary" target="_blank">
      <span>Ver Demo</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </a>
    <a href="${project.links.github}" class="modal-link secondary" target="_blank">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <span>Ver Código</span>
    </a>
  `;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Project card click handlers
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.dataset.project;
    openModal(projectId);
  });
});

// Close modal handlers
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ========================================
// SKILL BARS ANIMATION
// ========================================
function animateSkillBars() {
  skillBars.forEach(bar => {
    const progress = bar.dataset.progress;
    const rect = bar.getBoundingClientRect();
    
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = `${progress}%`;
    }
  });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// ========================================
// CONTACT FORM
// ========================================
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Aquí puedes agregar la lógica para enviar el formulario
  console.log('Form submitted:', data);
  
  // Mostrar mensaje de éxito
  const submitBtn = contactForm.querySelector('.btn-submit');
  const originalText = submitBtn.innerHTML;
  
  submitBtn.innerHTML = '<span>Mensaje Enviado!</span> <span class="btn-icon">✓</span>';
  submitBtn.style.background = 'linear-gradient(135deg, var(--mint-medium), var(--mint-accent))';
  
  setTimeout(() => {
    submitBtn.innerHTML = originalText;
    submitBtn.style.background = '';
    contactForm.reset();
  }, 3000);
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.project-card, .highlight-card, .skill-item, .tool-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ========================================
// INITIALIZE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial active nav check
  updateActiveNav();
  
  // Initial skill bars check
  animateSkillBars();
});


lucide.createIcons();