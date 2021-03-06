/**
 * get all the existsing courses
 * request:
 *   - token: access token
 * response:
 *   - courses:
 *     - id: the course id
 *     - trainer_id: the trainer who associated with the course
 *     - admin_id: the admin who created the course
 *     - title: title of the course
 *     - desc: course description
 *   - status: 0 = success, 1 = access denied, 2 = error occurs
 */

import verifier from '../../utils/token-verifier.js'
import { models } from '../../db.js'

const { course } = models;

export default (req, res) => {

  const { token } = req.query

  if (!token) {
    return res.status(400).send('invalid usage')
  }

  verifier(token, (valid) => {
    if (!valid) return res.status(200).json({ status: 1 })
    course
      .findAll()
      .then((models) => {
        const courses = []
        for (const model of models) {
          const { id, trainer_id, admin_id, title, desc, duration, status } = model
          courses.push({ id, trainer_id, admin_id, title, desc, duration, status })
        }
        res.status(200).json({ status: 0, courses })
      })
      .catch((error) => { 
        console.log(error)
        res.status(500).json({ status: 2 })
      })
  })

}