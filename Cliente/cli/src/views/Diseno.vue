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
              <td style="height: 100px;"><b>TARJETA MADRE</b></td>
              <td>
                <div class="row" v-for="(item, index) in mother" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">

                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'mother', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>

                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de tarjeta madre para un computador de gama {{selected2}}
                usado para {{selected}}
              </td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>PROCESADOR (CPU)</b></td>
              <td>
                <div class="row" v-for="(item, index) in procesador" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'procesador', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de procesador para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>TARJETAS DE VIDEO (GPU)</b></td>
              <td>
                <div class="row" v-for="(item, index) in video" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'video', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de tarjeta de video para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>MEMORIA RAM</b></td>
              <td>
                <div class="row" v-for="(item, index) in ram" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'ram', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de memoria RAM para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>FUENTE DE ENERGIA</b></td>
              <td>
                <div class="row" v-for="(item, index) in f_energia" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'f_energia', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de fuente de energia para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>ALMACENAMIENTO</b></td>
              <td>
                <div class="row" v-for="(item, index) in almacenamiento" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'almacenamiento', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de dispositivo de almacenamiento para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>REFRIGERACION</b></td>
              <td>
                <div class="row" v-for="(item, index) in refrigeracion" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'refrigeracion', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
                </div>
                <a href="/componentes">Ver articulos</a>
              </td>
              <td style="text-align: justify; padding: 5px 30px 0px 30px; vertical-align:text-top;">Recomendacion de disipador para un computador de gama {{selected2}}
                usado para {{selected}}</td>
            </tr>
            <tr>
              <td style="height: 100px;"><b>CASE</b></td>
              <td>
                <div class="row" v-for="(item, index) in tipo_case" :key="index" style="text-align:left; padding: 5px 0px 0px 30px;">
                  <div class="col-md-9 well">
                    <p><b>{{item[0].nombreComercial}}</b><br>Precio: COP$ {{item[0].precioCop}}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$ {{item[0].preciodolar}}</p>
                  </div>
                  <div class="col-md-2 well" style="padding: 20px 0px 0px 0px;">
                    <v-btn
                      fab
                      dark
                      small style="background-color: red;"
                      @click="Eliminar_de_diseno([item[1], index, 'tipo_case', item[0].precioCop, item[0].preciodolar]);">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </div>
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
            small style="background-color: #20eb09;"
            @click="Guardar_diseno();">
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
        usuario_carrito: {},
        j: 0,
        acceso: ''


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
                  this.mother.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'procesador'){
                  this.procesador.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'video'){
                  this.video.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'ram'){
                  this.ram.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'f_energia'){
                  this.f_energia.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'almacenamiento'){
                  this.almacenamiento.push([res.data, this.j]);
                }
                else if (this.carrito[this.j][1] == 'refrigeracion'){
                  this.refrigeracion.push([res.data, this.j]);
                }
                else {
                  this.tipo_case.push([res.data, this.j]);
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

            this.axios.get('/usuario_logueado/6164e6084a6ebed9718c6003')

            .then(res=>{

                console.log(res.data)
                let name = res.data.usuario;

                this.axios.get(`/user/${name}`)
                .then(res=>{
                    console.log(res.data)
                    this.acceso = res.data._id;
                    this.usuario_carrito = res.data;
                    this.carrito = res.data.diseno;
                    this.VerCarrito();

                })
                .catch(e=>{

                    console.log(e.response);

                })

            })
            .catch(e=>{

                console.log(e.response);

            })
            

        },
        Eliminar_de_diseno (indice) {

            this.$swal({
                title: '¿Estas seguro de que quieres eliminar el articulo?',
                type: 'warning',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, Borrar',
                cancelButtonText: 'Cancelar',
                showCloseButton: true,
                showLoaderOnConfirm: true
            })

            .then(async(result)=>{
                if(result.value) {

                  this.preciocop -= indice[3];
                  this.preciodolar -= indice[4];

                  this.usuario_carrito.diseno.splice(indice[0], 1);
                  
                  if (indice[2] === 'mother') {
                    this.mother.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'procesador') {
                    this.procesador.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'video') {
                    this.video.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'ram') {
                    this.ram.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'f_energia') {
                    this.f_energia.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'almacenamiento') {
                    this.almacenamiento.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'refrigeracion') {
                    this.refrigeracion.splice(indice[1], 1);
                  }
                  else if(indice[2] === 'tipo_case') {
                    this.tipo_case.splice(indice[1], 1);
                  }

                  for (let i=0; i < this.mother.length; i++){
                    if (this.mother[i][1] > indice[0]){
                      this.mother[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.procesador.length; i++){
                    if (this.procesador[i][1] > indice[0]){
                      this.procesador[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.video.length; i++){
                    if (this.video[i][1] > indice[0]){
                      this.video[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.ram.length; i++){
                    if (this.ram[i][1] > indice[0]){
                      this.ram[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.f_energia.length; i++){
                    if (this.f_energia[i][1] > indice[0]){
                      this.f_energia[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.almacenamiento.length; i++){
                    if (this.almacenamiento[i][1] > indice[0]){
                      this.almacenamiento[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.refrigeracion.length; i++){
                    if (this.refrigeracion[i][1] > indice[0]){
                      this.refrigeracion[i][1] -= 1;
                    }
                  }
                  for (let i=0; i < this.tipo_case.length; i++){
                    if (this.tipo_case[i][1] > indice[0]){
                      this.tipo_case[i][1] -= 1;
                    }
                  }
                  

                }

            this.axios.put(`/user/${this.acceso}`, this.usuario_carrito)
                .then(res => {

                    this.usuario_carrito.username = res.data.username;
                    this.usuario_carrito.carrito = res.data.carrito;
                    this.usuario_carrito.diseno = res.data.diseno;
                    this.usuario_carrito.password = res.data.password;

                })
                .catch(e => {

                    console.log(e.response)
                })

            })


        },

        Guardar_diseno() {

            for (let i=0; i < this.mother.length; i++){

              this.usuario_carrito.carrito.push([this.mother[i][0]._id, "mother"]);
              
            }
            for (let i=0; i < this.procesador.length; i++){

              this.usuario_carrito.carrito.push([this.procesador[i][0]._id, "procesador"]);
              
            }
            for (let i=0; i < this.video.length; i++){

              this.usuario_carrito.carrito.push([this.video[i][0]._id, "video"]);
              
            }
            for (let i=0; i < this.ram.length; i++){

              this.usuario_carrito.carrito.push([this.ram[i][0]._id, "ram"]);
              
            }
            for (let i=0; i < this.f_energia.length; i++){

              this.usuario_carrito.carrito.push([this.f_energia[i][0]._id, "f_energia"]);
              
            }
            for (let i=0; i < this.almacenamiento.length; i++){

              this.usuario_carrito.carrito.push([this.almacenamiento[i][0]._id, "almacenamiento"]);
              
            }
            for (let i=0; i < this.refrigeracion.length; i++){

              this.usuario_carrito.carrito.push([this.refrigeracion[i][0]._id, "refrigeracion"]);
              
            }
            for (let i=0; i < this.tipo_case.length; i++){

              this.usuario_carrito.carrito.push([this.tipo_case[i][0]._id, "case"]);
              
            }

            this.usuario_carrito.diseno = [];
            this.mother = [];
            this.procesador = [];
            this.video = [];
            this.ram = [];
            this.f_energia = [];
            this.almacenamiento = [];
            this.refrigeracion = [];
            this.tipo_case = [];
            this.preciocop = 0;
            this.preciodolar = 0;

            this.axios.put(`/user/${this.acceso}`, this.usuario_carrito)
                .then(res => {

                    this.usuario_carrito.username = res.data.username;
                    this.usuario_carrito.carrito = res.data.carrito;
                    this.usuario_carrito.diseno = res.data.diseno;
                    this.usuario_carrito.password = res.data.password;

                    this.$swal({icon:'success', title:'Diseño guardado con exito'})

                })
                .catch(e => {

                    console.log(e.response)
                })

        }

    },
  };
</script>
