<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1
        i Responsabilidades en el Sistema General de Riesgos Laborales
    
    figure.mb-4
      img(src="@/assets/curso/tema2/img01.jpg", alt="marco normativo")
    
    p.mb-4 La responsabilidad es un valor ético relacionado con la capacidad de responder por las obligaciones, en este caso, de seguridad y salud en el trabajo. La responsabilidad está relacionada con el cumplimiento de las normas de seguridad, con el cuidado de uno mismo, de los otros, de las materias primas, de los bienes y productos a cargo del empleador y de cada trabajador en el marco de las relaciones laborales.
    p.mb-4 Las responsabilidades en el Sistema General de Riesgos Laborales están basadas en un modelo tripartita, donde:

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
