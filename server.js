const allData = [{
    "id": 2,
    "path": "/master",
    "component": "Master",
    "name": "首页",
    "iconCls": "fa fa-user-circle-o",
    "children": [{
        "id": 1,
        "path": "test1",
        "component": "test1",
        "name": "Test1",
        "iconCls": null,
        "children": [{
            "id": 11,
            "path": "test11",
            "component": "Test11",
            "name": "test11",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test1"
            }
        }, {
            "id": 12,
            "path": "test12",
            "component": "Test12",
            "name": "test12",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test1"
            }
        }],
        "meta": {
            "keepAlive": false,
            "requireAuth": true
        }
    }, {
        "id": 2,
        "path": "test2",
        "component": "test2",
        "name": "test2",
        "iconCls": null,
        "children": [{
            "id": 21,
            "path": "test21",
            "component": "Test21",
            "name": "test21",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test2"
            }
        }, {
            "id": 22,
            "path": "test22",
            "component": "Test22",
            "name": "Test22",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test2"
            }
        }],
        "meta": {
            "keepAlive": false,
            "requireAuth": true
        }
    }, {
        "id": 3,
        "path": "test3",
        "component": "test3",
        "name": "test3",
        "iconCls": null,
        "children": [{
            "id": 31,
            "path": "test31",
            "component": "Test31",
            "name": "test31",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test3"
            }
        }, {
            "id": 32,
            "path": "test32",
            "component": "Test32",
            "name": "test32",
            "iconCls": null,
            "meta": {
                "keepAlive": false,
                "requireAuth": true,
                "fatherName": "test3"
            }
        }],
        "meta": {
            "keepAlive": false,
            "requireAuth": true
        }
    }],
    "meta": {
        "keepAlive": false,
        "requireAuth": true
    }
}]

const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')(); //引入路由

// 接收请求的中间件
const bodyParser = require('koa-bodyparser');
// 支持跨域的中间件
const cors = require('koa2-cors');
//这两个是需要放到其他app.use操作之前才生效
app.use(bodyParser())
app.use(cors())


//引入路由模块并注册
router.get('/index', async(ctx) => {
    ctx.body = "首页";
})
router.post('/api/getAll', async(ctx) => {
    ctx.body = {
        code: 200,
        msg: "成功",
        data: allData
    }
})

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());


const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server running on port http://192.168.6.141:${port}`)
})