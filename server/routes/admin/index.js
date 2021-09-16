module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const Cate = require('../../models/Cate');
    router.post('/cate', async (req, res) => {
        const model = await Cate.create(req.body);
        res.send(model);
    });

    router.get('/cate', async (req, res) => {
        console.log('cate')
        const items = await Cate.find().limit(10);
        console.log(items);
        res.send(items);
    });
    app.use('/admin/api', router);
};
