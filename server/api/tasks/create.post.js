import { defineEventHandler, readBody } from 'h3';
import db from '~/models/index.js';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const newTask = await db.Task.create({
      title: body.title,
      description: body.description,
      date: body.date,
      status: body.status,
      typeId: body.typeId,
      userId: 1
    });

    return {
      success: true,
      data: newTask,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
});
