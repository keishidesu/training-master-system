import {models} from '../../db.js';

const {post} = models;

export default (req, res) => {
    const id = req.params.id;

    post.update(req.body, {
        where: {
            id: id
        }
    })
        .then(num => {
            if (num == 1){
                res.send({
                    message: "Materials update successfully"
                });
            }
            else{
                res.send({
                    message: `Cannot update material with id = ${id}`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error when updating material with id = " + id
            });
        });
};