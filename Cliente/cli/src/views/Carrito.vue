<template>
    <body>

        <div class = "row" v-for="(item, index) in articulos" :key="index">
            <h4>Articulo{{index}}</h4>
            <div class="col-md-4 well">
                <img :src="resolve_img_url(item.imagen)" :alt="`${item.imagen}`" style="width: 250px; height: 187.5px;"/>
            </div>
            <div class="col-md-5 well" style="padding: 15px;">
                <h2>{{item.nombreComercial}}</h2>
                <br>
    
                <h3>Precio: COP$ {{item.precioCop}}</h3>
                <h3 style="padding: 0px 0px 0px 150px;">$ {{item.preciodolar}}</h3>
            </div>
        </div>
    </body>
</template>


<script>

export default {
    
    data() {
        return {

            carrito:[],
            articulos: [],
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
                this.VerCarrito();

            })
            .catch(e=>{

                console.log(e.response);

            })

        }

    },

}

</script>