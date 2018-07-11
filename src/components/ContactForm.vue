<template>
    <div>
        <form id="contactform" class="contact-form" @submit="checkForm" action="/" novalidate="true">
            <div v-if="errors.length">
                <p>
                    <strong>Please correct the following error(s):</strong>
                </p>
                <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
            </div>

            <p>
                <label for="name">Name</label>
                <input v-model="name" name="name" id="name" type="text">
            </p>

            <p>
                <label for="email">Email</label>
                <input v-model="email" name="email" id="email" type="email" placeholder="email@example.com">
            </p>

            <p>
                <label for="message">Message
                    <small>(<span>{{ message.length }}</span> / <span>{{ maxLength }}</span>)</small>
                </label>
                <textarea v-model="message" name="message" id="message"></textarea>
            </p>

            <p>
                <button type="submit">Send</button>
            </p>
        </form>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "nuxt-property-decorator";

    @Component({})
    export default class ContactForm extends Vue {
        private errors: string[] = [];
        private name: string = "";
        private email: string = "";
        private message: string = "";
        private maxLength: number = 400;

        private checkForm(event: any) {
            this.errors = [];

            if (!this.name) {
                this.errors.push("Name required.");
            }

            if (!this.email) {
                this.errors.push("Email required.");
            } else if (!this.validEmail()) {
                this.errors.push("Valid email required.");
            }

            if (!this.errors.length) {
                return true;
            }

            event.preventDefault();
        }

        private validEmail() {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.email);
        }
    }
</script>

<style scoped lang="scss">
    %input {
        padding: 1em;
        font-size: 16px;
        display: block;
        width: 100%;
    }

    input,
    button,
    textarea {
        @extend %input;
    }

    input,
    textarea {
        border: 1px solid darken($color: white, $amount: 35%);
        background-color: darken($color: white, $amount: 1%);

        &:focus {
            background-color: white;
        }
    }

    button {
        background-color: red;
        color: white;
        font-weight: bold;
        border-radius: 3em;
        &:hover {
            background-color: darken($color: red, $amount: 10%);
        }
    }

    label {
        display: block;
    }
</style>
