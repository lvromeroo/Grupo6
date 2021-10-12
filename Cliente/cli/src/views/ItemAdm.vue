<template>
  <body>
    <cielo />
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
              <button class="btn btn-"></button>
              <button class="btn btn-primary">Cerrar sesion</button>
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
                  detalles = false;
                "
                >Tarjetas madre</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'PROCESADORES (CPU)';
                  categoria = 'procesador';
                  detalles = false;
                "
                >Procesadores (CPU)</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'TARJETAS DE VIDEO (GPU)';
                  categoria = 'video';
                  detalles = false;
                "
                >Tarjetas de video(GPU)</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'MEMORIAS RAM';
                  categoria = 'ram';
                  detalles = false;
                "
                >Memorias RAM</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'FUENTES DE ENERGIA';
                  categoria = 'f_energia';
                  detalles = false;
                "
                >Fuentes de energia</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'ALMACENAMIENTO';
                  categoria = 'almacenamiento';
                  detalles = false;
                "
                >Almacenamiento</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'REFRIGERACION';
                  categoria = 'refrigeracion';
                  detalles = false;
                "
                >Refrigeracion</b-button
              >
              <b-button
                variant="primary"
                @click="
                  tituloCategoria = 'CASE';
                  categoria = 'case';
                  detalles = false;
                "
                >Case</b-button
              >
            </b-button-group>
          </div>
        </div>
      </div>

      <!-- parte derecha -->
      <div class="ala_righ_Ad">
        <div class="tile_righ">
          <h2 align="center" style="color: rgb(34, 1, 95); font-size: 45px">
            {{ tituloCategoria }}
          </h2>
        </div>
        <!-- contenedor -->
        <div class="structura">
          <!-- parte principal -->
          <div class="head">
            <div class="img_a">
              <img src="../assets/img-icon.jpg" alt="" width="100%" />
            </div>
            <div class="agredd">
              <div class="textIcon">
                <div class="mb-3">
                  <label for="formFile" class="form-label"
                    >Default file input example</label
                  >
                  <input
                    class="form-control-file"
                    type="file"
                    name="image"
                    ref="file"
                    id="formFile"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- cuerpo -->
          <div class="conta_ad">
            <div class="nomencl_ad">
              <p id="Tecnname">Nombre Tecnico:</p>
            </div>
            <div class="insera">
              <input
                class="form-control"
                type="text"
                placeholder="Tecnico:"
                aria-label="Nombre Tecnico"
                v-model="articulos.nombreTecnico"
              />
            </div>
            <div class="nomencl_ad">
              <p id="Tecnname">Nombre Comercial:</p>
            </div>
            <div class="insera">
              <input
                class="form-control"
                type="text"
                placeholder="Comercial:"
                aria-label="default input example"
                v-model="articulos.nombreComercial"
              />
            </div>
            <div class="nomencl_ad">
              <p id="Tecnname">Marca:</p>
            </div>
            <div class="insera">
              <input
                class="form-control"
                type="text"
                placeholder="Marca:"
                aria-label="default input example"
                v-model="articulos.marca"
              />
            </div>
            <div class="nomencl_ad">
              <p id="Tecnname">Especificaciones:</p>
            </div>
            <div class="insera">
              <div class="mb-3">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  v-model="articulos.especificaciones"
                  placeholder="Especificaciones"
                ></textarea>
              </div>
            </div>
            <div class="nomencl_ad">
              <p id="Tecnname">Precio en Cop:</p>
            </div>
            <div class="insera">
              <input
                class="form-control"
                type="text"
                placeholder="Precio en Cop:"
                aria-label="default input example"
                v-model="articulos.precioCop"
              />
            </div>
            <div class="nomencl_ad">
              <p id="Tecnname">Precio en Dolares:</p>
            </div>
            <div class="insera">
              <input
                class="form-control"
                type="text"
                placeholder="Precio en Dolar:"
                aria-label="default input example"
                v-model="articulos.preciodolar"
              />
            </div>
          </div>
          <div class="antpie">
            <button
              type="button"
              class="btn btn-outline-success"
              id="buttom_guar"
              @click="crearArticulos()"
            >
              <h5>GUARDAR</h5>
            </button>
            <button
              class="btn btn-outline-success"
              id="bottom_volv"
              @click="volver()"
            >
              <h5>VOLVER</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
    <piepagina />
  </body>
