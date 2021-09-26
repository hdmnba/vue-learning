module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true,
    })
    const Category = require('../../models/Category')

    // 创建分类
    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body)
        res.send(model)
    })

    // 修改分类
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })

    // 删除分类
    router.delete('/:id', async (req, res) => {
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
        })
    })

    // 查询分类列表
    router.get('/', async (req, res) => {
        const queryOptions = {}
        if (req.Model.modelName) {
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        console.log(items)
        res.send(items)
    })

    // 根据ID查询单个分类
    router.get('/', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    app.use(
        '/admin/api/rest/:resource',
        (req, res, next) => {
            const modelName = require('inflection').classify(
                req.params.resource
            )
            req.Model = require(`../../models/${modelName}`)
            next()
        },
        router
    )
}
