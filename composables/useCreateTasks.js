
export default () => {
/**
 * Cria uma nova tarefa, enviando os dados fornecidos para a api.
 *
 * @param {Object} data - Os dados da nova tarefa (title, descirption, date, status, typeId).
 * @returns {Promise<Object>} - Um objeto contendo o status da resposta e os dados da tarefa criada.
 */

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
