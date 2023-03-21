$(function () {
    // 页面加载先渲染加载数据
    load();
    $("#text").on("keydown", function (event) {
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入您待办事项的内容");
            } else {
                // 先读取本地存储的数据
                var local = getData();
                console.log(local);
                // 实现数据追加
                local.push({ title: $(this).val(), done: false });
                // 数据保存
                saveData(local);
                // 点完回车以后表单的内容清空
                $(this).val("");
                // 渲染加载数据
                load();
            }
        }
    });
    // 获取本地存储的数据
    function getData() {
        var data = localStorage.getItem("todolist");
        if (data != null) {
            // 因为本地存储的数据是字符串，我们要把它转换为对象格式
            return JSON.parse(data);
        } else {
            return [];
        }
    }
    // 保存追加的数据
    function saveData(data) {
        // 浏览器存储的数据要转换为字符串
        localStorage.setItem("todolist", JSON.stringify(data));
    }
    // 渲染加载数据
    function load() {
        // 获取本地存储的数据
        var data = getData();
        // 遍历之前先清空ol ul的值
        $(".doing-ol, .finish-ol").empty();
        // 遍历数据中的内容
        var doingCount = 0;//正在进行的个数
        var doneCount = 0;//已经完成的个数
        $.each(data, function (i, ele) {
            if (ele.done) {
                $(".finish-ol").prepend($("<li><input type='checkbox' checked='checked'><span>" + ele.title + "</span><a href='javascript:;' id = " + i + "></a></li>"));
                doneCount++;
            } else {
                // 动态生成li+span 并把遍历的title值写入span中 并给每个a添加索引号
                $(".doing-ol").prepend($("<li><input type='checkbox'><span>" + ele.title + "</span><a href='javascript:;' id = " + i + "></a></li>"));
                doingCount++;
            }
        });
        // 修个正在进行和已经完成的个数
        $(".doingYuan").text(doingCount);
        $(".finishYuan").text(doneCount);
    }
    // todolist删除操作
    $(".doing-ol, .finish-ol").on("click", "a", function () {
        // 先获取本地存储
        var data = getData();
        // 修改数据
        var index = $(this).attr("id");
        data.splice(index, 1);
        // 保存数据
        saveData(data);
        // 渲染数据
        load();
    });
    // todolist正在进行和已经完成操作
    $(".doing,.finish").on("click", "input", function () {
        // 获取数据
        var data = getData();
        // 修改数据
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        console.log(data);
        // 保存数据
        saveData(data);
        // 渲染数据
        load();
    });

});