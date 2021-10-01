<template>
  <div class="container">
    <br />
    <h2 align="center" style="color:rgb(34, 1, 95)">DISEÑA TU PC</h2>
    <div class="row">
      <div class="col-md-6 well">
        <p>COlumna1</p>
      </div>

      <div class="col-md-6 well">
        <p>COlumna2</p>
      </div>
    </div>

    <div>
      <b-table bordered="true" :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["Componentes", "Articulos_agregados", "Recomendaciones"],
      items: [
        {
          Componentes: "Tarjetas madre",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Procesadores (CPU)",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Tarjetas de video(GPU)",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Memorias RAM",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Fuentes de energia",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Almacenamiento",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        {
          Componentes: "Refrigeracion",
          Articulos_agregados: "",
          Recomendaciones: "",
        },
        { Componentes: "Case", Articulos_agregados: "", Recomendaciones: "" },
      ],
    };
  },
};
</script>
