/**
 * author           xj
 * @date            2015-12-30 15:31:47
 * @email           568915669@qq.com
 * @description
 */
require('./css/index.scss');

var MyComponent = Vue.extend({
    template: '<div class="alert alert-warning" role="alert">MyComponent---MyComponent</div>'
});

var vm = new Vue({
    // el: "#app",
    data: {
        view: 'page3',
        msg: 'hello little bear'
    },
    components: {
        /*'page1': function(resolve, reject) {
            require(['./view/a'], resolve);
        },
        'page2': function(resolve, reject) {
            // 这个特殊的 require 语法告诉 webpack
            // 自动将编译后的代码分割成不同的块，
            // 这些块将通过 ajax 请求自动下载。
            require(['./view/b'], resolve);
        },
        'page3': MyComponent*/
    }
});

var page1 = Vue.extend(require('./view/a'));
var page2 = Vue.extend(require('./view/b'));
var page3 = MyComponent;
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({
    data: function() {
        return {
            msg: 'hello little bear'
        };
    }
})

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
    '/page1': {
        component: page1
    },
    '/page2': {
        component: page2
    },
    '/page3': {
        component: page3
    }
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
