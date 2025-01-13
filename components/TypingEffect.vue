<template>
    <div>
        <span ref="typed"></span>
    </div>
</template>

<script>
import Typed from "typed.js";

export default {
    props: {
        strings: {
            type: Array,
            required: true,
        },
        typeSpeed: {
            type: Number,
            default: 40,
        },
        backSpeed: {
            type: Number,
            default: 50,
        },
        loop: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.typed = new Typed(this.$refs.typed, {
            strings: this.strings,
            typeSpeed: this.typeSpeed,
            backSpeed: this.backSpeed,
            loop: this.loop,
        });
    },
    beforeDestroy() {
        this.typed.destroy();
    },
};
</script>

<style scoped>
/* Personalize o estilo do texto digitado, se necessário */
</style>