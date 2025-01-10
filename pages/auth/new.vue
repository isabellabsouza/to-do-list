<template>
    <h1>Nova Tarefa</h1>

    <form>
            <!-- Campo Nome -->
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input type="text" class="form-control" id="name" placeholder="Digite seu nome" required>
            </div>

            <!-- Campo Data -->
            <div class="mb-3">
              <label for="date" class="form-label">Data</label>
              <input type="date" class="form-control" id="date" required>
            </div>

            <!-- Campo Status -->
            <div class="mb-3">
              <label for="status" class="form-label">Status</label>
              <select class="form-select" id="status" required>
                <option value="" disabled selected>Selecione o status</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="pendente">Pendente</option>
              </select>
            </div>

            <!-- Campo Tipo -->
            <div class="mb-3">
              <label for="type" class="form-label">Tipo</label>
              <select class="form-select" id="type" required>
                <option value="" disabled selected>Selecione o tipo</option>
                <option value="admin">Admin</option>
                <option value="user">Usuário</option>
                <option value="guest">Convidado</option>
              </select>
            </div>

            <!-- Botão de Submissão -->
            <button type="submit" class="btn btn-primary w-100">Salvar</button>
          </form>
</template>