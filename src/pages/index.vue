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


        <no-ssr>
            <contact-modal></contact-modal>
        </no-ssr>

    </article>
</template>

<script lang="ts">
    import { Component, Vue } from 'nuxt-property-decorator';
    import ContactModal from '../components/ContactModal.vue';
    import {State} from "vuex-class";
    import NoSSR from 'vue-no-ssr';

    @Component({
        filters: {
            currency(input: number): string {
                return input + ' CHF';
            },
        },
        components: {
            ContactModal,
            'no-ssr': NoSSR
        },
    })
    export default class Listing extends Vue {
        @State listing;
    }
</script>
