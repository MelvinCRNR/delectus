<template>
  <div>
    <div class="jumbotron">
        <h1 class="font-weight-bold">Test - CRENIER Melvin</h1>
      <div class="card">
        <div class="card-body">
            <span class="badge bg-secondary p-1 m-2" v-for="titre in arrayTitlte" v-bind:key="titre"> {{titre}}  <button class="btn btn-danger btn-sm" @click="removeTitle(titre)">x</button></span>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todos: [],
      title: "",
      arrayTitlte: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          this.todos = response.data;
          this.title = this.todos[0].title;
          this.arrayTitlte = this.title.match(/("[^"]+"|[^"\s]+)/g);
        });
    },
    removeTitle(title) {
        var index = this.arrayTitlte.indexOf(title)
        this.arrayTitlte.splice(index, 1)
    }
  },
};
</script>

<style>
</style>