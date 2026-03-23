// gitprofile.config.ts
// ✅ CONFIGURACIÓN FINAL PARA ManuelDJAH
// ✅ Repo: gitprofile
// ✅ URL: https://ManuelDJAH.github.io/gitprofile
// 
// ESTE ARCHIVO ESTÁ LISTO PARA COPIAR Y PEGAR
// Solo personaliza las secciones marcadas con 👈

const CONFIG = {
  // ========================================
  // 🎯 CONFIGURACIÓN BÁSICA - ✅ LISTA
  // ========================================
  
  github: {
    username: 'ManuelDJAH', // ✅ Configurado
  },

  // ✅ CONFIGURADO CORRECTAMENTE PARA TU REPO "gitprofile"
  base: '/gitprofile/',

  // ========================================
  // 📊 PROYECTOS DE GITHUB
  // ========================================
  
  projects: {
    github: {
      display: true,
      header: 'Mis Proyectos',
      mode: 'automatic',
      
      automatic: {
        sortBy: 'stars', // Tus repos con más estrellas primero
        limit: 8, // Muestra 8 proyectos
        exclude: {
          forks: false, // Cambia a true si NO quieres mostrar repos forkeados
          projects: [], // Repos a excluir: ['ManuelDJAH/repo-que-no-quieres-mostrar']
        },
      },
      
      // Si prefieres elegir manualmente qué proyectos mostrar, descomenta:
      // manual: {
      //   projects: [
      //     'ManuelDJAH/proyecto-estrella-1',
      //     'ManuelDJAH/proyecto-estrella-2',
      //     'ManuelDJAH/proyecto-estrella-3',
      //   ],
      // },
    },
    
    external: {
      header: 'Otros Proyectos',
      projects: [
        // Si tienes proyectos fuera de GitHub, agrégalos aquí:
        // {
        //   title: 'Mi Proyecto Freelance',
        //   description: 'Aplicación web desarrollada con React y Node.js. Incluye autenticación, dashboard administrativo y API REST.',
        //   imageUrl: 'https://via.placeholder.com/500x300', // URL de screenshot
        //   link: 'https://proyecto-demo.com',
        // },
      ],
    },
  },

  // ========================================
  // 💼 EXPERIENCIA LABORAL - 👈 PERSONALIZAR
  // ========================================
  
  experiences: [
    {
      company: 'Freelance', // 👈 CAMBIAR
      position: 'GFX / VFX', // 👈 CAMBIAR (ej: "Full Stack Developer")
      from: '2019', // 👈 CAMBIAR (formato: "Mes Año")
      to: 'Presente',
      companyLink: '', // 👈 CAMBIAR o dejar vacío: ''
    },
    // Agrega más experiencias si las tienes:
    // {
    //   company: 'Empresa Anterior',
    //   position: 'Desarrollador Junior',
    //   from: 'Junio 2021',
    //   to: 'Diciembre 2022',
    //   companyLink: 'https://empresa.com',
    // },
  ],

  // ========================================
  // 🎓 EDUCACIÓN - 👈 PERSONALIZAR
  // ========================================
  
  educations: [
    {
      institution: 'Universidad de Sonora', // 👈 CAMBIAR
      degree: 'Ingeniería en sistemas de la informacion', // 👈 CAMBIAR
      from: '2023', // 👈 CAMBIAR
      to: 'Actualidad', // 👈 CAMBIAR
    },
    // Educación adicional:
    // {
    //   institution: 'Bachillerato/Preparatoria',
    //   degree: 'Bachillerato General',
    //   from: '2015',
    //   to: '2018',
    // },
  ],

  // ========================================
  // 🏆 CERTIFICACIONES - 👈 AGREGAR SI TIENES
  // ========================================
  
  certifications: [
    // Si tienes certificaciones, descomenta y personaliza:
    // {
    //   name: 'AWS Certified Solutions Architect',
    //   body: 'Amazon Web Services',
    //   year: 'Marzo 2024',
    //   link: 'https://aws.amazon.com/verification/XXXXX',
    // },
    // {
    //   name: 'Professional Scrum Master I',
    //   body: 'Scrum.org',
    //   year: 'Enero 2024',
    //   link: 'https://scrum.org/certificates/XXXXX',
    // },
  ],

  // ========================================
  // 💻 HABILIDADES - 👈 PERSONALIZAR
  // ========================================
  
  skills: [
    // 👇 Elimina las que NO uses, agrega las que SÍ domines
    
    // Frontend
    'HTML',
    'CSS',
    
    // Backend
    'Python',
    'C#',
    
    
    // Bases de datos
    'SQLServer',
    
    // DevOps & Tools
    
    // Otros
    'Adobe Photoshop',
    'Adobe premiere',
    'Sony Vegas pro'
  ],

  // ========================================
  // 🔗 REDES SOCIALES - 👈 PERSONALIZAR
  // ========================================
  
  social: {
    linkedin: '', // 👈 Solo tu username: 'manuel-djah'
    x: '', // Twitter/X username (sin @)
    behance: 'https://www.behance.net/zcrownx',
    discord: '',
    telegram: '',
    website: '', // Tu sitio personal (URL completo)
    phone: '6623279985', // Tu número
    email: 'mdj2005@hotmail.com', // 👈 IMPORTANTE: Tu email profesional
  },

  // ========================================
  // 📄 CURRÍCULUM - 👈 OPCIONAL
  // ========================================
  
  resume: {
    fileUrl: '', // URL directa a tu CV en PDF
    
    // Para subir a Google Drive:
    // 1. Sube tu CV.pdf a Google Drive
    // 2. Click derecho → Compartir → "Cualquiera con el enlace puede ver"
    // 3. Copia el enlace que se ve así:
    //    https://drive.google.com/file/d/ABC123XYZ/view?usp=sharing
    // 4. Transfórmalo a:
    //    https://drive.google.com/uc?export=download&id=ABC123XYZ
    // 5. Pega ese enlace transformado arriba
  },

  // ========================================
  // 📝 BLOG - 👈 SI TIENES BLOG
  // ========================================
  
  // Si escribes en Medium o Dev.to, descomenta y configura:
  // blog: {
  //   source: 'dev', // 'medium' o 'dev'
  //   username: 'tu-username',
  //   limit: 5,
  // },

  // ========================================
  // 📚 PUBLICACIONES - 👈 SI TIENES
  // ========================================
  
  // Si tienes publicaciones académicas/científicas:
  // publications: [
  //   {
  //     title: 'Título de tu Paper',
  //     conferenceName: 'Nombre de la Conferencia',
  //     journalName: '', // O nombre del journal
  //     authors: 'Manuel DJ, Otro Autor',
  //     link: 'https://doi.org/xxxxx',
  //     description: 'Breve descripción del trabajo',
  //   },
  // ],

  // ========================================
  // 🔍 SEO - 👈 PERSONALIZAR
  // ========================================
  
  seo: {
    title: 'Manuel', // 👈 CAMBIAR (ej: "Manuel DJ - Full Stack Developer")
    description: 'Estudiante de Ingeniería en Sistemas con interés en el desarrollo de software y soluciones tecnológicas. Cuento con experiencia en proyectos académicos utilizando lenguajes de programación y bases de datos, además de experiencia freelance en diseño gráfico y edición de video, lo que me ha permitido desarrollar habilidades creativas, de comunicación y resolución de problemas.', // 👈 PERSONALIZAR
    imageURL: '', // Opcional: URL de imagen para preview en redes sociales
  },

  // ========================================
  // 🎨 TEMA
  // ========================================
  
  themeConfig: {
    defaultTheme: 'night', // Tu tema inicial
    
    // Otros temas populares para probar:
    // 'dracula' - Oscuro moderno
    // 'synthwave' - Retro futurista  
    // 'corporate' - Profesional
    // 'cyberpunk' - Tech vibrante
    // 'luxury' - Elegante
    // 'dark' - Oscuro simple
    // 'light' - Claro simple

    disableSwitch: false, // true = oculta el selector de temas
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    // Temas disponibles en el selector:
    themes: [
      'light',
      'dark',
      'nord',
      'dracula',
      'synthwave',
      'cyberpunk',
      'corporate',
      'luxury',
      'business',
      'night',
    ],
  },

  // ========================================
  // 📊 ANALYTICS - 👈 OPCIONAL
  // ========================================
  
  googleAnalytics: {
    id: '', // Tu ID de Google Analytics (ej: 'G-ABC123XYZ')
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  // ========================================
  // ⚙️ CONFIGURACIÓN FINAL
  // ========================================
  
  enablePWA: true,

  footer: `Hecho con <a 
      class="text-primary" 
      href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> y ❤️`,
};

export default CONFIG;
