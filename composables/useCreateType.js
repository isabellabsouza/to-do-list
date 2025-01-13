export default () => {
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
  