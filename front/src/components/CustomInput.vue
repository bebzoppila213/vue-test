<template>
    <div>
      <label for="exampleInputEmail1" class="form-label">{{label}}</label>
      <input
        @input="onInput"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
    </div>
</template>


<script>
export default {
    props: {
        label: String
    },

    methods:{
      onInput(event){
        this.$emit('changeInputValue', event.target.value)
      }
    }
}
</script>