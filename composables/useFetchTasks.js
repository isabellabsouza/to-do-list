export default async (typeId) => {
    const {data, error} = await useFetch('/api/tasks', {
        query: {typeId}
    });

    if(error.value) {
        throw createError({
            ...error.value,
            statusMessage: "Erro ao buscar tarefas"
        })
    }

    return data;

}