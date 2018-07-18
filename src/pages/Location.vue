<template>
    <article>
        <header>
            <h2>{{ listing.title }}</h2>
        </header>

        <div class="article-body">
            <p>
                {{ listing.address }}
            </p>
        </div>
    </article>
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator"
    import {State} from "vuex-class"

    @Component({})
    export default class extends Vue {
        @State listing
    }
</script>

<style scoped>
    .header {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
