(function(){
  // 全局压制浏览器原生右键菜单：
  // 应用自己的菜单（画布/图层列表/标签页等）已有各自的 preventDefault，
  // 但悬浮菜单容器(.cmanager)、面板空白区等区域没有覆盖，导致浏览器菜单盖住应用菜单。
  // 这里在捕获阶段统一拦截；文本输入框/可编辑区域除外（保留复制粘贴等原生菜单）。
  document.addEventListener('contextmenu', function(e){
    var t = e.target;
    while (t) {
      if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) return;
      t = t.parentNode;
    }
    e.preventDefault();
  }, true);
}());
