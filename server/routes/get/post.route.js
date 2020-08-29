import {models} from '../../db.js';

const {post} = models;

export default (req, res) => {

    post.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred when retrieving all materials"
            });
        });
}