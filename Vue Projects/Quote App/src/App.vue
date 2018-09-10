<template>
    <div class="container">
        <quote-header :quotes="quotes"></quote-header>
        <new-quote :quotes="quotes"></new-quote>
        <quote-display :quotes="quotes" :index="i" v-for="(quote,i) in quotes" :key="i">{{ quote }}</quote-display>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteHeader from './components/QuoteHeader.vue'
    import NewQuote from './components/NewQuote.vue'
    import QuoteDisplay from './components/QuoteDisplay.vue'

    export default {
        data() {
            return {
                quotes: ['sample quote']
            }
        },
        components: {
            quoteHeader: QuoteHeader,
            newQuote: NewQuote,
            quoteDisplay: QuoteDisplay
        }
    }
</script>

<style>
quote-header {
    margin-bottom: 15px;
}
</style>
