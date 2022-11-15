<template>
  <div>
    <Frilter />
    <LoaderVue v-if="getLoading" />

    <TransitionGroup class="user-inner" name="list" tag="div">
      <Users
        :adress="user.adress"
        :country="user.country"
        :img="user.avatar"
        :subtitle="user.subtitle"
        :title="user.title"
        :key="user.id"
        v-for="user in getAllUsers"
      />
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Users from "./components/Users";
import LoaderVue from "./components/Loader.vue";
import Frilter from "./components/Filter.vue";
export default {
  name: "App",

  created() {
    this.loadUsers();
    console.log();
  },

  components: {
    Users,
    LoaderVue,
    Frilter,
  },

  computed: {
    ...mapGetters(["getAllUsers", "getLoading"]),
  },

  methods: {
    ...mapActions(["loadUsers"]),
  },
};
</script>


<style>
.user-inner {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
