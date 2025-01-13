/**
 * Busca as tarefas por tipo, enviando uma solicitação GET para a API.
 *
 * @param {string} typeId - O ID do tipo das tarefas a serem buscadas.
 * @returns {JSON}  - um JSON contendo as tarefas.
 */
export default async (typeId) => {
    const { data, error } = await useFetch('/api/tasks', {
        query: { typeId }
    });

    if (error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Erro ao buscar tarefas"
        })
    }

    return data;

}