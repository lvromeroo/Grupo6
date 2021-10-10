<template>
    <body>
        <principal />
        <div class="container">
            <div class="row">
                <div class="col-md-3 well">

                    <!-- Inicio seccion de seleccion de categorias -->
                    <section class="categorias">

                        <br>
                        <h2 style="color:rgb(34, 1, 95); padding: 50px 0px 0px 15px;" class="category-title">Categorias</h2>
                        <br>

                        <!-- Inicio menu de categorias -->
                        <div class="col-8">
                            <b-button-group vertical style="color:white;">
                                <b-button variant="primary" @click="tituloCategoria='TARJETAS MADRE'; categoria='mother';  mostrarArticulos(); detalles=false;">Tarjetas madre</b-button>
                                <b-button variant="primary" @click="tituloCategoria='PROCESADORES (CPU)'; categoria='procesador';  mostrarArticulos(); detalles=false;">Procesadores (CPU)</b-button>
                                <b-button variant="primary" @click="tituloCategoria='TARJETAS DE VIDEO (GPU)'; categoria='video';  mostrarArticulos(); detalles=false;">Tarjetas de video(GPU)</b-button>
                                <b-button variant="primary" @click="tituloCategoria='MEMORIAS RAM'; categoria='ram';  mostrarArticulos(); detalles=false;">Memorias RAM</b-button>
                                <b-button variant="primary" @click="tituloCategoria='FUENTES DE ENERGIA'; categoria='f_energia';  mostrarArticulos(); detalles=false;">Fuentes de energia</b-button>
                                <b-button variant="primary" @click="tituloCategoria='ALMACENAMIENTO'; categoria='almacenamiento'; mostrarArticulos(); detalles=false;">Almacenamiento</b-button>
                                <b-button variant="primary" @click="tituloCategoria='REFRIGERACION'; categoria='refrigeracion';  mostrarArticulos(); detalles=false;">Refrigeracion</b-button>
                                <b-button variant="primary" @click="tituloCategoria='CASE'; categoria='case';  mostrarArticulos(); detalles=false;">Case</b-button>
                            </b-button-group>
                        </div>
                        <br>
                        <!-- Fin menu de categorias -->
                    </section>
                    <!-- Fin seccion de seleccion de categorias -->

                </div>

                <div class="col-md-8 well"> 
                    <!-- Inicio seccion de vista de articulos -->
                    <section class="vista-articulos">

                        <!-- Inicio menu de busqueda de articulos -->
                        
                        <b-navbar type="light" variant="faded">
                            <b-navbar-nav style="padding: 10px 0px 0px 430px;">
                                <!-- Navbar dropdowns -->
                                <b-nav-item-dropdown text="Ordenar por" right>
                                    <b-dropdown-item href="#">Precio (Mayor a menor)</b-dropdown-item>
                                    <b-dropdown-item href="#">Precio (Menor a mayor)</b-dropdown-item>
                                </b-nav-item-dropdown>
                                
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Buscar articulo" aria-label="Search">
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </b-navbar-nav>
                        </b-navbar>

                        <!-- Fin menu de busqueda de articulos -->

                        <br>
                        <h2 align="center" style="color:rgb(34, 1, 95)" v-if="!detalles">{{tituloCategoria}}</h2>
                        <h2 align="center" style="color:rgb(34, 1, 95); text-transform: uppercase;" v-if="detalles">{{articulo_detalle.nombreComercial}}</h2>
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
                                    <div class="d-grid gap-2 col-10 mx-auto" style="padding: 20px 0px;">
                                        <button class="btn btn-primary" type="button" style="color:white" @click="activarDetalles(item._id)">Ver detalles</button>
                                        <button class="btn btn-primary" type="button" style="color:white" @click="Agregar_a_diseno([item._id, categoria])">Agregar al diseño</button>
                                        <button class="btn btn-primary" type="button" style="color:white;" @click="Agregar_a_carrito([item._id, categoria])">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>


                        </section>
                        <br>
                        <!-- Fin vista de listado de articulos -->

                        <!-- Inicio vista de los detalles de un articulo -->

                        <section v-if="detalles">

                            <div style="padding:15px 0px;" class="row">

                                <div class="col-md-4 well">
                                        <img :src="resolve_img_url(articulo_detalle.imagen)" :alt="`${articulo_detalle.imagen}`" style="width: 350px; height: 262.5px;"/>
                                </div>
                                <div class="col-md-8 well" style="padding: 30px;">
                                    <div class="d-grid gap-2 col-7 mx-auto" style="padding: 30px 0px;">
                                        <button class="btn btn-primary" type="button" style="height: 60px; font-size: 20px; color: white;" @click="Agregar_a_diseno([articulo_detalle._id, categoria])">Agregar al diseño</button>
                                        <button class="btn btn-primary" type="button" style="height: 60px; font-size: 20px; color: white;" @click="Agregar_a_carrito([articulo_detalle._id, categoria])">Agregar al carrito</button>
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
                        <br>

                        <!-- Fin vista de los detalles de un articulo -->

                    </section>
                    <!-- Fin seccion de vista de articulos --> 
                </div>
            </div>
        </div>
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

            articulos:[],
            tituloCategoria:'TARJETAS MADRE',
            categoria: 'mother',
            detalles: false,
            articulo_detalle: {},
            usuario_carrito: {}
        }

    },

    created () {

        this.mostrarArticulos();
        this.ObtenerUsuario();

    },

    methods: {

        mostrarArticulos() {

            this.axios.get('/' + this.categoria)
            .then(res=>{

                console.log(res.data)
                this.articulos = res.data;

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
        ObtenerUsuario() {

            this.axios.get('/user')
            .then(res=>{

                console.log(res.data)
                this.usuario_carrito = res.data[0];

            })
            .catch(e=>{

                console.log(e.response);

            })

        },
        Agregar_a_carrito(item) {

            this.usuario_carrito.carrito.push(item);
            this.axios.put(`/user/${this.usuario_carrito._id}`, this.usuario_carrito)
                .then(res => {

                    this.usuario_carrito.username = res.data.username;
                    this.usuario_carrito.carrito = res.data.carrito;
                    this.usuario_carrito.diseno = res.data.diseno;
                    this.usuario_carrito.password = res.data.password;

                    this.$swal({icon:'success', title:'Articulo agregado al carrito de compras'})

                })
                .catch(e => {

                    console.log(e.response)
                })

        },
        Agregar_a_diseno(item) {

            this.usuario_carrito.diseno.push(item);
            this.axios.put(`/user/${this.usuario_carrito._id}`, this.usuario_carrito)
                .then(res => {

                    this.usuario_carrito.username = res.data.username;
                    this.usuario_carrito.carrito = res.data.carrito;
                    this.usuario_carrito.diseno = res.data.diseno;
                    this.usuario_carrito.password = res.data.password;

                    this.$swal({icon:'success', title:'Articulo agregado al diseño'})

                })
                .catch(e => {

                    console.log(e.response)
                })

        },

    },

}

</script>

