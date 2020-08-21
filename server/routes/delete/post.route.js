import {models} from '../../db.js';

const {post} = models;

export default (req, res) => {
    const id = req.params.id;

    if(id == null){
        post.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({
                    message: `${nums} of materials were deleted successfully`
                });
            })
            .catch(nums => {
                res.status(500).send({
                    message:
                        err.message || "Error occurred while deleting materials"
                });
            });
    }
    else{
        post.destroy({
            where: {
                id: id
            }
        })
            .then(num => {
                if(num == 1){
                    res.send({
                        message: "Material is deleted successfully"
                    });
                }
                else{
                    res.send({
                        message: `Cannot delete material with id = ${id}.` 
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete material with id =" + id
                });
            });
    }
};