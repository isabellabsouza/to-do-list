/**
 * Busca os tipos cadastrados, enviando uma solicitação GET para a API.
 *
 * @returns {JSON}  - um JSON contendo os tipos.
 */
export default async () => {
    const {data, error} = await useFetch('/api/types/list')

    if(error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Erro ao buscar tipos"
        })
    }

    return data;

}