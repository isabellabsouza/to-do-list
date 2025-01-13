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