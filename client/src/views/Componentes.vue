<template>
    <body>
        <principal />

        <section class="categorias">

            <h2 style="color:rgb(34, 1, 95)" class="category-title">Categorias</h2>
            <br>

            <!-- Inicio menu de categorias -->
            <div class="row">
                <div class="col-2">
                <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Tarjetas madre</a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Procesadores (CPU)</a>
                    <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Tarjetas de video(GPU)</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Memorias RAM</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Fuentes de energia</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Almacenamiento</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Refrigeracion</a>
                    <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Case</a>
                </div>
                </div>
            </div>
            <!-- Fin menu de categorias -->

        </section>
        <!-- Fin seccion de seleccion de categorias -->

        <!-- Inicio seccion de vista de articulos -->
        <section class="vista-articulos">

            <!-- Inicio menu de busqueda de articulos -->
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navSearch">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Ordenar por
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Nombre</a></li>
                            <li><a class="dropdown-item" href="#">Precio (Mayor a menor)</a></li>
                            <li><a class="dropdown-item" href="#">Precio (Menor a mayor)</a></li>
                            </ul>
                        </li>
                        </ul>
                        <form class="d-flex" id="busqueda">
                        <input class="form-control me-2" type="search" placeholder="Buscar articulo" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <!-- Fin menu de busqueda de articulos -->
            <h2 align="center" style="color:rgb(34, 1, 95)">Tarjetas Madres</h2>
            <!-- Inicio listado de articulos -->
            <div class="articulo-component" v-for="(item, index) in articulos" :key="index">
                <div>
                <h2 align="center" style="color:rgb(34, 1, 95)">{{item.categoria}}</h2>
                </div>
                <div class="img-articulo">
                    <img src="#" alt="Tarjeta madre 1" class="imagen-componente"/>
                </div>
                <div class="info-articulo">
                    <h2>{{item.nombreComercial}}</h2>
                    <br>
        
                    <h3>Precio: COP${{item.precioCop}}</h3>
                    <h3>${{item.preciodolar}}</h3>
                </div>
                <div class="opc-articulo">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <a href="Articulo_detallado.html" class="btn btn-primary" role="button" style="color:white">Ver detalles</a>
                        <button class="btn btn-primary" type="button">Agregar al diseño</button>
                        <button class="btn btn-primary" type="button" @click="agregarCarrito(item._id)">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <!-- Fin listado de articulos -->
            
            
        </section>
        <!-- Fin seccion de vista de articulos -->
        <piepagina />
    </body>
</template>

<style scoped>
    .categorias{
        padding: 20px 50px;
        float: left;
    }
    .category-title{
        width: 160px;
        margin: 0px;
        padding: 20px 0px 0px 35px;
    }
    .list-group-item{
        background: #a8a6ac;
        color:white;
        font-size: 19px;
        width: 225px;
    }
    .list-group-item.active{
        background: #0d6efd;
    }
    .vista-articulos{
        float: left;
    }
    #navSearch{
        padding: 15px 0px 15px 470px;
    }
    #busqueda{
        padding: 0px 60px;
    }
    .imagen-componente{
        width: 250px;
        height: 187.5px;
    }
    .img-articulo{
        padding: 0px 50px;
        float: left;
    }
    .info-articulo{
        float: left;
        padding: 5px 0px;
    }
    .opc-articulo{
        float: left;
        width: 350px;
        padding: 20px 0px;
        color: white;
    }
    .articulo-component{
        clear:both;
        padding: 30px 0px 30px 0px;
    }
    .imagen-componente-detalle{
        width: 350px;
        height: 262.5px;
    }
    .opc-articulo-det{
        float: left;
        width: 450px;
        padding: 70px 0px;
    }
    .articulo-component-det{
        clear:both;
        padding: 30px 20px 30px 0px;
    }
    .img-articulo-det{
        padding: 0px 0px 0px 150px;
        float: left;
    }
    #boton1{
        height: 50px;
        font-size: 20px;
    }
    .articulo-info{
        clear:both;
        padding: 20px 140px;
    }
    .titulo-inf{
        padding: 2px 0px;
    }
    .text-inf{
        padding: 0.8px 0px;
    }
    #regreso{
        clear: both;
        width: 200px;
        height: 45px;
        font-size: 20px;
    }
    #regreso-pos{
        padding: 10px 0px 10px 440px;
    }
</style>

<script>

    import piepagina from '../components/pies.vue'
    import principal from '../components/cielo.vue'
    

export default {
    name: 'Componentes',
    components: {
        piepagina,
        principal,
    },
    props:{username: String},

    data(){
        return {

            articulos : [],
            listaCarrito:[]
            
        }
    },
    methods:{
        ponerarticulos(){
            this.axios.get('/articulo')
            .then(res =>{
                console.log(res.data)
                this.articulos=res.data;
            })
        },
        agregarCarrito(id){
            this.axios.get(`/articulo/${id}`)
            .then(res=>{
                console.log(res.data)
                this.listaCarrito.push(res.data)
            })
        }

    },
    created(){
        this.ponerarticulos();
        
    }
}
</script>