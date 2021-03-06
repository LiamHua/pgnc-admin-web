import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/user-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/UserManage.vue'),
                    meta: { title: '用户管理' }
                },
                {
                    path: '/product-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/ProductManage.vue'),
                    meta: { title: '商品管理' }
                },
                {
                    path: '/category-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/CategoryManage.vue'),
                    meta: { title: '分类管理' }
                },
                {
                    path: '/carousel-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/CarouselManage.vue'),
                    meta: { title: '超链管理' }
                },
                {
                    path: '/school-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/SchoolManage.vue'),
                    meta: { title: '学校管理' }
                },
                {
                    path: '/comment-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/CommentManage.vue'),
                    meta: { title: '评论管理' }
                },
                {
                    path: '/message-manage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/manage/MessageManage.vue'),
                    meta: { title: '消息管理' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: { title: '系统通知' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
