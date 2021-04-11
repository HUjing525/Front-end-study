<template>
  <div>
    <h2>HTML</h2>
    <p>含义：超文本标记语言,用于定义网页结构。</p>
    <h3>HTML标签和元素</h3>
    <p>HTML 标记标签通常被称为 HTML 标签 (HTML tag)。</p>
    <ul>
        <li>HTML 标签是由尖括号包围的关键词。</li>
        <li>HTML 标签通常是成对出现的。</li>
        <li>标签对中的第一个标签是开始标签，第二个标签是结束标签。</li>
    </ul>
    <p>"HTML 标签" 和 "HTML 元素" 通常都是描述同样的意思.但是严格来讲, 一个 HTML 元素包含了开始标签与结束标签。</p>
    
    <h3>Web浏览器</h3>
    <p>Web浏览器（如谷歌浏览器，Internet Explorer，Firefox，Safari）是用于读取HTML文件，并将其作为网页显示。</p> 
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

    <h3>浏览器端的存储技术</h3>
    <ul>
      <li>cookie:由服务器设置，在客户端存储，然后每次发起同源请求时，发送给服务器端。cookie 最多能存储 4 k 数据，它的生存时间由 expires 属性指定，并且 cookie 只能被同源的页面访问共享。</li>
      <li>sessionStorage: 是 html5 提供的一种浏览器本地存储的方法，它借鉴了服务器端 session 的概念，代表的是一次会话中所保存的数据。它一般能够存储 5M 或者更大的数据，它在当前窗口关闭后就失效了，并且 sessionStorage 只能被同一个窗口的同源页面所访问共享。</li>
      <li> localStorage: 也是 html5 提供的一种浏览器本地存储的方法，它一般也能够存储 5M 或者更大的数据。它和 sessionStorage 不同的是，除非手动删除它，否则它不会失效，并且 localStorage 也只能被同源页面所访问共享。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'conclusion_html',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
