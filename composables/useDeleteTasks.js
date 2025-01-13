export default () => {

    /**
     * Exclui uma tarefa com o ID fornecido, enviando uma solicitação DELETE para a API.
     *
     * @param {string} id - O ID da tarefa a ser excluída.
     * @returns {Promise<Object>} - Um objeto contendo o status da resposta da exclusão.
     * @throws {Error} - Lança um erro se a exclusão da tarefa falhar.
     */

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
