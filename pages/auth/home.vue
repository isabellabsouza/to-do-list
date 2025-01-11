<script setup>
import { ref } from 'vue';
const tasks = await useFetchTasks();

const message = ref('');
const { deleteTask } = useDeleteTasks();

const removeTask = async (id) => {
    try {
        const response = await deleteTask(id);
        if (response.success) {
            message.value = 'Tarefa excluída com sucesso!';
            // Remover a tarefa da lista local
            tasks.value = tasks.value.filter((task) => task.id !== id);
        } else {
            message.value = `Erro: ${response.message}`;
        }
    } catch (error) {
        message.value = error.message;
    }
};

</script>

<template>
    <h1>HOME</h1>
    <button class="btn btn-primary">Nova Tarefa</button>
    <h2>Listagem de tarefas</h2>
    {{ tasks }}


    <ul class="list-group">
        <li v-for="task in tasks" :key="task.id"
            class="list-group-item d-flex justify-content-between align-items-center">
            {{ task.title }}
            <button @click="removeTask(task.id)" class="btn btn-danger btn-sm">Excluir</button>
        </li>
    </ul>
    <p v-if="message">{{ message }}</p>
</template>