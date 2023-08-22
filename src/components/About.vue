<script setup lang="ts">

import {ref} from "vue";

console.log("about")

const count = ref(0)

</script>

<template>
<div>
  about
  <button type="button" @click="count++">{{count}}</button>
</div>
</template>

<style scoped>

</style>
