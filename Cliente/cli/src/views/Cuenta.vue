<template>
  <body>
    <principal />
    <!-- Administrador primera parte-->

    <div class="primera_parte_Ad">
      <!-- Parte izquierda -->
      <div class="ala_izqu_Ad">
        <!-- targeta de infrmacion -->

        <div class="contenr_ad">
          <div class="card" style="width: 15rem">
            <img
              class="card-img-top"
              src="../assets/Administradora.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">ADMINISTRADOR</h5>
              <p class="card-text">Cambiar contraseña</p>
              <button class="btn btn-primary" @click="cerrar()">Cerrar sesion</button>
            </div>
          </div>
        </div>

        <!-- cuadro despegable -->

        <div class="despegable">
          <div class="col-12">
            <b-button-group vertical style="color: white">
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'TARJETAS MADRE';
                  categoria = 'mother';
                  mostrarArticulos();
                  detalles = false;
                "
                >Tarjetas madre</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'PROCESADORES (CPU)';
                  categoria = 'procesador';
                  mostrarArticulos();
                  detalles = false;
                "
                >Procesadores (CPU)</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'TARJETAS DE VIDEO (GPU)';
                  categoria = 'video';
                  mostrarArticulos();
                  detalles = false;
                "
                >Tarjetas de video(GPU)</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'MEMORIAS RAM';
                  categoria = 'ram';
                  mostrarArticulos();
                  detalles = false;
                "
                >Memorias RAM</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'FUENTES DE ENERGIA';
                  categoria = 'f_energia';
                  mostrarArticulos();
                  detalles = false;
                "
                >Fuentes de energia</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'ALMACENAMIENTO';
                  categoria = 'almacenamiento';
                  mostrarArticulos();
                  detalles = false;
                "
                >Almacenamiento</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'REFRIGERACION';
                  categoria = 'refrigeracion';
                  mostrarArticulos();
                  detalles = false;
                "
                >Refrigeracion</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'CASE';
                  categoria = 'case';
                  mostrarArticulos();
                  detalles = false;
                "
                >Case</b-button
              >
            </b-button-group>
          </div>
        </div>

        <!-- ventana de visualizacion -->
        <div :bind="visu" v-if="visu" class="visua_conter">
          <div class="conn">
            <h2 align="center" style="color: rgb(34, 1, 95); font-size: 80px">ENIAC</h2>
          </div>
        </div>

        <!-- Modal -->

        <div v:blind="vent_md" class="vent_mod" v-if="vent_md">
          <div class="cont_form">
            <form>
              <div class="form-group">
                <label for="formFile" class="form-label">Imagen</label>
                <input class="form-control" type="file" id="formFile"/>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Imagen"
                  v-model="modificar.imagen"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >nombreTecnico</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Nombre de Fabrica"
                  v-model="modificar.nombreTecnico"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >nombreComercial</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Nombre mas conocido"
                  v-model="modificar.nombreComercial"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >marca</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Nombre de la Empresa"
                  v-model="modificar.marca"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >especificaciones</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Recordatorio "
                  v-model="modificar.especificaciones"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >precioCop</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Pesos Colombianos"
                  v-model="modificar.precioCop"
                />
              </div>
              <div class="form-group">
                <label for="formGroupExampleInput2" id="tex_fromgro"
                  >preciodolar</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Dolares Americanos"
                  v-model="modificar.preciodolar"
                />
              </div>
              <button
                type="button"
                class="btn btn-info"
                id="but_edit"
                @click.prevent=" editarArticulo();
                  vent_md = false; visu = true;
                "
              >
                editar
              </button>
              <button
                type="button"
                class="btn btn-info"
                id="but_cerr"
                @click.prevent="
                  vent_md = false; visu = true;
                "
              >
                Cerrar
              </button>
            </form>
          </div>
        </div>

      </div>

      <!-- Parte derecha-cuerpo -->
      <div class="ala_righ_Ad">
        <!-- titulo -->

        <div class="title_comp">
          <h2 align="center" style="color: rgb(34, 1, 95); font-size: 45px">
            {{ tituloCategoria }}
          </h2>
        </div>

        <!-- estructura de recuadros -->

        <div class="container_target">
          <div
            class="targ_Artic"
            v-for="(item, index) in articulos"
            :key="index"
          >
            <!-- imagen -->

            <div class="pictu">
              <img id="pict" :src='item.imagen' alt="" />
            </div>

            <!-- informacion cuerpo -->

            <div class="infor_cad_ad">
              <div class="header_cad">
                <div class="princ">
                  <h3
                    align="center"
                    style="color: rgb(34, 1, 95); font-size: 40px"
                  >
                    {{ item.nombreComercial }}
                  </h3>
                </div>
              </div>
              <div class="bod_inf">
                <div class="info_princ">
                  <p id="prec">precio: COP $ {{ item.precioCop }}</p>
                  <p id="dlor">$ {{ item.preciodolar }}</p>
                </div>
                <div class="opci_ad">
                  <div class="box_act">
                    <button
                      type="button"
                      class="btn btn-info"
                      @click.prevent=" obtenerid(item._id); vent_md = true; visu = false;"
                    >
                      Editar
                    </button>
                  </div>
                  <div class="box_del">
                    <button
                      id="but_save"
                      type="button"
                      class="btn btn-danger"
                      @click="eliminarArticulo(item._id)"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- opciones -->
          </div>
        </div>
        <div class="puntapie">
          <div class="but_pu">
            <button id="bot_punt" type="button" class="btn btn-light">
              <a href="/admIte" id="ruta">Agregar articulo</a>
            </button>
          </div>
        </div>
        <!-- objeto -->
        <div></div>
      </div>
    </div>

    <piepagina />
  </body>
