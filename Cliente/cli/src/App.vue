<template>
  <div>
    <router-view/> 
  </div>
</template>

<script>

import cielo from './components/cielo.vue'
import pies from './components/pies.vue'

export default {

  components: {

    cielo,
    pies

  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
