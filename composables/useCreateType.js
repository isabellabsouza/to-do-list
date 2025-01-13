export default () => {
    /**
     * Cria um novo tipo, enviando os dados fornecidos para a api.
     *
     * @param {Object} data - Os dados da nova tarefa (title, color).
     * @returns {Promise<Object>} - Um objeto contendo o status da resposta e os dados do tipo criado.
     */
    const createType = async (data) => {
        try {
            const response = await $fetch('/api/types/create', {
                method: 'POST',
                body: data,
            });
            return response;
        } catch (error) {
            throw new Error('Erro ao criar o tipo.');
        }
    };

    return { createType };
};
