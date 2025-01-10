// import db from '../../models/index.js'
import db from '~/models/index.js'

export default defineEventHandler((event) => {
  return db.User.findAll();
})