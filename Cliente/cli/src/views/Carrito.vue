<template>
    <body>
        <principal />

        <div class="container">
            <div class="row">
                <div class="col-md-3 well">

                    <!-- Inicio seccion de seleccion de categorias -->
                    <section class="categorias">

                        <br><br>
                        <b-card
                        style="width: 75%; background-color: #0da5fd;">
                            <div style="text-align: center;">
                                <b-avatar src="https://www.eltiempo.com/files/article_main/uploads/2019/12/07/5dec47012d257.jpeg" size="5rem" ></b-avatar>
                            </div>
                            <b-card-text style="text-align: center; font-size: 22px; padding: 5px 0px 0px 0px; color:white; text-transform: uppercase;">
                                {{username}}</b-card-text>
                        </b-card>
                        <br>

                        <!-- Inicio menu de categorias -->
                        <div class="col-8">
                            <b-button-group vertical style="color:white; width: 230px;" >
                                <b-button variant="primary" style="font-size: 20px;"><a href="/diseno" style="text-decoration: none; color:white;">Diseños</a></b-button>
                                <b-button variant="primary" style="font-size: 20px;">Carrito de compras</b-button>
                                <b-button variant="primary" style="font-size: 20px;"><a href="/register" style="text-decoration: none; color:white;">Cerrar sesion</a></b-button>
                            </b-button-group>
                        </div>
                        <br>

                        <b-card
                        header="CARRITO"
                        header-tag="CARRITO"
                        style="text-align: center; width: 75%; background-color: #a3b3ea; color: white;"
                        >
                            <b-card-text style="font-size:20px;"><b>TOTAL:</b> <br>&nbsp;COP ${{preciocop}}<br>${{preciodolar.toFixed(2)}}</b-card-text>
                            <div class="row" style="padding: 5px 0px 0px 10px;">
                                <div class="col-md-4 well">
                                    <b-icon icon="cart3" class="h1 mb-2"></b-icon>
                                </div>
                                <div class="col-md-3 well">
                                    <b-button href="#" variant="primary">COMPRAR</b-button>
                                </div>
                            </div>
                        </b-card>
                        <!-- Fin menu de categorias -->
                    </section>
                    <!-- Fin seccion de seleccion de categorias -->

                </div>

                <div class="col-md-8 well"> 
                    <!-- Inicio seccion de vista de articulos -->
                    <section class="vista-articulos">

                        <br>
                        <h2 align="center" style="color:rgb(34, 1, 95)">CARRITO DE COMPRAS</h2>
                        <br>

                        <!-- Inicio vista de listado de articulos -->

                        <section v-if="!detalles">

                            <div style="padding:15px 0px;" class="row" v-for="(item, index) in articulos" :key="index">

                                <div class="col-md-4 well">
                                    <img :src="resolve_img_url(item.imagen)" :alt="`${item.imagen}`" style="width: 250px; height: 187.5px;"/>
                                </div>
                                <div class="col-md-5 well" style="padding: 15px;">
                                    <h2>{{item.nombreComercial}}</h2>
                                    <br>
                        
                                    <h3>Precio: COP$ {{item.precioCop}}</h3>
                                    <h3 style="padding: 0px 0px 0px 150px;">$ {{item.preciodolar}}</h3>
                                </div>
                                <div class="col-md-3 well">
                                    <div class="d-grid gap-2 col-10 mx-auto" style="padding: 50px 0px;">
                                        <button class="btn btn-info" type="button" style="color:white;" @click="activarDetalles(item._id)">Ver detalles</button>
                                        <button class="btn btn-danger" type="button" style="color:white" @click="Agregar_a_diseno([item._id, categoria])">Eliminar</button>
                                    </div>
                                </div>
                            </div>


                        </section>
                        <br>
                        <!-- Fin vista de listado de articulos -->
                        <div class="row" style="padding: 5px 0px 0px 250px;">

                            <div class="col-md-5 well">
                            <h4 style="padding: 0px 0px 0px 15px; font-size: 30px;">Agregar articulo</h4>
                            </div>
                            <div class="col-md-2 well">
                            <a href="/componentes" style="color: #20eb09; text-decoration: none;"><v-btn
                                fab
                                dark
                                small style="background-color: #20eb09;">
                                <v-icon>mdi-plus</v-icon>
                            </v-btn></a>
                            </div>

                        </div>

                    </section>
                    <!-- Fin seccion de vista de articulos --> 
                </div>
            </div>
        </div>
        <br>
        <piepagina/>
    </body>
</template>


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

            carrito:[],
            articulos: [],
            preciocop: 0,
            preciodolar: 0,
            username: 'Username',
            j: 0
        }

    },

    created () {

        this.ObtenerUsuario();

    },

    methods: {

        VerCarrito() {

            const i = this.carrito.length;

            this.axios.get('/' + this.carrito[this.j][1] + '/' + this.carrito[this.j][0])

            .then(res=>{
                this.articulos.push(res.data);
                this.preciocop += res.data.precioCop;
                this.preciodolar += res.data.preciodolar;
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

        resolve_img_url: function (path) {

            try {

                let images = require.context('../assets/', false, /\.png$|\.jpg$/)
                return images("./"+path)

            } catch (error) {

                return '../assets/'+path

            }

        },
        ObtenerUsuario() {

            this.axios.get('/user')
            .then(res=>{

                console.log(res.data)
                this.carrito = res.data[0].carrito;
                this.username = res.data[0].username;
                this.VerCarrito();

            })
            .catch(e=>{

                console.log(e.response);

            })

        }

    },

}

</script>

<style scoped>
    carrito{
        background-color: #0d6efd;
        font-size: 20px;
    }
</style>