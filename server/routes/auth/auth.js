import { models } from '../../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import express from 'express';

const router = express();
// const { user } = models;
const jwtToken = 'This-is-a-secret';

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if(!email || !password)
        return res.status(400).json({
            type: 'error',
            message: 'email and password fields are essential for authentication'
        });

    models.user.findOne({where: {
        email: email
    }})
        .then((data) => {
            bcrypt.compare(password, data.password, (err, result) => {
                if(err)
                    return res.status(500).json({
                        type: 'error',
                        message: 'bcrypt error', 
                        err
                    });
                if(result){
                    res.json({
                        type: 'success',
                        message: 'Logged in',
                        user: {
                            id: data.id,
                            email: data.email
                        },
                        token: jwt.sign({
                            id: data.id,
                            email: data.email
                        }, jwtToken)
                    });
                }
                else{
                    res.status(403).json({
                        type: 'error',
                        message: 'Either email or password is incorrect'
                    })
                }
            });
        })
        .catch(err => {
            return res.status(500).send({
                message:
                    err.message || 'Cannot find user'
            })
        })
});

router.get('/me', (req, res) => {
    const token = req.headers['x-access-token']
    if(!token)
        return res.status(401).json({
            type: 'error',
            message: 'Header not found'
        });
    
    jwt.verify(token, jwtToken, (err, result) => {
        if(err)
            return res.status(403).json({
                type: 'error',
                message: 'Token is invalid',
                err
            });
        return res.json({
            type: 'success',
            message: 'Provided token is valid',
            result
        });
    });
});

export default router;