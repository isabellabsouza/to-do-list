import { defineEventHandler } from 'h3';
import db from '~/models/index.js';

export default defineEventHandler(async (event) => {
  try {
    const { id } = event.context.params;

    const deletedTask = await db.Task.destroy({
      where: { id: id },
    });

    return {
      success: true,
      message: 'Tarefa excluída com sucesso.',
    };
  } catch (error) {
    return {
      success: false,
      message: `Erro ao excluir tarefa: ${error.message}`,
    };
  }
});
