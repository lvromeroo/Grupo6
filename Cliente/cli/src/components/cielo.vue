<style scoped>
    header{
        background-color: #a3b3ea;
    }

    .menu {
        background: #a8a6ac;
        list-style: none;
        margin: auto;
        padding: 0px;
        width: 954.4px;
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
            <ul class="menu">
                <li>
                    <a href="/inicio">INICIO</a>
                </li>
                <li>
                    <a href="/diseno">DISEÑO</a>
                </li>
                <li>
                    <a href="/armado">ARMADO</a>
                </li>
                <li>
                    <a href="/componentes">COMPONENTES</a>
                </li>
                <li>
                    <a href="">CUENTA</a>
                </li>
              </ul>
          </nav>
          <br>
          <!-- Fin menu de navegacion -->

    </header>
</template>