</template>


<script>
import principal from "../components/cielo.vue";
import piepagina from "../components/pies.vue";
export default {
  name: "cuentas",
  components: {
    principal,
    piepagina,
  },
  data() {
    return {
      vent_md: false,
      categoria: "mother",
      tituloCategoria: "TARJETAS MADRE",
      articulos: [],
      modificar: {
        imagen:"",
        nombreTecnico: "",
        nombreComercial: "",
        marca: "",
        especificaciones: "",
        precioCop: "",
        preciodolar: "",
      },
      editar: "",
      visu: true,
      numer:"",
      
    };
  },
  methods: {
    mostrarArticulos() {
      if (!this.categoria == "mother") {
        var log = articulos.length();
        this.articulos.splice(log, 0);
      }
      this.axios.get("/" + this.categoria).then((res) => {
        console.log(res.data);
        this.articulos = res.data;
      });
      
    },
    editarArticulo(id) {
      this.$swal({icon:'success', title:'Exito', text:'Su edición fue un éxito, oprima la categoria para ver los cambios'})
      this.axios.put("/" + this.categoria + "/" + this.editar, this.modificar);
      this.modificar.imagen="";
      this.modificar.nombreTecnico= "";
      this.modificar.nombreComercial= "";
      this.modificar.marca= "";
      this.modificar.especificaciones= "";
      this.modificar.precioCop= "";
      this.modificar.preciodolar= "";
    },
    obtenerid(id){
      this.editar=id;
    },
    eliminarArticulo(id) {
      this.$swal({
        title: '¿Estas Seguro?',
        type: 'warning',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, Borrorlo!',
        cancelButtonText: 'No, Manterlo!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(async(result)=>{
        if(result.value){
          this.$swal.fire({icon:'success', title:'Exito', text:'refresca oprimiendo nuevamente la categoria para ver los cambios'});
          this.axios.delete("/" + this.categoria + "/" + id);
        }
      });
    },
    cerrar(){
      this.$swal({
        title: '¿Estas Seguro?',
        type: 'warning',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, estoy seguro',
        cancelButtonText: 'No, quiero quedarme',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(async(result)=>{
        if(result.value){
          this.$router.push('/');
        }
      });
    }
  },
  created() {
    this.mostrarArticulos();
  },
};
</script>


<style scoped>
body {
  min-height: 100vh;
  box-sizing: border-box;
}
/* <!-- Administrador primera parte--> */
.primera_parte_Ad {
  display: grid;
  grid-template-columns: 30% 70%;
  padding-bottom: 30px;
}
/*  <!-- Parte izquierda --> */
.ala_izqu_Ad {
  display: grid;
  grid-template-rows: 30% 30% 40%;
}
/*  <!-- targeta de infrmacion --> */
.contenr_ad {
  width: 100%;
  display: flex;
  align-items: center;
  height: 300px;
  display: block;
}
.card {
  margin: 0px 0px 0px 30px;
  text-align: center;
  width: 100%;
  display: block;
}
.despegable {
  width: 100%;
  display: block;
  padding-bottom: 0px;
  
}
.col-12 {
  padding-bottom: 120px;
  margin-bottom: 120px;
  margin-left: 30px;
  position: relative;
  left: 8%;
  top: 1%;
}
/* Modal */
.vent_mod {
  margin-bottom: 10px;
  margin-top: 20px;
  width: 100%;
}
#tex_fromgro {
  align-content: center;
}
#but_edit{
  margin: 15px;
  position: relative;
  left: 50%;
}
/* Ventana vista */
.visua_conter{
  display: grid;
  grid-auto-rows: auto;
  margin-left:8%;
}
.conn{
  width: 250px;
  height: 250px;
  display:grid;
  grid-template-rows:1fr 1fr 1fr;
}
/* <!-- Parte derecha-cuerpo --> */
.ala_righ_Ad {
  display: grid;
  grid-template-rows: 5% 90% 5%;
}
.container_target {
  margin: 0;
  padding: 0;
}
.form-group {
  margin-left: 30px;
  margin-right: 30px;
}
/* <!-- estructura de recuadros --> */
.targ_Artic {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 4px 55px 0px 0px;
  height: 150px;
}
/* <!-- imagen --> */
#pict {
  width: 150px;
  position: relative;
  left: 25%;
}
/* <!-- informacion cuerpo --> */
.infor_cad_ad {
  text-align: center;
  display: grid;
  grid-template-rows: 30% 70%;
}
.header_cad {
  margin-bottom: 5px;
}
.bod_inf {
  display: grid;
  grid-template-columns: 50% 50%;
}
.info_princ {
  display: grid;
  grid-template-rows: 50% 50%;
}
#prec {
  position: relative;
  top: 20px;
}
#dlor {
  width: 90px;
  position: relative;
  left: 154px;
}
.opci_ad {
  display: grid;
  grid-template-columns: 50% 50%;
}
.box_act {
  position: relative;
  width: 80px;
  height: 0px;
  top: 30px;
  left: 30px;
}
.box_del {
  position: relative;
  width: 80px;
  height: 0px;
  top: 30px;
  right: 10px;
}
#bot_punt{
  background-color:#a3b3ea;
}
.but_pu {
  width: 100px;
  position: relative;
  left: 650px;
}
#ruta {
  text-decoration-line: none;
}
</style>