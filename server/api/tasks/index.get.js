import db from '~/models/index.js'

export default defineEventHandler((event) => {
  return db.Task.findAll({
    where: {
        userId: 1,
    }
  });
})

//TODO: filter by logged user