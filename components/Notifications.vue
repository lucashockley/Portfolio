<template>
  <transition-group name="slide" tag="div" class="fixed z-10 select-none w-full duration-300">
    <div
      v-for="notification in notifications.slice().reverse()"
      :key="notification.id"
      class="notification bg-gray-800"
      :class="{
        'bg-success': notification.success,
        'bg-red-500': notification.error,
      }"
    >
      <span>{{ notification.content }}</span>
      <button @click="removeNotification(notification.id)" class="material-icons-round close-icon">
        close
      </button>
    </div>
  </transition-group>
</template>

<script>
export default {
  props: ['notifications', 'removeNotification'],
};
</script>

<style>
.notification {
  @apply py-3 px-5 text-white m-4 rounded flex items-center justify-center;
  width: fit-content;
}

.close-icon {
  @apply ml-3 cursor-pointer duration-200 opacity-60 hover:opacity-90;
  font-size: 18px;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-150%);
}

.slide-enter-active {
  transition: 400ms;
}

.slide-leave-active {
  transition: 400ms;
  position: absolute;
}

.slide-move {
  transition: transform 300ms;
}
</style>
