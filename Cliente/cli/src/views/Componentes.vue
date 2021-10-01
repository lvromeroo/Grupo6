<template>
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
                            <b-button variant="primary" @click="tituloCategoria='TARJETAS MADRE'">Tarjetas madre</b-button>
                            <b-button variant="primary" @click="tituloCategoria='PROCESADORES (CPU)'">Procesadores (CPU)</b-button>
                            <b-button variant="primary" @click="tituloCategoria='TARJETAS DE VIDEO (GPU)'">Tarjetas de video(GPU)</b-button>
                            <b-button variant="primary" @click="tituloCategoria='MEMORIAS RAM'">Memorias RAM</b-button>
                            <b-button variant="primary" @click="tituloCategoria='FUENTES DE ENERGIA'">Fuentes de energia</b-button>
                            <b-button variant="primary" @click="tituloCategoria='ALMACENAMIENTO'">Almacenamiento</b-button>
                            <b-button variant="primary" @click="tituloCategoria='REFRIGERACION'">Refrigeracion</b-button>
                            <b-button variant="primary" @click="tituloCategoria='CASE'">Case</b-button>
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
                                <b-dropdown-item href="#">Nombre</b-dropdown-item>
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
                    <h2 align="center" style="color:rgb(34, 1, 95)">{{tituloCategoria}}</h2>
                    <br>

                    <!-- Inicio listado de articulos -->

                    <div style="padding:15px 0px;" class="row" v-for="(item, index) in articulos" :key="index">

                        <div class="col-md-4 well">
                            <img :src="`${item.imagen}`" :alt="`${item.imagen}`" style="width: 250px; height: 187.5px;"/>
                        </div>
                        <div class="col-md-5 well" style="padding: 15px;">
                            <h2>{{item.nombreComercial}}</h2>
                            <br>
                
                            <h3>Precio: COP$ {{item.precioCop}}</h3>
                            <h3 style="padding: 0px 0px 0px 150px;">$ {{item.preciodolar}}</h3>
                        </div>
                        <div class="col-md-3 well">
                            <div class="d-grid gap-2 col-10 mx-auto" style="padding: 20px 0px;">
                                <a href="Articulo_detallado.html" class="btn btn-primary" role="button" style="color:white">Ver detalles</a>
                                <button class="btn btn-primary" type="button" style="color:white">Agregar al diseño</button>
                                <button class="btn btn-primary" type="button" style="color:white;">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    <br>
                    
                </section>
                <!-- Fin seccion de vista de articulos --> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    

    data() {
        return {

            articulos:[],
            tituloCategoria:'TARJETAS MADRE',
        }

    },

    created () {

        this.mostrarArticulos();

    },

    methods: {

        mostrarArticulos() {

            this.axios.get('/articulo')
            .then(res=>{

                console.log(res.data)
                this.articulos = res.data;

            })
            .catch(e=>{

                console.log(e.response);

            })

        },


    },
}
</script>