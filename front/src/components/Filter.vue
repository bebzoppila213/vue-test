<template>
  <form class="form">
    <CustomInputVue @changeInputValue="text => updateFilterText(text)" label="Текст" />
    <CustomSelectVue @selectChange="value => this.setFilterField({key: 'country', value})" :options="getUserCountries" />
  </form>
</template>


<script>
import CustomInputVue from "./CustomInput.vue";
import CustomSelectVue from "./CustomSelect.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    CustomInputVue,
    CustomSelectVue,
  },

  created(){
    console.log(this.setFilterField);
  },

  data: () => {
    return {
    };
  },
  methods:{
    ...mapMutations(["setFilterField", 'updateFilterText']),
  },

  computed: {
    ...mapGetters(["getUserCountries"]),
  },
};
</script>


<style>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-direction: column;
}
</style>