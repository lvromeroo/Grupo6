<style scoped>
    header{
        background-color: #a3b3ea;
    }
    .menu {
        background: #a8a6ac;
        list-style: none;
        margin: auto;
        padding: 0px;
        width: 954.2px;
    }
    .menu li{
        display: inline-block;
        border:0px;
    }
    .menu li a{
        padding: 10px 20px;
        display: inline-block;
        text-decoration: none;
        font-size: 35px;
        color: white;
    }
    .menu li a:hover, .Activo{
        background: #0d6efd;
    }
</style>

<template>
    <header>

        <br>
        <h1 align="center" style="color:rgb(34, 1, 95);"><b>ENIAC</b></h1>
        <br>

        <!-- Inicio menu de navegacion -->
        <nav>
            <router-view></router-view>
            <ul class="menu">
                <li>
                    <router-link to = "/inicio">INICIO</router-link>
                </li>
                <li>
                    <a href="/diseno">DISEÑO</a>
                </li>
                <li>
                    <router-link to="/armado" >ARMADO</router-link>
                </li>
                <li>
                    <router-link to="/componentes" >COMPONENTES</router-link>
                </li>
                <li>
                    <router-link to="/cuenta">CUENTA</router-link>
                </li>
              </ul>
          </nav>
          <br>
          <!-- Fin menu de navegacion -->

    </header>
</template>

<script>



export default {
    
}
</script>