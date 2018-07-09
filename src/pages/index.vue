<template>
    <article>
        <header>
            <h2>{{ listing.title }}</h2>
        </header>

        <div class="article-body">
            <figure>
                <img :src="listing.imageUrl" alt="">
                <figcaption>{{ listing.imageCaption }}</figcaption>
            </figure>

            <h3>{{ listing.price | currency }}</h3>
            <p v-html="listing.description"></p>
        </div>


        <contact-form></contact-form>

    </article>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import ContactForm from '../components/ContactForm.vue';
    import {State} from "vuex-class";
    @Component({
        filters: {
            currency(input: number): string {
                return input + ' CHF';
            },
        },
        components: {
            ContactForm
        },
    })
    export default class Listing extends Vue {
        @State listing;
    }
</script>
