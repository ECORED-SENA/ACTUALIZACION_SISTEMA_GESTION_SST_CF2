export default {
  global: {
    componenteFormativo:
      'Actualización del marco normativo en seguridad y salud en el trabajo',
    descripcionCurso:
      'Se hará una revisión de la normativa vigente en el Sistema de Gestión de Seguridad y Salud en el Trabajo, la actualización de la matriz de requisitos legales de las empresas de acuerdo con la actividad económica y los peligros identificados, adicional a una revisión de las responsabilidades en el Sistema General de Riesgos Laborales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Actualización del marco normativo en seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Análisis de la evolución técnica de los sistemas de gestión en seguridad y salud en el trabajo',
            hash: 't1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Análisis de los cambios en la normativa internacional en Seguridad y Salud en el Trabajo',
            hash: 't1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actualización legal y jurisprudencia en riesgos laborales',
            hash: 't1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'La Comunidad Andina y los sistemas de gestión de seguridad y salud en el trabajo',
            hash: 't1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Actualización matriz legal en los sistemas de gestión de seguridad y salud en el trabajo',
            hash: 't1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Responsabilidades en el Sistema General de Riesgos laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Responsabilidades en el Sistema de Gestión de Seguridad y Salud en el Trabajo',
            hash: 't2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Responsabilidad laboral en el Sistema General de Riesgos Laborales',
            hash: 't2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Responsabilidad civil en el Sistema General de Riesgos Laborales',
            hash: 't2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Responsabilidad penal en el Sistema General de Riesgos Laborales',
            hash: 't2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Responsabilidad administrativa en el Sistema General de Riesgos Laborales',
            hash: 't2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo:
              'Régimen de sanciones en el Sistema General de Riesgos Laborales',
            hash: 't2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Circular 0041 de 2020. [Ministerio del Trabajo]. Lineamientos respecto del trabajo en casa. Junio 2 de 2020.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/60876961/Circular+0041-2020.PDF/98d19065-352d-33d2-978e-9e9069374144?t=1591222484807',
    },
    {
      referencia:
        'Circular 0071 de 2020. [Ministerio del Trabajo]. Cumplimiento al Parágrafo 2 del artículo 28 de la Resolución 312 de 2019 mediante la cual se definen planes de mejora conforme al resultado de la autoevaluación de los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/60876961/circular+0071.pdf/f7f84d25-fcb2-e957-d9ce-cb4c87e84be3?t=1606771091887.',
    },
    {
      referencia:
        'Decreto 488 de 2020. [Ministerio del Trabajo]. Por el cual se dictan medidas de orden laboral, dentro del Estado de Emergencia Económica, Social y Ecológica. Marzo 27 de 2020. ',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20488%20DEL%2027%20DE%20MARZO%20DE%202020.pdf',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Decreto 500 de 2020. [Ministerio del Trabajo]. Por el cual se adoptan medidas de orden laboral, relativas a la destinación de los recursos de las cotizaciones a las Administradoras de Riesgos Laborales de carácter público, en el marco del Estado de Emergencia Económica, Social y Ecológica. Marzo 31 de 2020',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20488%20DEL%2027%20DE%20MARZO%20DE%202020.pdf',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Decreto 676 de 2020. [Ministerio del Trabajo]. Por el cual se incorpora una enfermedad directa a la tabla de enfermedades laborales y se dictan otras disposiciones. Mayo 19 de 2020.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/DECRETO%20676%20DEL%2019%20DE%20MAYO%20DE%202020.pdf',
    },
    {
      referencia:
        'IESS [Instituto Ecuatoriano de Seguridad Social]. (2005). Decisión 584. Instrumento Andino de Seguridad y Salud en el Trabajo. OISS.',
      link: 'https://oiss.org/wp-content/uploads/2018/12/decision584.pdf',
    },
    {
      referencia:
        'Ley 610 de 2013. Por la cual se regulan algunos aspectos sobre las inspecciones del trabajo y los acuerdos de formalización laboral. Enero 2 de 2013. DO. Nº 48.661.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=51147',
    },
    {
      referencia:
        'Ley 2015 de 2020. Por medio de la cual se crea la historia clínica electrónica interoperable y se dictan otras disposiciones. Enero 31 de 2020.',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%202015%20DEL%2031%20DE%20ENERO%20DE%202020.pdf',
    },
    {
      referencia:
        'Resolución 957 de 2005. [Comunidad Andina]. Reglamento del Instrumento Andino de Seguridad y Salud en el Trabajo. Septiembre 23 de 2005.',
      link:
        'http://intranet.comunidadandina.org/documentos/Gacetas/gace1245.pdf',
    },
    {
      referencia:
        'Resolución 4927 de 2016. [Ministerio del Trabajo]. Por la cual se establecen los parámetros y requisitos para desarrollar, certificar y registrar la capacitación virtual en el Sistema de Gestión de la Seguridad y Salud en el Trabajo. Noviembre 23 de 2016.',
      link: 'https://safetya.co/normatividad/resolucion-4927-de-2016/',
    },
    {
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.',
      link: 'https://safetya.co/normatividad/resolucion-0312-de-2019/',
    },
    {
      referencia:
        'Resolución 2404 de 2019. [Ministerio del Trabajo]. Por la cual se adopta la batería de instrumentos para la evaluación de factores de riesgo psicosocial, la guía técnica general para la promoción, prevención e intervención de los factores psicosociales y sus efectos en la población trabajadora y sus protocolos específicos y se dictan otras disposiciones. Julio 22 de 2019.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+2404+de+2019-+Adopcion+bateria+riesgo+psicosocial%2C+guia+y+protocolos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo PHVA',
      significado:
        'Procedimiento lógico y por etapas que permite el mejoramiento continuo a través de los pasos Planear, Hacer, Verificar y Actuar.',
    },
    {
      termino: 'Dolo',
      significado:
        'La conducta de realizar cualquier hecho constitutivo de infracción penal de forma intencional. (Código Penal colombiano).',
    },
    {
      termino: 'Estructura',
      significado:
        'Conjunto de relaciones que establecen las partes en organización y orden respecto de un todo. Sistema coherente de conceptos que definen un objeto.',
    },
    {
      termino: 'Gestión',
      significado:
        'Actividad administrativa que busca mejorar los procesos de una organización para ver los resultados en la productividad y la competitividad de la misma.',
    },
    {
      termino: 'Legal',
      significado:
        'Relativo a la ley, lo que está conforme a ella, como término opuesto a ilegal, que es lo que no se adecúa a la norma jurídica.',
    },
    {
      termino: 'Matriz',
      significado:
        'Una matriz es una colección ordenada de elementos colocados en filas y columnas.',
    },
    {
      termino: 'Matriz legal',
      significado:
        'Compilación de requisitos normativos exigibles a la empresa, de acuerdo con las actividades propias e inherentes de su actividad productiva, los cuales dan los lineamientos normativos y técnicos para desarrollar el Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST), el cual deberá actualizarse en la medida que sean emitidas nuevas disposiciones aplicables.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Proceso recurrente de optimización al Sistema de Gestión de la Seguridad y Salud en el Trabajo, para lograr mejoras en el desempeño dentro de este campo, de forma coherente con la política de Seguridad y Salud en el Trabajo (SST) de la organización.',
    },
    {
      termino: 'Organización',
      significado:
        'Una organización es un sistema diseñado para alcanzar ciertas metas y objetivos. Estos sistemas pueden, a su vez, estar conformados por otros subsistemas relacionados que cumplen funciones específicas. En otras palabras, una organización es un grupo social formado por personas, tareas y administración, que interactúan en el marco de una estructura sistemática para cumplir con sus objetivos.',
    },
    {
      termino: 'Proceso',
      significado:
        'Un proceso es una secuencia de pasos dispuesta con algún tipo de lógica que se enfoca en lograr algún resultado específico.',
    },
    {
      termino: 'Salud',
      significado:
        'La salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Protección ante la carencia de peligros externos que afecten negativamente la calidad de vida.',
    },
    {
      termino: 'Seguridad y Salud en el Trabajo',
      significado:
        'La Seguridad y Salud en el Trabajo (SST) es la disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores.',
    },
    {
      termino: 'Sistema',
      significado:
        'Es un conjunto de partes o elementos organizados y relacionados que interactúan entre sí para lograr un objetivo. Los sistemas reciben entradas y proveen salidas.',
    },
    {
      termino: 'Sistema de Gestión de la Seguridad y Salud en el Trabajo',
      significado:
        'Consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua; incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo.',
    },
  ],
  complementario: [
    {
      texto:
        'Estándares mínimos SG-SST. Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.”',
      tipo: 'Página web',
      link: 'https://safetya.co/normatividad/resolucion-0312-de-2019/      ',
    },
    {
      texto:
        'Actualización de la capacitación virtual del SG-SST. Circular 0063 de 2020. [Ministerio del Trabajo]. Actualización de la capacitación virtual de carácter gratuito en el SG-SST conforme a la Resolución 4927 de 2016. Octubre 7 de 2020.',
      tipo: 'Página web',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/Circular+0063.PDF/d49fb52c-62db-c2eb-a7bf-7709afbf185f?t=1602107562154',
    },
    {
      texto:
        'Se definen planes de mejora conforme al resultado de la autoevaluación del SG-SST. Circular 0071 de 2020. [Ministerio del Trabajo]. Cumplimiento al Parágrafo 2 del artículo 28 de la Resolución 312 de 2019 mediante la cual se definen los planes de mejora conforme al resultado de la autoevaluación de los estándares mínimos del SG-SST. Noviembre 30 de 2020.',
      tipo: 'Página web',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/60876961/circular+0071.pdf/f7f84d25-fcb2-e957-d9ce-cb4c87e84be3?t=1606771091887',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
