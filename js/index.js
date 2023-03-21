window.addEventListener('load', function () {

    var container = document.querySelector('.container');
    var li = container.querySelectorAll('li');
    // 循环遍历给小li前面添加复选框
    li.forEach(function (val, index) {
        // 动态创建一个表单
        var checkbox = document.createElement('input');
        // 将表单设置为复选框
        checkbox.setAttribute('type', 'checkbox');
        // 将复选框设置左右外边距
        checkbox.style.margin = '0 10px';
        var span = val.children[0];

        // 创建一个span来存放小竖线
        // var Nspan = document.createElement('span');
        // Nspan.style.width = '5px';
        // Nspan.style.height = '100%';
        // // Nspan.style.display = 'inline-block';
        // Nspan.style.backgroundColor = '#699999';
        // // 将小竖条，添加在span的前面
        // val.insertBefore(Nspan,span);
        // 将复选框，添加在span的前面
        val.insertBefore(checkbox, span);

    });
    // 修改小圆里面的数量
    // 获取小圆
    var doingYuan = this.document.querySelector('.doingYuan');
    var ol = this.document.querySelector('.doing').querySelector('ol');
    doingYuan.innerHTML = ol.children.length;

    var finishYuan = this.document.querySelector('.finishYuan');
    var ul = this.document.querySelector('.finish').querySelector('ul');
    finishYuan.innerHTML = ul.children.length;

    
})