</template>

<script>
import cielo from "../components/cielo.vue";
import piepagina from "../components/pies.vue";
export default {
  name: "",
  components: {
    cielo,
    piepagina,
  },
  data() {
    return {
      articulos: {
        imagen: "",
        nombreTecnico: "",
        nombreComercial: "",
        marca: "",
        especificaciones: "",
        precioCop: "",
        preciodolar: "",
      },
      categoria: "mother",
      tituloCategoria: "TARJETAS MADRE",
    };
  },
  methods: {
    crearArticulos() {
      this.$swal({
        icon: "success",
        title: "Exito en su creación",
        text: "Su Creacion registrada",
      });
      this.axios
        .post("/nuevo-" + this.categoria, this.articulos)
        .then((res) => {
          console.log(res.data);
        });
    },
    volver() {
      this.$swal({
        title: "¿Querés Volver?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, quiero volver!",
        cancelButtonText: "No, me arrepentí!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then(async (result) => {
        if (result.value) {
          this.$router.push("/cuenta");
        }
      });
    },
    cerrar() {
      this.$swal({
        title: "¿Estas Seguro?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí, estoy seguro",
        cancelButtonText: "No, quiero quedarme",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then(async (result) => {
        if (result.value) {
          this.$router.push("/");
        }
      });
    },
    //   var fileReader = new FileReader();
    //   fileReader.readAsDataURL(event.target.files[0]);
    //   fileReader.onload = (event) => {
    //     this.articulos.imagen = event.target.result;
    //     var formData = new FormData();
    //     formData.append("image", this.articulos.imagen);
    //   };
    //   try {
    //     this.axios.post("/nuevo-" + this.categoria, formData);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  created() {},
};
</script>

<style scoped>
body {
  min-height: 100vh;
}
.cuerpo {
  display: grid;
}
/* <!-- Administrador primera parte--> */
.primera_parte_Ad {
  display: grid;
  grid-template-columns: 30% 70%;
}
/*  <!-- Parte izquierda --> */
.ala_izqu_Ad {
  display: grid;
}
/*  <!-- targeta de infrmacion --> */
.contenr_ad {
  width: 100%;
  display: flex;
  align-items: center;
  height: 300px;
}
.card {
  margin: 0px 0px 0px 30px;
  text-align: center;
}
.despegable {
  width: 100%;
  display: flex;
  padding-bottom: 100px;
}
.col-12 {
  padding-bottom: 100px;
  margin-bottom: 10px;
  margin-left: 30px;
  position: relative;
  left: 8%;
  top: -10%;
}
/* <!-- parte derecha --> */
.ala_righ_Ad {
  display: grid;
  grid-template-rows: 7% 90%;
}
/* <!-- contenedor --> */
.structura {
  display: grid;
  grid-template-rows: 25% 60%;
}
.head {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding-top: 20px;
}
.img_a {
  width: 220px;
  position: relative;
  left: 30%;
  top: -15px;
}
.agredd {
  position: relative;
  display: grid;
  right: 70px;
}
/* <!-- cuerpo --> */
.conta_ad {
  display: grid;
  grid-template-columns: 50% 50%;
}
.nomencl_ad {
  margin: 1px;
}
#Tecnname {
  position: relative;
  font: 30px sans-serif;
  margin-left: 100px;
}
.insera {
  margin-right: 50px;
}
.antpie {
  margin-bottom: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#buttom_guar,
#bottom_volv {
  margin-right: 15%;
  margin-top: 3%;
  float: right;
  padding: 0% 3% 0% 3%;
}
/* #bottom_volv{
  margin-right: 15%;
  margin-top: 3%;
  float: right;
  padding: 0% 3% 0% 3%;
}
#inc_img_pus {
  position: relative;
  left: 600px;
  top: 25px;
} */
</style>