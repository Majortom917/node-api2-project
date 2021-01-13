const express = require('express')

//const Helper = require('./db-helpers')
const router = express.Router()

router.get('/', (req, res)=>{
    Helper.find()
    .then(posts =>{
        res.status(200).json(posts)
    })
    .catch(err =>{
        console.log(err)
        res.status(500).json({
            message: 'Error retrieving posts'
        })
    })
})

module.exports = router