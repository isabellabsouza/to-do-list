<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
    },
};
</script>

<template>
    <button type="submit" class="btn btn-dark w-100 mt-3 custom-button">{{ label}}</button>
</template>

<style scoped>
.custom-button {
    background-color: var(--purple); 
    border: none;
}

.custom-button:hover {
    background-color: var(--purple-hover);
}
</style>