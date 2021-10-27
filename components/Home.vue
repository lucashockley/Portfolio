<template>
  <div id="home">
    <div data-aos="fade-up">
      <div class="text-2xl md:text-3xl max-w-3xl xl:-mt-44">
        <h1
          @mouseenter="animateWave = true"
          :class="{ wave: animateWave }"
          class="text-4xl w-min select-none"
          ref="hand"
        >
          👋
        </h1>

        <div data-aos="fade-up" data-aos-delay="100">
          <h1 class="font-medium my-4 pt-12">My name is Lucas Hockley</h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h1 class="text-xl py-2 text-gray-600 dark:text-gray-300">
            I'm a full stack web developer from the UK, who enjoys making beautiful and interesting
            things for the web. Currently I'm studying Computer Science at the University of Leeds.
          </h1>
        </div>
      </div>

      <div class="my-14" data-aos="fade-up" data-aos-delay="300">
        <a href="#projects" class="btn btn-primary mr-3">Projects</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animateWave: false,
    };
  },
  mounted() {
    this.$refs.hand.addEventListener('animationend', () => {
      this.animateWave = false;
    });

    setTimeout(() => {
      this.animateWave = true;
    }, 800);

    setInterval(() => {
      this.animateWave = true;
    }, 5000);
  },
};
</script>

<style>
#home {
  @apply mx-auto w-4/5 md:w-1/2 flex items-center;
  min-height: 100vh;
}

.wave {
  animation: wave 900ms cubic-bezier(0.39, 0.575, 0.565, 1);
}

@keyframes wave {
  from {
    transform: rotateZ(0deg);
  }

  30% {
    transform: rotateZ(35deg);
  }

  50% {
    transform: rotateZ(0deg);
  }

  70% {
    transform: rotateZ(35deg);
  }

  to {
    transform: rotateZ(0deg);
  }
}
</style>
