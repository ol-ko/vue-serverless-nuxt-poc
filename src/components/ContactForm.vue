<template>
    <div>
      <button-modal class="button-modal" v-on:click="openModal">Open Modal</button-modal>
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
      <sweet-modal title="This is a Tabbed Modal" ref="modalExample">
          <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons.hexagon">Contents of Tab 1</sweet-modal-tab>
          <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons.flower">Contents of Tab 2</sweet-modal-tab>
          <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons.compare" disabled>Tab 3 is disabled</sweet-modal-tab>
          <!-- icons is an object containing SVG strings -->
      </sweet-modal>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { SweetModal, SweetModalTab } from "sweet-modal-vue";
import ButtonModal from "./Button.vue";

// use ContactFormBase as a workaround for incorporating methods: 
// -- couldn't get it to work directly within the class.
const ContactFormBase = Vue.extend({
  methods: {
    openModal() {
      this.$refs.modalExample.open();
    }
  }
});

@Component({
  components: {
    SweetModal,
    SweetModalTab,
    ButtonModal
  },
  computed: {
    icons() {
      return {
        hexagon:
          '<svg viewBox="0 0 24 24"><path fill="#000000" d="M10.25,2C10.44,2 10.61,2.11 10.69,2.26L12.91,6.22L13,6.5L12.91,6.78L10.69,10.74C10.61,10.89 10.44,11 10.25,11H5.75C5.56,11 5.39,10.89 5.31,10.74L3.09,6.78L3,6.5L3.09,6.22L5.31,2.26C5.39,2.11 5.56,2 5.75,2H10.25M10.25,13C10.44,13 10.61,13.11 10.69,13.26L12.91,17.22L13,17.5L12.91,17.78L10.69,21.74C10.61,21.89 10.44,22 10.25,22H5.75C5.56,22 5.39,21.89 5.31,21.74L3.09,17.78L3,17.5L3.09,17.22L5.31,13.26C5.39,13.11 5.56,13 5.75,13H10.25M19.5,7.5C19.69,7.5 19.86,7.61 19.94,7.76L22.16,11.72L22.25,12L22.16,12.28L19.94,16.24C19.86,16.39 19.69,16.5 19.5,16.5H15C14.81,16.5 14.64,16.39 14.56,16.24L12.34,12.28L12.25,12L12.34,11.72L14.56,7.76C14.64,7.61 14.81,7.5 15,7.5H19.5Z" /></svg>',
        flower:
          '<svg viewBox="0 0 24 24"><path fill="#000000" d="M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M18.7,12.4C18.42,12.24 18.13,12.11 17.84,12C18.13,11.89 18.42,11.76 18.7,11.6C20.62,10.5 21.69,8.5 21.7,6.41C19.91,5.38 17.63,5.3 15.7,6.41C15.42,6.57 15.16,6.76 14.92,6.95C14.97,6.64 15,6.32 15,6C15,3.78 13.79,1.85 12,0.81C10.21,1.85 9,3.78 9,6C9,6.32 9.03,6.64 9.08,6.95C8.84,6.75 8.58,6.56 8.3,6.4C6.38,5.29 4.1,5.37 2.3,6.4C2.3,8.47 3.37,10.5 5.3,11.59C5.58,11.75 5.87,11.88 6.16,12C5.87,12.1 5.58,12.23 5.3,12.39C3.38,13.5 2.31,15.5 2.3,17.58C4.09,18.61 6.37,18.69 8.3,17.58C8.58,17.42 8.84,17.23 9.08,17.04C9.03,17.36 9,17.68 9,18C9,20.22 10.21,22.15 12,23.19C13.79,22.15 15,20.22 15,18C15,17.68 14.97,17.36 14.92,17.05C15.16,17.25 15.42,17.43 15.7,17.59C17.62,18.7 19.9,18.62 21.7,17.59C21.69,15.5 20.62,13.5 18.7,12.4Z" /></svg>',
        compare:
          '<svg viewBox="0 0 24 24"><path fill="#000000" d="M19,3H14V5H19V18L14,12V21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,18H5L10,12M10,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H10V23H12V1H10V3Z" /></svg>'
      };
    }
  },
})
export default class ContactForm extends ContactFormBase {
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

.button-modal {
  float: right;
}
</style>
