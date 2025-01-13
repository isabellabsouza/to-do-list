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