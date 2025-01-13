<script setup>
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const date = ref('');
const status = ref('');
const message = ref('');
const typeId = ref('');
const types = await useFetchTypes();

const { createTask } = useCreateTasks();

// Função para criar uma nova tarefa
const submitForm = async () => {
    try {
        const response = await createTask({
            title: title.value,
            description: description.value,
            date: date.value,
            status: status.value,
            typeId: typeId.value
        });

        if (response.success) {
            message.value = {
                success: true,
                message: 'Tarefa criada com sucesso!'
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
        title.value = '';
        description.value = '';
        date.value = '';
        status.value = '';
        typeId.value = '';

        setTimeout(() => {
            message.value = '';
        }, 3000);
    }
};
</script>

<template>
    <div class="container-fluid p-5">


        <h2>Nova Tarefa</h2>

        <Alert :message="message" />

        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="title" class="form-label">Título</label>
                <input v-model="title" type="text" class="form-control" id="title" placeholder="Digite o título"
                    required />
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Descrição</label>
                <textarea v-model="description" type="text" class="form-control" id="description"
                    placeholder="Digite o título" required />
            </div>

            <div class="mb-3">
                <label for="date" class="form-label">Data</label>
                <input v-model="date" type="date" class="form-control" id="date" required />
            </div>

            <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select v-model="status" class="form-select" id="status" required>
                    <option value="" disabled>Selecione o status</option>
                    <option value="Não iniciado">Não iniciado</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Concluído">Concluído</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="type" class="form-label">Tipo</label>
                <select v-model="typeId" class="form-select" id="type" required>
                    <option value="" disabled>Selecione o tipo</option>
                    <option v-for="type in types" :key="type.id" :value="type.id">{{ type.title }}</option>
                </select>
            </div>

            <ButtonSubmit label="Salvar" />

        </form>

    </div>
</template>
