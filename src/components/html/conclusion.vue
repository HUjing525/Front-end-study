<template>
  <div>
    <h3>行内元素和块级元素</h3>
    <p>行内元素：只占内容部分，大部分行内元素的宽高不可设置。</p>
    <p>常见的行内元素：a 、span 、 img 、button 、 input 、 label 、 select 、 textarea</p>
    <p>块级元素：独占一行，宽高、内外边距都可以设置。</p>
    <p>常见的块级元素：div 、 ul 、 ol 、li 、 dl 、 dt 、 dd 、 h1 、h2 、 h3 、 h4 、 h5 、 h6 、 p</p>

    <h3>进程和线程</h3>
    <p>进程：最小的资源管理单元</p>
    <p>线程：最小的执行单元</p>
    <p>浏览器本身就是多进程的，包括：</p>
    <ul>
        <li>Browser进程：浏览器主进程</li>
        <li>Render进程：渲染进程，也叫内核</li>
        <li>GPU进程：3D绘制</li>
        <li>第三方插件进程</li>
    </ul>
    <p>Render进程包括多个线程：</p>
    <ul>
        <li>GUI线程</li>
        <li>JS引擎线程</li>
        <li>事件触发线程</li>
        <li>定时器线程</li>
        <li>异步http请求线程</li>
    </ul>

    <h3>浏览器的渲染原理</h3>
    <ol>
        <li>解析文档，构建DOM树</li>
        <li>解析CSS，构建CSSOM规则树</li>
        <li>根据DOM树和CSSOM规则树，生成渲染树，通过渲染树进行布局，确定各个节点在页面上的位置和大小。</li>
        <li>最后用paint方法对内容进行绘制。</li>
    </ol>
　　
    
   
    
    
  </div>
</template>

<script>
export default {
  name: 'conclusion',
  props: {
    
  },
  data() {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
