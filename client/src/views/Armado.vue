<template>
    <body>
        <principio />
        <!--Inicio del cuerpo-->
        <div class="container-body-Armado">
            <!--Inicio de categorias-->
            <div class="category">
                <section class="categorias">
                    
                    <div class="title_category">
                        <h2 style="color:rgb(34, 1, 95)" class="category-title">Categorias</h2>
                    </div>

                    <!-- Inicio menu de categorias -->
                    <div class="row">
                        <div class="col-10">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#Fuente" role="tab" aria-controls="list-home">Fuente de Alimentación</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#procesador" role="tab" aria-controls="list-profile">Procesador (CPU)</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#memoria" role="tab" aria-controls="list-messages">Memoria Ram</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#targetaP" role="tab" aria-controls="list-settings">Tarjeta Principal</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#disipador" role="tab" aria-controls="list-settings">Disipador de calor</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#targetaG" role="tab" aria-controls="list-settings">Tarjeta gráfica</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#unidadA" role="tab" aria-controls="list-settings">Unidad de almacenamientos</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#monitores" role="tab" aria-controls="list-settings">Monitores</a>
                        </div>
                        </div>
                    </div>
                    <!-- Fin menu de categorias -->

                </section>
            </div>
            <!--Fin de categorias-->

            <!--Inicio de informacion-->
            <div class="information">
                <div class="subtitle">
                    <h2 class="subti-type">Manual de Armado</h2>
                </div>
                <div class="cntainer-info">

                    <article class="panel-info">

                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/Fuente_Alimentacion.jpg" alt="#">
                            </div>

                            <!--El subN°1-->
                            <h2 class="Arm_title" id="Fuente">Fuente de Alimentación</h2>
                            <p class="Arm_text">La Fuente de alimentación o Fuente de Poder, en informática es el componente encargado de suministrar tensión al resto de los componentes del PC. 
                            <br>
                            Su función es precisamente trasformar la tensión alterna de la toma corriente de 220v de nuestras casas en tensión continua, generando los voltajes adecuados para cada componente de nuestro ordenador.
                            <br>    
                            Por lo que es fácil inferir que un error de este elemento importante en nuestra CPU puede dañar por completo los demás componentes.
                            <br>
                            La fuente de alimentación se encuentra generalmente en la parte inferior de la torre. En los Smartphone, portátiles y cualquier dispositivo electrónico esta por fuera de alimentación se encuentra afuera del dispositivo; lo llamamos coloquialmente cargador. 
                                </p>
                    </article>
                    
                    <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/Modelo_de_procesador.jpg" alt="#">
                            </div>
                            <!--El subN°2-->
                            <h2 class="Arm_title" id="procesador">Procesador</h2>
                            <p class="Arm_text">La CPU es el motor de su computadora y establece las expectativas de desempeño para la creación completa. La memoria y el almacenamiento alimentan al procesador que controla cada transacción de datos dentro de la PC. Cuando esté determinando qué CPU instalar, preste atención al gigahertz (GHz). Cuanto mayor sean los GHz, más rápido será el procesador. Sin embargo, más GHz también significa que la CPU consume más energía, lo que podría llevar a elevar las temperaturas que requieren un mejor flujo de aire o disipación de calor en la computadora.</p>
                        </article>

                        <!--Tercero paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/memoria_ram.jpg" alt="#">
                            </div>
                            <!--El subN°3-->
                            <h2 class="Arm_title" id="memoria">Memoria Ram</h2>
                            <p class="Arm_text">La memoria RAM es la memoria principal de un dispositivo, esa donde se almacenan de forma temporal los datos de los programas que estás utilizando en este momento. Sus siglas significan Random Access Memory, lo que traducido al español sería Memoria de Acceso Aleatorio, y es un tipo de memoria que te puedes encontrar en cualquier dispositivo, desde ordenadores de sobremesa hasta teléfonos móviles.
                            <br>
                            La memoria RAM tiene dos características que la diferencian del resto de tipos de almacenamiento. Por una parte tiene una enorme velocidad, y por otra los datos sólo se almacenan de forma temporal. Esto quiere decir que cada vez que reinicies o apagues tu ordenador, lo normal es que los datos que haya almacenados en la RAM se pierdan.
                                </p>
                        </article>
                        
                        <!--Cuarto paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/motherboard.jpg" alt="#">
                            </div>
                            <!--El subN°4-->
                            <h2 class="Arm_title" id="targetaP">Tarjeta Principal</h2>
                            <p class="Arm_text">La motherboard determina el factor de forma física y tamaño del armado de su computadora, pero también determina qué otras piezas de hardware puede usar la computadora. Por ejemplo, la motherboard determina la potencia que puede manejar el procesador, la tecnología de memoria (DDR4, DDR3, DDR2, etc.), la cantidad de módulos que se pueden instalar y el factor de forma almacenamiento (de 2.5 in, mSATA, o m.2) y la interfaz de almacenamiento (SATA o PCIe). Si quiere elegir su motherboard según los demás componentes compatibles, este debería ser su punto de inicio.</p>
                        </article>

                        <!--Quinto paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/disipadores_calor.jpg" alt="#">
                            </div>
                            <!--El subN°5-->
                            <h2 class="Arm_title" di="disipador">Disipador de calor</h2>
                            <p class="Arm_text">Al igual que un carro, es necesario mantener una temperatura estable para no sobrecargar, ralentizar y a largo plazo destruir las piezas dentro del proceso continuo de la máquina. 
                            <br>
                            Se conoce como disipador PC o disipador CPU a una pieza o elemento de un ordenador que se encarga de dispersar el calor del dispositivo para evitar su sobrecalentamiento.
                            <br>    
                            Pero no solo los ordenadores tienen disipadores de calor. Otros dispositivos electrónicos como tablets, smartphones, o Smart TV también disponen de este tipo de elementos de refrigeración.
                            <br>    
                            ¿Cómo funciona un disipador de calor? Es muy sencillo. Este tiene un conductor térmico que transfiere el calor lejos de la CPU en un diseño con un ventilador que permite que el calor se disipe con facilidad en el aire y hacia otras zonas menos sensibles del ordenador así como hacia el exterior del mismo.
                            <br>    
                            Pero un disipador de calor no tiene por qué ser el único elemento encargado de evitar el sobrecalentamiento en un dispositivo electrónico. Un ventilador de ordenador o un sistema de refrigeración líquida, por ejemplo, también contribuyen a evitar el sobrecalentamiento del aparato. Por ello en ordenador de uso muy exigente como un ordenador gaming, suele instalarse más de un sistema de ventilación y refrigeración.
                                </p>
                        </article>

                        <!--Sexto paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/tarjeta_grafica.jpg" alt="#">
                            </div>
                            <!--El subN°6-->
                            <h2 class="Arm_title" id="targetaG">Tarjeta gráfica</h2>
                            <p class="Arm_text">La tarjeta gráfica o tarjeta de vídeo de un componente que viene integrado en la placa base del PC o se instala a parte para ampliar sus capacidades. Concretamente, esta tarjeta está dedicada al procesamiento de datos relacionados con el vídeo y las imágenes que se están reproduciendo en el ordenador.
                            <br>
                            Todas las imágenes que ves en el monitor de tu ordenador, desde los gráficos de un videojuego hasta lo que escribes en Word, requieren ser procesadas por el ordenador. Las tarjetas gráficas obtienen esos datos que le envía el procesador del ordenador, y los transforma en información visual, lo que quiere decir que coge datos que son unos y ceros y los convierte en imágenes.
                            <br>    
                            Hay dos tipos de tarjetas gráficas, las integradas que van acopladas al propio procesador como una parte de este, y las dedicadas que puedes conectar a parte en el ordenador como si fueran una unidad externa en la que la CPU puede apoyarse para tareas especialmente exigentes. En ambos casos, la gráfica conectará directamente con el monitor para enviarle los datos.
                                </p>
                        </article>
                    
                        <!--Septimo paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/unidad_almacenamiento.jpg" alt="#">
                            </div>
                            <!--El subN°7-->
                            <h2 class="Arm_title" id="unidadA">Unidad de almacenamientos</h2>
                            <p class="Arm_text">Sus archivos y datos son guardados a largo plazo en su unidad de almacenamiento. La unidad de disco duro (HDD) o la unidad de estado sólido (SSD) conservan los datos. A pesar de que los discos duros por lo general le ofrecen más espacio de almacenamiento (en GB), las SSD los han dejado desactualizados –las SSD son en promedio 6 veces más rápidas1 y 90 veces más eficientes energéticamente2 que las unidades de disco duro.
                            <br>
                            La discrepancia de velocidad proviene de cómo los dos dispositivos de almacenamiento leen y escriben los datos, la velocidad de lectura y escritura mide cuán rápido se cargan (lectura) y guardan/transfieren (escritura). Las unidades de disco duro usan pequeñas partes mecánicas movibles y discos giratorios para hacer eso, y las SSD usan tecnología flash NAND. La diferencia resulta en mejor velocidad, eficiencia, y durabilidad porque las pequeñas partes mecánicas y discos de rotación son mucho más susceptibles de sufrir daños físicos que la tecnología NAND. Por esta diferencia, sus datos son de más rápido acceso y preservados por más tiempo en las SSD.
                                </p>
                        </article>

                        <!--Octavo paso-->
                        <article class="Arm-info">
                            <div class="img_contenerdor">
                                <img class="Arm_img" src="../assets/monitores.jpg" alt="#">
                            </div>
                            <!--El subN°8-->
                            <h2 class="Arm_title" id="monitores">Monitores</h2>
                            <p class="Arm_text">Hoy en día, los monitores de computadora están disponibles en una gran variedad de tamaños, resoluciones y otras características. Las especificaciones varían ampliamente entre diferentes monitores y cada uno está diseñado para necesidades muy específicas. Ya sea que sea un usuario ocasional, un jugador o un profesional, es importante conocer las diferentes tecnologías y funciones de monitores para elegir la que mejor se adapte a sus necesidades y obtener la mejor experiencia.
                            <br>
                            La mayoría de los usuarios habituales tienen dificultades para leer y comprender las implicaciones reales de las especificaciones técnicas de cada uno de estos componentes del monitor. Por lo tanto, en este artículo intentaremos explicar y desmitificar varios aspectos técnicos de un monitor de computadora y lo que significa en términos de usabilidad. 
                                </p>
                        </article>
                </div>
            </div>
            <!--Fin de informacion-->
        </div>
        <piepagina />
    </body>
</template>

<style scoped>
/*cuerpor*/
.container-body-Armado{
    background-color: white;
    display: grid;
    grid-template-columns:30% 70%;
}
.categorias{
    background-color: white;
}

/*categorias*/
.title_category{
    position: relative;
    right: -80px;
    margin-left: 20px;
    margin-top:16px;
}
.row{
    position: relative;
    right: -40px;
    margin-left: 20px;
    margin-top:16px;
}

/*informacionr*/
.subtitle{
    text-align: center;
    background-color: white;
    margin: 4% 4% ;
}
.subti-type{
    font-size: 40px;
    text-align: center;
}

.information{
    background-color:white;
}

.img_contenerdor{
    background-color:white;
    width:600px;
    margin-left: 15%;
}
.Arm_img{
    width:100%;
}
.Arm_title{
    text-align: center;
    margin-top: 30px;
}
.Arm_text{
    margin: 10% 10%;
    text-align: justify;
}
</style>

<script>
    import piepagina from '../components/pies.vue'
    import principio from '../components/cielo.vue'

export default {
    name: 'Armado',
    components: {
        piepagina,
        principio
    }
}
</script>