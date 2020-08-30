/**
 * create a new feedback
 * request:
 *   - content: feedback content
 * response:
 *   - status: 0 = success, 1 = fail, 2 = error occurs
 */

import { models } from '../../db.js'

const { feedback } = models;

export default (req, res) => {
  const id = null; // req.params.id
  console.log(id);
  
  if(id == null) {
    feedback
    .findAll()
    .then(data => {
      res.status(200).json(data);
      console.log('data: ' + data);
      return
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json('Error retrieving feedback');
    })
  }
  else {
    feedback
    .findByPk(id) 
    .then(data => {
      res.status(200).json(data);
      console.log(data);
      return
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json('Error retrieving feedback with id = ' + id);
    })
  }
}