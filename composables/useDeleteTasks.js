export default () => {
    const deleteTask = async (id) => {
      try {
        const response = await $fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        return response;
      } catch (error) {
        throw new Error('Erro ao excluir a tarefa.');
      }
    };
  
    return { deleteTask };
  };
  