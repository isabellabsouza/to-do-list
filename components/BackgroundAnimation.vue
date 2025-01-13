<template>
    <div class="bg-animation" @mousemove="handleMouseMove" :style="backgroundStyle">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            mouseX: 0,
            mouseY: 0,
        };
    },
    computed: {
        backgroundStyle() {
            return {
                background: `radial-gradient(circle at ${this.mouseX}px ${this.mouseY}px, rgba(255, 200, 221, 0.9), rgba(0, 0, 0, 0.9))`,
            };
        },
    },
    methods: {
        handleMouseMove(event) {
            this.mouseX = event.clientX-5;
            this.mouseY = event.clientY-5;
        },
    },
};
</script>

<style scoped>
.bg-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
}
</style>