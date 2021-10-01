<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3 well">

                <!-- Inicio seccion de seleccion de categorias -->
                <section class="categorias">

                    <br>
                    <h2 style="color:rgb(34, 1, 95); padding: 0px 15px;" class="category-title">Categorias</h2>
                    <br>

                    <!-- Inicio menu de categorias -->
                    <div class="col-8">
                        <b-button-group vertical style="color:white;">
                            <b-button variant="primary" >Tarjetas madre</b-button>
                            <b-button variant="primary">Procesadores (CPU)</b-button>
                            <b-button variant="primary">Tarjetas de video(GPU)</b-button>
                            <b-button variant="primary">Memorias RAM</b-button>
                            <b-button variant="primary">Fuentes de energia</b-button>
                            <b-button variant="primary">Almacenamiento</b-button>
                            <b-button variant="primary">Refrigeracion</b-button>
                            <b-button variant="primary">Case</b-button>
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
                        <b-navbar-nav style="padding: 0px 0px 0px 380px;">
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
                    <h2 align="center" style="color:rgb(34, 1, 95)">TARJETAS MADRE</h2>
                    <br>

                    <!-- Inicio listado de articulos -->
                    <div class="row">

                        <div class="col-md-4 well"> 
                            <div class="img-articulo">
                                <img src="../assets/Mother1.jpg" alt="Tarjeta madre 1" class="imagen-componente" style="width: 250px; height: 187.5px;"/>
                            </div>
                        </div>
                        <div class="col-md-4 well" style="padding: 15px;">
                            <h2>Nombre articulo 1</h2>
                            <br>
                
                            <h3>Precio: COP$ 0000</h3>
                            <h3>$ 00.00</h3>
                        </div>
                        <div class="col-md-4 well">
                            <div class="d-grid gap-2 col-7 mx-auto" style="padding: 20px 0px;">
                                <a href="Articulo_detallado.html" class="btn btn-primary" role="button" style="color:white">Ver detalles</a>
                                <button class="btn btn-primary" type="button" style="color:white">Agregar al diseño</button>
                                <button class="btn btn-primary" type="button" style="color:white;">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    
                </section>
                <!-- Fin seccion de vista de articulos --> 
            </div>
        </div>
    </div>
</template>