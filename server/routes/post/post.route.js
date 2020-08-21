import {models} from '../../db.js';

const {post} = models;

export default (req, res) => {
    if(!req.body.title || !req.body.content){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //post Material
    const Material = {
        title: req.body.title,
        content: req.body.content
    };

    //save post in database
    post.create(Material)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occurred when posting material"
            });
        });
};