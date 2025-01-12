<script setup>
import { ref } from 'vue';

// Definindo variáveis reativas para os campos do formulário
const title = ref('');
const description = ref('');
const date = ref('');
const status = ref('');
const message = ref('');

// Usando o composable 'useTask' para criar a tarefa
const { createTask } = useCreateTasks();

// Função para submeter o formulário
const submitForm = async () => {
  try {
    const response = await createTask({
      title: title.value,
      description: description.value,
      date: date.value,
      status: status.value,
    });

    if (response.success) {
      message.value = 'Tarefa criada com sucesso!';
    } else {
      message.value = `Erro: ${response.message}`;
    }
  } catch (error) {
    message.value = error.message;
  }
};
</script>

<template>
  <h1>Nova Tarefa</h1>

  <form @submit.prevent="submitForm">
    <!-- Campo Nome -->
    <div class="mb-3">
      <label for="title" class="form-label">Título</label>
      <input v-model="title" type="text" class="form-control" id="title" placeholder="Digite o título" required />
    </div>

    <div class="mb-3">
      <label for="description" class="form-label">Descrição</label>
      <textarea v-model="description" type="text" class="form-control" id="description" placeholder="Digite o título" required />
    </div>

    <!-- Campo Data -->
    <div class="mb-3">
      <label for="date" class="form-label">Data</label>
      <input v-model="date" type="date" class="form-control" id="date" required />
    </div>

    <!-- Campo Status -->
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select v-model="status" class="form-select" id="status" required>
        <option value="" disabled>Selecione o status</option>
        <option value="Não iniciado">Não iniciado</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Concluído">Concluído</option>
      </select>
    </div>

    <!-- Campo Tipo -->
    <!-- <div class="mb-3">
      <label for="type" class="form-label">Tipo</label>
      <select v-model="type" class="form-select" id="type" required>
        <option value="" disabled>Selecione o tipo</option>
        <option value="admin">Admin</option>
        <option value="user">Usuário</option>
        <option value="guest">Convidado</option>
      </select>
    </div> -->

    <!-- Botão de Submissão -->
    <button type="submit" class="btn btn-primary w-100">Salvar</button>
  </form>

  <p v-if="message">{{ message }}</p>
</template>
