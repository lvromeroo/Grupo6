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
              <td>
                <div v-for="(item, index) in mother" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de tarjeta madre para un computador de gama {{selected2}}
                usado para {{selected}}
              </td>
            </tr>
            <tr>
              <td style="height: 100px;">Procesador (CPU)</td>
              <td>
                <div v-for="(item, index) in procesador" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de procesador para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Tarjetas de video(GPU)</td>
              <td>
                <div v-for="(item, index) in video" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de tarjeta de video para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Memoria RAM</td>
              <td>
                <div v-for="(item, index) in ram" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de memoria RAM para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Fuente de energia</td>
              <td>
                <div v-for="(item, index) in f_energia" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de fuente de energia para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Almacenamiento</td>
              <td>
                <div v-for="(item, index) in almacenamiento" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de dispositivo de almacenamiento para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Refrigeracion</td>
              <td>
                <div v-for="(item, index) in refrigeracion" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de disipador para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;">Case</td>
              <td>
                <div v-for="(item, index) in tipo_case" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <p>{{item.nombreComercial}}<br>Precio: COP$ {{item.precioCop}}<br>$ {{item.preciodolar}}</p>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de chasis para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br>

      <div class="row">

        <div class="col-md-6 well" style="padding: 0px 0px 0px 220px;">
          <h4>Precio total: COP ${{preciocop}}</h4>
          <h4 style="padding: 0px 0px 0px 190px;">${{preciodolar.toFixed(2)}}</h4>
        </div>
        <div class="col-md-3 well">
          <h4 style="padding: 5px 0px 0px 120px;">Guardar diseño</h4>
        </div>
        <div class="col-md-2 well" style="padding: 0px 0px 0px 0px;">
          <v-btn
            fab
            dark
            small style="background-color: blue;">
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
        carrito:[],
        mother: [],
        procesador: [],
        video: [],
        ram: [],
        f_energia: [],
        almacenamiento: [],
        refrigeracion: [],
        tipo_case: [],
        preciocop: 0,
        preciodolar: 0,
        j: 0


      };
    },
    created () {

        this.ObtenerUsuario();

    },
    methods: {

        VerCarrito() {

            const i = this.carrito.length;

            this.axios.get('/' + this.carrito[this.j][1] + '/' + this.carrito[this.j][0])

            .then(res=>{

                this.preciocop += res.data.precioCop;
                this.preciodolar += res.data.preciodolar;

                if (this.carrito[this.j][1] == 'mother'){
                  this.mother.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'procesador'){
                  this.procesador.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'video'){
                  this.video.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'ram'){
                  this.ram.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'f_energia'){
                  this.f_energia.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'almacenamiento'){
                  this.almacenamiento.push(res.data);
                }
                else if (this.carrito[this.j][1] == 'refrigeracion'){
                  this.refrigeracion.push(res.data);
                }
                else {
                  this.tipo_case.push(res.data);
                }


                if (this.j < i){
                    this.j++;
                    this.VerCarrito();

                }
                console.log(res.data);

            })
            .catch(e=>{

                console.log(e.response);

            })
            

        },

        ObtenerUsuario() {

            this.axios.get('/user')
            .then(res=>{

                console.log(res.data)
                this.carrito = res.data[0].diseno;
                this.VerCarrito();

            })
            .catch(e=>{

                console.log(e.response);

            })

        }

    },
  };
</script>
