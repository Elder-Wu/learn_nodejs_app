# learn_nodejs_app
这是一个Node.js程序，里面封装了一些简单的常用控件
> Dialog （封装了bootstrap Modal，一个响应式对话框）

usage

```javascript 1.6
new Dialog().setTitle("标题")
    .setMsg("弹窗显示内容")
    .setPositiveName("确定按钮名称")
    .setPositiveFn(new function() {
        console.log("确定按钮回调")
    }).show()
```