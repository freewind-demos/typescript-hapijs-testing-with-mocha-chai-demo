TypeScript HapiJS Testing with Mocha Chai Demo
==============================================

如何使用Mocha Chai来测试HapiJS Server?

HapiJS有一点做的非常巧妙，它生成的`server`有一个`inject`方法，可以让我们直接传入一些request参数，就能得到结果，不需要启动Server，也不需要基于url来测试。
然后就利用chai对其response进行验证即可。

另一值得注意的地方是，我们在测试中只需要拿到server不需要它启动，所以在`server.js`中，我们通过`module.parent`来判断该文件是被node执行还是被别人导入。如果是后者就不启动。

```
npm install
npm test
```

将会测试并输出报告：

```
  server
    ✓ /hello POST correct payload
    ✓ /hello POST wrong payload | name too short


  2 passing (35ms)
```

参考
---

- https://sethlopez.me/article/testing-hapi-js-apis/