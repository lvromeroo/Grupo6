<template>
    <body>
    <principal />
    <div class="container">
      <br />
      <h2 align="center" style="color:rgb(34, 1, 95)">DISEÑA TU PC</h2>
      <br>
      <div class="row">
        <div class="col-md-6 well" style="padding: 0px 220px;">
          <div class="row">
            <div class="col-md-4 well">
              <h4 style="color:rgb(34, 1, 95);">USO: </h4>
            </div>
            <div class="col-md-6 well" style="padding: 3px 0px;">
              <b-form-select v-model="selected" :options="options" style="border:solid; border-width:1px; width: 200px;"></b-form-select>
            </div>
          </div>
        </div>

        <div class="col-md-6 well" style="padding: 0px 150px;">
          <div class="row">
            <div class="col-md-3 well">
              <h4 style="color:rgb(34, 1, 95);">GAMA: </h4>
            </div>
            <div class="col-md-6 well" style="padding: 3px 10px;">
              <b-form-select v-model="selected2" :options="options2" style="border:solid; border-width:1px; width: 200px;"></b-form-select>
            </div>
          </div>
        </div>
      </div>
      <br>

      <div style="padding: 0px 200px;">
        <table>
          <tbody>
            <tr>
              <th style="height: 30px; width: 250px; font-size: 20px;">Componente</th>
              <th style="width: 350px; font-size: 20px;">Articulos agregados</th>
              <th style="width: 350px; font-size: 20px;">Recomendaciones</th>
            </tr>
            <tr>
              <td style="height: 100px;">Tarjeta madre</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Procesador (CPU)</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Tarjetas de video(GPU)</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Memoria RAM</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Fuente de energia</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Almacenamiento</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
            <tr>
              <td style="height: 100px;">Refrigeracion</td>
              <td><a href="/componentes">Ver articulos</a></td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt 
                aspernatur alias, sapiente eos odit temporibus dolorum optio repellat 
                quisquam facilis?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>

      <div class="row">

        <div class="col-md-6 well" style="padding: 0px 0px 0px 220px;">
          <h4>Precio total: COP $0000</h4>
          <h4 style="padding: 0px 0px 0px 190px;">$00.00</h4>
        </div>
        <div class="col-md-3 well">
          <h4 style="padding: 5px 0px 0px 120px;">Guardar diseño</h4>
        </div>
        <div class="col-md-2 well" style="padding: 0px 0px 0px 0px;">
          <v-btn
            fab
            dark
            small>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>

      </div>
      <br>

      
    </div>
    <piepagina/>
  </body>
</template>

<style scoped>
  th, td {
    border: solid;
    border-width: 1px 1px;
    text-align: center;
    font-size: 18px;
  }
</style>

<script>
    import piepagina from '../components/pies.vue'
    import principal from '../components/cielo.vue'
  export default {
    name: 'InicioCompo',
      components: { 
          piepagina,
          principal
      },
    data() {
      return {
        
        selected: null,
        options: [
          { value: null, text: 'Seleccione una opcion' },
          { value: 'Juegos', text: 'Juegos' },
          { value: 'Trabajo/estudio', text: 'Trabajo/estudio' },
          { value: 'Edicion/programacion', text: 'Edicion/programacion' }
        ],
        selected2: null,
        options2: [
          { value: null, text: 'Seleccione una opcion' },
          { value: 'Alta', text: 'Alta' },
          { value: 'Media', text: 'Media' },
          { value: 'Baja', text: 'Baja' }
        ],
      };
    },
  };
</script>