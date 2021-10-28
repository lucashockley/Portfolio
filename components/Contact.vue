<template>
  <section id="contact" class="mb-48">
    <div data-aos="fade-in">
      <h1 class="section-title">Get in Touch!</h1>
    </div>

    <div data-aos="fade-up">
      <p class="text-container text-center py-8">
        I'm currently looking for undergraduate summer internships, so please do reach out if you
        have open positions! I'm also available to take on some freelance work, so feel free to send
        me a message telling me a bit about your project.
      </p>
    </div>

    <form
      name="contact"
      ref="contactForm"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      class="mx-auto max-w-md my-8 flex items-center flex-col"
      data-aos="fade-up"
    >
      <input type="hidden" name="form-name" value="contact" />

      <div class="flex flex-col w-full">
        <div>
          <label for="name" class="label">
            <span>Name</span>

            <transition name="fade" appear>
              <span v-if="validateForm && !formData.name" class="form-validation-message">
                Required
              </span>
            </transition>
          </label>

          <input v-model="formData.name" type="text" id="name" class="input" />
        </div>

        <div>
          <label for="email" class="label">
            <span>Email</span>

            <transition name="fade" appear mode="out-in">
              <span
                v-if="validateForm && !formData.email"
                class="form-validation-message"
                key="required"
              >
                Required
              </span>

              <span
                v-if="validateForm && formData.email && isInvalidEmail()"
                class="form-validation-message"
                key="invalid"
              >
                Invalid Email
              </span>
            </transition>
          </label>

          <input v-model="formData.email" type="text" id="email" class="input" />
        </div>

        <div>
          <label for="message" class="label">
            <span>Message</span>

            <transition name="fade" appear>
              <span v-if="validateForm && !formData.message" class="form-validation-message">
                Required
              </span>
            </transition>
          </label>

          <textarea
            v-model="formData.message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            class="input"
          ></textarea>
        </div>
      </div>

      <button @click.prevent="submitContactForm" class="my-12 btn btn-primary p-4 rounded w-max">
        Send
      </button>
    </form>

    <button @click="addNotification({ content: 'asdfasdfasdfasdf asdf asdf asdf asdf asdfasd' })">
      Add
    </button>
  </section>
</template>

<script>
export default {
  props: ['addNotification'],
  data() {
    return {
      canSendMessage: true,
      messageTimeout: undefined,
      validateForm: false,
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    encode(data) {
      const formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      return formData;
    },
    isInvalidEmail() {
      const validEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return !validEmail.test(this.formData.email);
    },
    async submitContactForm() {
      if (!this.canSendMessage) {
        if (this.messageTimeout) {
          clearTimeout(this.messageTimeout);

          this.messageTimeout = setTimeout(() => {
            this.canSendMessage = true;
          }, 2000);
        }

        return this.addNotification({
          content: 'Please wait a little while before sending another message',
          error: true,
        });
      }

      this.validateForm = true;

      if (
        this.formData.name &&
        this.formData.email &&
        !this.isInvalidEmail() &&
        this.formData.message
      ) {
        try {
          await this.$axios.post(
            location.origin,
            this.encode({
              'form-name': 'contact',
              ...this.formData,
            }),
            {
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            }
          );

          this.addNotification({
            content: 'Message sent! 🥳',
            success: true,
          });

          this.canSendMessage = false;

          this.messageTimeout = setTimeout(() => {
            this.canSendMessage = true;
          }, 8000);
        } catch (err) {
          this.addNotification({
            content: 'There was an error sending that message',
            error: true,
          });
        }
      }
    },
  },
};
</script>

<style>
form .label {
  @apply px-2 py-4 inline-block;
}

form .input {
  @apply border-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 rounded-md py-3 px-4 w-full outline-none;
  transition: all 300ms;
  transition-property: background-color, border-color;
}

form .input:focus {
  @apply border-blue-400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.form-validation-message {
  @apply text-red-500 mx-2;
}
</style>
