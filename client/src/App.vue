<template>
  <div>
    <router-view/> 
  </div>
</template>

<script>

import piepagina from './components/pies.vue'
import principal from './components/cielo.vue'

export default {
  name: 'app',
    components: { 
        piepagina,
        principal

    }
}
</script>