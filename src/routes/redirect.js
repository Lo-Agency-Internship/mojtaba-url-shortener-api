const { Logger } = require('@lo-agency/logger');
const express = require('express');
const {getData} = require('../database/queryBuilder');
const router = express.Router();

const TABLENAME = 'urls';

router.get('/:urlCode', (req, res) => {
    try {
        let url = getData(TABLENAME, '*', 'urlCode', req.params.urlCode);
        if(url.length !==0){
            // perform a redirect
            return res.redirect(url[0].longUrl);
            console.log(url);
        }else{
            Logger.info(`There is no URL with the urlcode: : ${req.params.urlCode}`);
            res.status(401).json({message: `There is no URL with the urlcode:  ${req.params.urlCode}`})
        }
    } catch (err) {
        Logger.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
});

module.exports = router;