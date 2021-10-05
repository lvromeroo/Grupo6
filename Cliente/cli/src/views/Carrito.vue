<template>
    <h1>{{articulos}}</h1>
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

        guardar_Articulos(){

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
</template>