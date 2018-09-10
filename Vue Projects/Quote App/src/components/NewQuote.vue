<template>
  <div class="newQuote">
    <h4>Quote</h4>
    <form action="">
      <textarea v-model="quote" @keyup.enter="addQuote"></textarea><br>
      <button @click.prevent="addQuote">Add Quote</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    addQuote() {
      if (this.quotes.length >= 10) {
        alert('Maximum of ten quotes');
        this.quote = '';
        return;
      }
      this.quotes.push(this.quote);
      this.quote = '';
    }
  }
}
</script>

<style scoped>
.newQuote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.newQuote textarea {
  width: 200px;
  height: 75px;
}
.newQuote button {
  display: block;
  margin: 0 auto;
}
</style>
