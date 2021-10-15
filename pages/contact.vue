<template>
  <main class="w-10/12 m-auto mb-96">
    <div data-aos="fade-in">
      <h1 class="text-center text-3xl font-medium py-6 xl:py-10">Get in Touch!</h1>
    </div>

    <div class="text-container" data-aos="fade-in">
      <p class="text-center py-8">
        I'm currently available to do some freelance work, so don't hesitate to send me a message
        telling me a bit about your project!
      </p>
    </div>

    <form
      name="contact"
      ref="contactForm"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      enctype="application/x-www-form-urlencoded"
      class="max-w-lg mx-auto flex flex-col my-8"
      data-aos="fade-up"
    >
      <input type="hidden" name="form-name" value="contact" />

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

      <button
        @click.prevent="submitContactForm"
        class="my-12 btn btn-primary p-4 rounded-lg outline-none focus:outline-none"
      >
        Send
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
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

          this.$router.push('/contact/success');
        } catch (err) {
          console.log(err);
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
  @apply border-2 border-gray-200 rounded-md py-3 px-4 w-full outline-none;
  transition: border-color 300ms;
}

form .input:focus {
  @apply border-blue-400;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.form-validation-message {
  @apply text-red-500 mx-2;
}
</style>
