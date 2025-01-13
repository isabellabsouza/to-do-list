<script setup>
import { ref } from 'vue';
const tasks = await useFetchTasksByType();

const message = ref('');

const updateTaskStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Concluído' ?  'Em andamento' : 'Concluído';
    const task = tasks.value.flatMap(group => group.tasks).find(task => task.id === id);
    
    try {
        const response = await fetch(`/api/tasks/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar o status da tarefa');
        }

        const updatedTask = tasks.value.flatMap(group => group.tasks).find(task => task.id === id);
        if (updatedTask) {
            updatedTask.status = newStatus;
        }

        message.value = {
            success: true,
            message: `Status da tarefa "${updatedTask.title}" atualizado para "${newStatus}".`
        };
    } catch (error) {
        console.error('Erro ao atualizar o status:', error);
        message.value = {
            success: false,
            message: 'Erro ao atualizar o status. Tente novamente.'
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

        <ButtonAction label="Nova Tarefa" route="/auth/create" />

        <h2 class="my-4">Suas tarefas</h2>

        <Alert :message="message" />
        <!-- {{ tasks }} -->

        <div v-if="tasks && Object.keys(tasks).length > 0">
            <div class="row">
                <div v-for="(group, typeId) in tasks" :key="typeId" class="col-md-4 mb-4 custom-card" >
                    <div class="card pt-3 " :style="{ backgroundColor: group.color }">
                        <div class="card-header text-center">
                            <NuxtLink :to="`/auth/type/${group.title}-${group.id}`" style="text-decoration: none">
                                <h5 style="cursor: pointer; color: white">{{ group.title }}</h5>
                            </NuxtLink>
                        </div>

                        <div class="card-body">
                            <ul>
                                <li v-for="task in group.tasks" :key="task.id" class="list-group-item">

                                    <div class="d-flex gap-2">
                                        <input type="checkbox" :checked="task.status === 'Concluído'"
                                            @change="updateTaskStatus(task.id, task.status)" />
                                        <p :class="{ 'text-decoration-line-through': task.status === 'Concluído' }" class="mb-0">
                                            {{ task.title }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-card {
    transition: background-color 0.3s ease;
}

.custom-card:hover {
    filter: brightness(1.5);
}
</style>