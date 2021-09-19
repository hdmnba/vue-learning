module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Cate = require('../../models/Cate')

    // 创建分类
    router.post('/cate', async (req, res) => {
        const model = await Cate.create(req.body)
        res.send(model)
    })

    // 修改分类
    router.put('/cate/:id', async (req, res) => {
        const model = await Cate.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    // 删除分类
    router.delete('/cate/:id', async (req, res) => {
        await Cate.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })

    // 查询分类列表
    router.get('/cate', async (req, res) => {
        const items = await Cate.find().limit(10)
        console.log(items)
        res.send(items)
    })

    // 根据ID查询单个分类
    router.get('/cate/:id', async (req, res) => {
        const model = await Cate.findById(req.params.id)
        res.send(model)
    })
    app.use('/admin/api', router)
}
