module.exports = {
  template: `<div class="alert alert-info" role="alert">
      <strong>Heads up! view/b</strong>
      <p>当前路径: {{$route.path}}</p>
      <p>当前路由参数: {{$route.params | json}}</p>
    </div>`,
  replace: true
};
