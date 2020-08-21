import {models} from '../../db.js';

const {post} = models;

export default (req, res) => {
    const id = req.params.id;
    
    if(id == null){
        const title = req.query.title;
        var condition = title ? {title: {[Op.like]: `%${title}%`}} : null;
        post.findAll({
            where: condition
        })
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
    else{
        post.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving materials with id = " + id
                });
            });
    }
}