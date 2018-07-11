<template>
    <div>
        <button-modal class="button-modal" v-on:click="openModal">Contact us</button-modal>

        <sweet-modal title="This is a Tabbed Modal" ref="modalExample">
            <sweet-modal-tab title="Contact form" id="tab1">
                <contact-form></contact-form>
            </sweet-modal-tab>
            <sweet-modal-tab title="Another tab" id="tab2">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Disabled tab" id="tab3" disabled>Tab 3 is disabled</sweet-modal-tab>
        </sweet-modal>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "nuxt-property-decorator";
    import {SweetModal, SweetModalTab} from "sweet-modal-vue";
    import ButtonModal from "./Button.vue";
    import ContactForm from "./ContactForm.vue";

    // use ContactFormBase as a workaround for incorporating methods:
    // -- couldn't get it to work directly within the class.
    const ContactFormBase = Vue.extend({
        methods: {
            openModal() {
                this.$refs.modalExample.open();
            }
        },
    });

    @Component({
        components: {
            SweetModal,
            SweetModalTab,
            ButtonModal,
            ContactForm
        }
    })
    export default class ContactModal extends ContactFormBase {
        private errors: string[] = [];
        private name: string = "";
        private email: string = "";

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
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    .contact-form {
        clear: both;
        padding: 1em;
        background-color: white;
        box-shadow: 0 2px 3px 0 rgba($color: #000000, $alpha: 0.15);
    }
</style>
