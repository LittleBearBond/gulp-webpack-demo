/**
 * author           xj
 * @date            2015-12-30 15:31:47
 * @email           568915669@qq.com
 * @description
 */
require('./css/index.scss');

var MyComponent = Vue.extend({
    template: '<div class="alert alert-warning" role="alert">MyComponentMyComponent</div>'
});

var vm = new Vue({
    el: "#app",
    data: {
        view: 'page3',
        msg: 'hello little bear'
    },
    components: {
        'page1': function(resolve, reject) {
            require(['./view/a'], resolve);
        },
        'page2': function(resolve, reject) {
            // 这个特殊的 require 语法告诉 webpack
            // 自动将编译后的代码分割成不同的块，
            // 这些块将通过 ajax 请求自动下载。
            require(['./view/b'], resolve);
        },
        'page3': MyComponent
    }
});

function route() {
    vm.view = window.location.hash.slice(1) || 'page1';
}

window.addEventListener('hashchange', route)
window.addEventListener('load', route)
