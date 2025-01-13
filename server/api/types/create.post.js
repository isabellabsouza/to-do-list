import { defineEventHandler, readBody } from 'h3';
import db from '~/models/index.js';

// POST /api/types/create
// Cria um novo tipo
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newType = await db.Type.create({
      title: body.title,
      color: body.color,
      userId: 1
    });

    return {
      success: true,
      data: newType,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
});
