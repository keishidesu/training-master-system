/**
 * get all the existsing trainer
 * request:
 *   - admin_id: the admin that getting all trainer
 *   - token: access token
 * response:
 *   - trainers:
 *     - trainer_id: the trainer who associated with the course
 *     - name: name of the trainer
 *   - status: 0 = success, 1 = access denied, 2 = error occurs
 */

import verifier from '../../utils/token-verifier.js'
import { models } from '../../db.js'

const { user } = models;

export default (req, res) => {

  const { token } = req.query

  if (!token || user_id === undefined) {
    return res.status(400).send('invalid usage')
  }
  
  verifier(token, (valid) => {
    if (!valid) return res.status(200).json({ status: 1 })
    get_type(user_id, res, (type) => {
      if (type !== 0) return res.status(200).send({ status: 1 })
      user
        .findAll({ where: { type: 1 } })
        .then((models) => {
          const trainers = []
          for (const model of models) {
            const { id, name } = model
            trainers.push({ trainer_id: id, name })
          }
          return res.status(200).send({ status: 0, trainers })
        })
        .catch((error) => {
          console.log(error)
          res.status(500).json({ status: 2 })
        })
    })
  })

}

const get_type = (id, res, callback) => {
  user
    .findOne({ where: { id } })
    .then((model) => {
      if (!model) return res.status(200).send({ status: 1 })
      callback(model.type)
    })
    .catch((error) => { 
      console.log(error)
      res.status(500).json({ status: 2 })
    })
}
