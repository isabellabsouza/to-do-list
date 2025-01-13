<script>
export default {
    props: {
        message: {
            type: Object,
            required: true
        }
    }
}

</script>

<template>
    <div v-if="message" class="alert" :class="message.success ? 'alert-success' : 'alert-danger'" id="message-alert" role="alert">
      {{ message.message }}
    </div>
</template>