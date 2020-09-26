/**
 * get all the existsing trainee
 * request:
 *   - admin_id: the admin that getting all trainee
 *   - token: access token
 * response:
 *   - trainees:
 *     - trainee_id: the trainee who associated with the course
 *     - name: name of the trainee
 *   - status: 0 = success, 1 = access denied, 2 = error occurs
 */

import verifier from '../../utils/token-verifier.js'
import { models } from '../../db.js'

const { user, enrollment, Trainer } = models;

export default (req, res) => {

  const { token, user_id, course_id } = req.query

  if (!token || user_id === undefined || course_id === undefined) {
    return res.status(400).send('invalid usage')
  }

  const trainees = []
  
  verifier(token, (valid) => {
    if (!valid) return res.status(200).json({ status: 1 })
    get_type(user_id, res, (type) => {
      if (type !== 1) return res.status(200).send({ status: 1 })
      Trainer
        .findOne({ where: { userId: user_id }})
        .then((trainer) => {
          if(!trainer) return res.status(500).json({ status: 1 })
          enrollment
            .findAll({where : { course_id, trainer_id: trainer.id }})
            .then((models) => {
              if(!models) return res.status(500).json({ status: 1 })
              for (const model of models) {
                user
                  .findOne({ where: { id: model.user_id }})
                  .then((user) => {
                    const { id, name } = user
                    trainees.push({ trainee_id: id, name })
                    console.log(trainees)
                    if(model == models[models.length-1]){
                      console.log(trainees)
                      return res.status(200).send({ status: 0, trainees })
                    }
                  })
              }
              
            })
            .catch((error) => {
              console.log(error)
              res.status(500).json({ status: 2 })
            })
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
