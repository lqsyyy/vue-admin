# admin-template基础模版

## vue-cli3.0使用

1. 克隆完项目后，安装依赖包

	```
	npm install
	```
2. vue-cli3.0起步请参考[官网](https://cli.vuejs.org/)
3. 安装完成vue-cli3.0并切启动GUI可视化界面后，导入项目
	![导入项目](http://thyrsi.com/t6/372/1537335405x-1376440138.jpg)
4. 启动项目
	![启动项目](http://thyrsi.com/t6/372/1537335717x1822611263.jpg)
5. 启动完成
	![启动项目](http://thyrsi.com/t6/372/1537335822x-1376440138.jpg)
6. 其他功能暂不详细列出
7. 项目中默认配置
	* vue-router(mode: hash)
	* vuex
	* sass
	* eslint(standard，配置后期可调整)
	* unitTest(mocha)
	* axios
	* element-ui
	* js-cookie
	* normalize.css
	* nprogress
	* lodash

	> 备注：echarts暂时没有引入，后续有需求可以自行加入。
	
## 目录结构

- api 
  - 请求接口文件

- assets 
  - 图片等静态资源
  
- components 
  - 公用组件

- defines 
  - 常量定义
  
- directives
  - 指令
  - 该目录下为demo
  
- filters
  - 过滤器，目前没有提供事例
  - 需要全局注册
  
  ```
 	  import * as filters from './filters'
	  Object.keys(filters).forEach(key => {
	    Vue.filter(key, filters[key])
	  })
  ```
- icons 
  - 矢量图，后续如果使用iconfont字体，该目录可以不使用

- mock
  - 数据模拟
  - 后续如果基于 `easy mock` 做开发环境数据模拟，可以删掉

- router 
  - 路由
  - modules文件夹用来做模块化路由定义拆分
  
- store
  - 状态管理
  - getters.js 处理比较常用的state，方便调用
  
- styels
  - 样式表文件
  
- utils
  - 公用方法封装

- views
  - 页面文件
  
## 项目待修改内容

- 请求代理目标地址
  — 配置文件vue.config.js
  - `target`对应的value根据项目自行调整
- 请求前缀修改
  - defines／config.js
  - baseURL根据项目自行调整