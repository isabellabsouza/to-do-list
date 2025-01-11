export default () => {
    const createTask = async (data) => {
      try {
        const response = await $fetch('/api/tasks/create', {
          method: 'POST',
          body: data,
        });
        return response;
      } catch (error) {
        throw new Error('Erro ao criar tarefa.');
      }
    };
  
    return { createTask };
  };
  