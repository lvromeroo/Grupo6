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
                            <b-card-text style="text-align: center;"><a href="#" style="color: #dce1f5;">Acceso de administrador</a></b-card-text> <!-- Acceso a opciones de administrador -->
                        </b-card>
                        <br>

                        <!-- Inicio menu de categorias -->
                        <div class="col-8">
                            <b-button-group vertical style="color:white; width: 230px;" >
                                <b-button variant="primary" style="font-size: 20px;"><a href="/diseno" style="text-decoration: none; color:white;">Diseños</a></b-button>
                                <b-button variant="primary" style="font-size: 20px;"><a href="/carrito" style="text-decoration: none; color:white;">Carrito de compras</a></b-button>
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

                        <section v-if="!detalles & !actualizar">

                            <div style="padding:15px 0px;" class="row" v-for="(item, index) in articulos" :key="index">

                                <div class="col-md-4 well">
                                    <img :src="resolve_img_url(item[0].imagen)" :alt="`${item[0].imagen}`" style="width: 250px; height: 187.5px;"/>
                                </div>
                                <div class="col-md-5 well" style="padding: 15px;">
                                    <h2>{{item[0].nombreComercial}}</h2>
                                    <br>
                        
                                    <h3>Precio: COP$ {{item[0].precioCop}}</h3>
                                    <h3 style="padding: 0px 0px 0px 150px;">$ {{item[0].preciodolar}}</h3>
                                </div>
                                <div class="col-md-3 well">
                                    <div class="d-grid gap-2 col-10 mx-auto" style="padding: 50px 0px;">
                                        <button class="btn btn-info" type="button" style="color:white;" @click="activarDetalles(item[0]._id); categoria=item[1];">Ver detalles</button>
                                        <button class="btn btn-danger" type="button" style="color:white" @click="Eliminar_de_carrito(index);">Eliminar</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="padding: 5px 0px 0px 250px;">
                            <br>

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
                        <br>
                        <!-- Fin vista de listado de articulos -->

                    </section>
                    <!-- Fin seccion de vista de articulos --> 
                    <!-- Inicio vista de los detalles de un articulo -->

                    <section v-if="detalles">

                        <div style="padding:15px 0px;" class="row">

                            <div class="col-md-4 well">
                                    <img :src="resolve_img_url(articulo_detalle.imagen)" :alt="`${articulo_detalle.imagen}`" style="width: 350px; height: 262.5px;"/>
                            </div>
                            <div class="col-md-8 well" style="padding: 30px;">
                                <div class="d-grid gap-2 col-6 mx-auto" style="padding: 30px 0px;">
                                    <button class="btn btn-danger" type="button" style="height: 55px; font-size: 20px; color: white;" @click="Eliminar_de_carrito(index); detalles=false">Eliminar</button>
                                    <button class="btn btn-info" type="button" style="height: 55px; font-size: 20px; color: white;" @click="detalles=false" >Regresar</button>
                                </div>
                            </div>
                        
                        </div>
                        <br>
                        <div>

                            <table> 
                                <tbody>
                                    <tr>
                                        <th style="width: 270px; vertical-align:text-top;"><h3>Nombre tecnico:</h3></th>
                                        <td style="font-size:20px; width: 440px; text-align: justify; ">{{articulo_detalle.nombreTecnico}}</td>
                                    </tr>
                                    <tr>
                                        <th style=""><h3>Nombre comercial:</h3></th>
                                        <td style="font-size:20px; text-align: justify;">{{articulo_detalle.nombreComercial}}</td>
                                    </tr>
                                    <tr>
                                        <th style=""><h3>Marca:</h3></th>
                                        <td style="font-size:20px; text-align: justify;">{{articulo_detalle.marca}}</td>
                                    </tr>
                                    <tr>
                                        <th style="vertical-align:text-top;"><h3>Especificaciones:</h3></th>
                                        <td style="font-size:20px; text-align: justify;">{{articulo_detalle.especificaciones}}</td>
                                    </tr>
                                    <tr>
                                        <th style=""><h3>Precio en COP:</h3></th>
                                        <td style="font-size:20px; text-align: justify;">${{articulo_detalle.precioCop}}</td>
                                    </tr>
                                    <tr>
                                        <th style=""><h3>Precio en dolares:</h3></th>
                                        <td style="font-size:20px; text-align: justify;">${{articulo_detalle.preciodolar}}</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <br>

                            <div style="padding: 20px 0px 0px 600px;">
                                <button class="btn btn-secondary" type="button" style="width: 180px; height: 45px; font-size: 22px; color:white;" @click="detalles=false">Regresar</button>
                            </div>
                        </div>
                        <br>

                    </section>

                    <!-- Fin vista de los detalles de un articulo -->
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
            categoria: 'mother',
            detalles: false,
            actualizar: false,
            articulo_detalle: {},
            usuario_carrito: {},
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
                this.articulos.push([res.data, this.carrito[this.j][1]]);
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
                this.usuario_carrito = res.data[0];
                this.carrito = res.data[0].carrito;
                this.username = res.data[0].username;
                this.VerCarrito();

            })
            .catch(e=>{

                console.log(e.response);

            })

        },
        activarDetalles (id) {

            this.detalles = true;
            console.log(id);
            this.axios.get(`/${this.categoria}/${id}`)

            .then(res=>{

                this.articulo_detalle = res.data;

            })
            .catch(e=>{

                console.log(e.response)

            })

        },
        Eliminar_de_carrito(indice) {

            this.usuario_carrito.carrito.splice(indice, 1);
            this.articulos.splice(indice, 1);

            this.axios.put(`/user/${this.usuario_carrito._id}`, this.usuario_carrito)
                .then(res => {

                    this.usuario_carrito.username = res.data.username;
                    this.usuario_carrito.carrito = res.data.carrito;
                    this.usuario_carrito.diseno = res.data.diseno;
                    this.usuario_carrito.password = res.data.password;

                })
                .catch(e => {

                    console.log(e.response)
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