<script>
import TypingEffect from "~/components/TypingEffect.vue";

export default {
    components: {
        TypingEffect,
    },
};

definePageMeta({
    layout: "unrestricted",
})
</script>

<template>
    <div class="
        container 
        container-fluid 
        position-absolute 
        top-50 
        start-50 
        translate-middle 
        d-flex 
        flex-column 
        align-items-center 
        justify-content-center 
        text-center">
        <h1 class="display-2" style="font-weight: 700;">Super Task</h1>
        <h2 class="mt-3">
            <TypingEffect :strings="[
                'Organize suas tarefas de forma eficiente',
                'Organize suas tarefas de forma rápida',
                'Organize suas tarefas de forma simples']" />
        </h2>
        <ButtonLinkLogin route="/auth/login" label="Começar"/>
    </div>

</template>