<template>
  <div class="card" @click="deleteQuote">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['quotes','index'],
  methods: {
    deleteQuote() {
      this.quotes.splice(this.index, 1);
    }
  }
}
</script>

<style>
.card {
  border: 1px solid black;
  border-radius: 10px;
  min-width: 100px;
  height: 100px;
  display: inline-block;
  margin: 15px;
  padding: 10px;
  cursor: pointer;
  font-family: 'Arizonia', cursive;
  font-size: 20px;
}
.card:hover {
  background: #ffe2e2;
}
</style>
