/**
 * Busca os tipos e suas respectivas tarefas, enviando uma solicitação GET para a API.
 *
 * @returns {JSON}  - um JSON contendo as tarefas.
 */
export default async () => {
    const {data, error} = await useFetch('/api/types');

    if(error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Erro ao buscar tarefas"
        })
    }

    return data;

}