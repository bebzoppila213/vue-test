<template>
<div class="card" style="width: 18rem;">
  <img @dblclick="() => adressIsVisible = !adressIsVisible" :src="img" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{subtitle}}</p>
    <p class="card-text">Страна {{country}}</p>
    <p  v-show="adressIsVisible" class="card-text">Адресс {{adress}}</p>
  </div>
</div>
</template>


<script>
export default {
    props:{
        title: String,
        subtitle: String,
        img: String,
        country: String,
        adress: String
    },

    data: () => {
      return{
        adressIsVisible: false
      }
    }
}
</script>