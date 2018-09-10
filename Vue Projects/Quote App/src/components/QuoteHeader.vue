<template>
  <div>
    <h1>Quotes Added</h1>
    <div id="progressbar">
      <div :style="{width: this.quotes.length * 10 + '%'}">{{ this.quotes.length }}/10</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotes']
}
</script>

<style scoped>
#progressbar {
  background: lightgrey;
}
#progressbar div {
  background: green;
  width: 40%;
  height: 20px;
  text-align: center;
  color: white;
}
</style>
