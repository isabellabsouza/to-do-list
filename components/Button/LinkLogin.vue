<script>
export default {
    props: {
        route: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
    },
};
</script>

<template>
    <NuxtLink :to="route">
        <button type="button" class="btn btn-outline-dark mt-3 custom-button">{{ label }}</button>
    </NuxtLink>
</template>

<style scoped>
.custom-button {
    border-radius: 50px;
    border-color: white;
    padding: 8px 17px;
    color: white;
}
</style>