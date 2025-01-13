<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        route: {
            type: String,
            required: true
        },
    },
};
</script>

<template>
    <NuxtLink :to="route">
        <button type="button" class="btn btn-dark custom-button">
            <i class="bi bi-plus-lg"></i>
            {{ label }}
        </button>
    </NuxtLink>
</template>

<style scoped>
.custom-button {
    background-color: var(--dark-blue);
    border: none;
}

.custom-button:hover {
    background-color: var(--blue);
}
</style>