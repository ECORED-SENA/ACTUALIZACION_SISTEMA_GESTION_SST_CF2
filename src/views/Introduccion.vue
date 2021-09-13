<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4(data-aos="fade") Apreciado aprendiz, es usted bienvenido a este segundo momento de aprendizaje, que lo orientará en la identificación y reconocimiento de la normativa vigente relacionada con los aspectos a cumplir en el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), con el fin de prevenir enfermedades y accidentes de trabajo derivados de los riesgos a los que están expuestos los trabajadores como consecuencia del trabajo que desempeñan y de los efectos derivados de la pandemia.

    .BG01.p-4.mb-4(data-aos="fade-up")
      .row.justify-content-center
        .col-8.col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/intro/img01.jpg", alt="dinámica de los procesos productivos")
        .col-lg-8
          p.mb-4 Como es bien sabido, el desarrollo de la legislación en seguridad y salud en el trabajo es un proceso que se da de acuerdo con la dinámica de los procesos productivos, de los acontecimientos y cambios propios de los eventos nacionales y mundiales. Teniendo en cuenta la pandemia causada por el coronavirus SARS – CoV-2 (COVID 19), el Gobierno Nacional ha realizado convenios internacionales y ha generado legislación con el fin de cuidar el capital humano, la conservación de la vida, la mejora de las condiciones de salud y trabajo y por consiguiente la productividad, rentabilidad y economía del país.

          p.mb-0 Colombia es un Estado social de derecho, lo que implica que las relaciones laborales, comerciales y sociales están basadas en la legislación; por supuesto, la seguridad y la salud en el trabajo no son la excepción; es por ello que la base para la documentación, implementación y mejoramiento de los SG-SST son los requisitos legales. 
    
    p.mb-4 Como lo menciona la Ley 1562 de 2012, emitida por el Ministerio de Trabajo:
    
    .bloque-texto-f.color-acento-contenido.pt-4.px-5.mt-5.mb-4.rounded2(data-aos="fade")
      .bloque-texto-f__comillas
        i.fas.fa-quote-left.textBwhite
        i.fas.fa-quote-right.textBwhite
      p.bloque-texto-f__texto.p-4 “El Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST) consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua y que incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo”.

    p.mb-4 Este componente formativo contiene los módulos III y IV de la circular 063 del 07 de octubre del 2020, que da cumplimiento al artículo 16 de la Resolución 4927 del 2016 y al Decreto 1072 del 2015, con el objetivo de realizar una actualización certificada de 20 horas y por ende mantener vigente la certificación virtual del curso de 50 horas.

    .row.justify-content-center.mb-5
      .col-lg-10.BordMov
        .row.align-items-end.BG01.position-relative.rounded2
          .col-lg-4.d-none.d-lg-block(data-aos="flip-left")
            figure
              img.pt-4.px-4(src="@/assets/curso/intro/img02.svg", alt="dinámica de los procesos productivos")
          .col-lg-8.p-4(data-aos="fade-right")
            p.mb-4 #[strong Para recordar], el Sistema de Gestión de Seguridad y Salud en el Trabajo:
            ul.lista-ul--color
              li 
                i.lista-ul__vineta
                | Es responsabilidad y debe ser liderado por el empleador con la participación de los trabajadores y contratistas.
              li 
                i.lista-ul__vineta
                | Debe ser planificado e implementado de acuerdo con el ciclo PHVA.
              li 
                i.lista-ul__vineta
                | Debe ser diseñado e implementado por personal idóneo.
              li 
                i.lista-ul__vineta
                | Debe diseñarse de acuerdo con las características propias de la organización.

    p.mb-0(data-aos="fade") Para la elaboración de este componente, se abordaron varios autores conocidos en SG-SST, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos del marco normativo en seguridad y salud en el trabajo.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
