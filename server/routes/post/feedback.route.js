/**
 * create a new feedback post
 * request:
 *   - content: feedback content
 * response:
 *   - status: 0 = success, 1 = fail, 2 = error occurs
 */

import { models } from '../../db.js'

const { feedback } = models;

export default (req, res) => {
  const { title, content } = req.body;
  console.log(req.body);

  if(!content || !title) {
    res.status(400).send('Content cannot be empty');
    return
  }
  feedback
    .create({
      title: title,
      content: content
    })
    .then((data) => {
      res.status(200).json({ status: 0 })
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ status: 2 })
    })
}