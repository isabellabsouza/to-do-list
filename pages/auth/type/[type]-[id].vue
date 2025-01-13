<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const tasks = await useFetchTasks(route.params.id);

const { deleteTask } = useDeleteTasks();
const message = ref('');

const removeTask = async (id) => {
    try {
        const response = await deleteTask(id);
        if (response.success) {
            message.value = {
                success: true,
                message: 'Tarefa excluída com sucesso!'
            };
        } else {
            message.value = {
                success: false,
                message: `Erro: ${response.message}`
            };
        }
    } catch (error) {
        message.value = {
            success: false,
            message: error.message
        };
    } finally {
        setTimeout(() => {
            message.value = '';
        }, 3000);

        tasks.value = await useFetchTasks(route.params.id);
    }
};

const updateTaskStatus = async (id, newStatus) => {
    try {
        const response = await fetch(`/api/tasks/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            message.value = {
                success: false,
                message: 'Erro ao atualizar o status da tarefa'
            };
            return;
        }

        const data = await response.json();
        message.value = {
            success: true,
            message: `Status da tarefa atualizado para "${data.status}".`
        };
    } catch (error) {
        message.value = {
            success: false,
            message: `Erro ao atualizar o status.`
        };
    } finally {
        setTimeout(() => {
            message.value = '';
        }, 3000);
    }
};
</script>

<template>
    <div class="container-fluid p-5">
        <h2 class="my-4">Tarefas de {{ $route.params.type }}</h2>
        <!-- {{  tasks }} -->
        <Alert v-if="message" :message="message" />

        <div class="card-container">
            <div class="card mb-3" v-for="task in tasks" :key="task.id">
                <div class="card-body">
                    <h5 class="card-title">{{ task.title }}</h5>
                    <p class="card-text">Descrição: {{ task.description }}</p>
                    <p class="card-text">Status: 
                        <select class="form-select" v-model="task.status" @change="updateTaskStatus(task.id, task.status)">
                            <option value="Não iniciado">Não iniciado</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Concluído">Concluído</option>
                        </select>
                    </p>
                    <p class="card-text">Data Final: {{ new Date(task.date).toLocaleDateString() }}</p>
                    <button class="btn btn-dark me-2" style="background-color: var(--pink);" @click="removeTask(task.id)"><i class="bi bi-trash"></i></button>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}
</style>