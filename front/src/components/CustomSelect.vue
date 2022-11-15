<template>
  <select @change="onSelected" class="form-select">
    <option hidden selected>Выберите страну фильма</option>
    <option :key="indx" v-for="option,indx in options" :value="option">{{option}}</option>
    <option value="">Сбросить</option>
  </select>
</template>


<script>
export default {
  props:{
    options: Array
  },

  methods:{
    onSelected(event){
      this.$emit('selectChange', event.target.value)
    }
  }
}
</script>


<style>
.form-select{
    max-width: 20%;
}
</style>