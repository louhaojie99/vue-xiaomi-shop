http://t.yushu.im/v2/movie/in_theaters?start=0&count=3 //正在热映
http://t.yushu.im/v2/movie/coming_soon?start=0&count=3 //即将上映
http://t.yushu.im/v2/movie/top250?start=0&count=3 //top250

- 技术栈：
  - vue+vuex(状态管理)+vue-router(路由)+vue-resource+axios+UI 框架(Vant)+sass

## 项目搭建过程

```bash
# 创建项目
vue create vue-xiaomi-website

# 运行项目
npm run serve

--------------------------------------
# VUE中Rem 适配解决方案
https://blog.csdn.net/Jasons_xie/article/details/89331473
# 安装依赖
npm i -S amfe-flexible
npm install postcss-pxtorem --save-dev

# viewport设置
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">

# main.js主入口引入
import 'amfe-flexible'; //引入rem自适应

# 在vue-cli3下,根目录中的 vue.config.js (没有，就新建一个)
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 37.5, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  }
--------------------------------------
# 全局引入UI库（Vant）
npm i vant -S	# 安装 vant

# main.js文件中全局引入使用：
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

# 搭建一级路由
写静态资源


# 安装js-cookes
npm i js-cookie   # Coookie管理
npm i compression-webpack-plugin

# 安装axios
npm i axios --save

# axios拦截器
requset.js  ...

# axios挂到原型上，全局使用
import request from "./utils/request";
Vue.prototype.$http = request;
123456
```
