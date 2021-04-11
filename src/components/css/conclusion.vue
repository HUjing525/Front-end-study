<template>
  <div>
    <h2>CSS</h2>
    <p>含义：层叠样式表,用于定义网页样式。</p>
    <h3>盒模型</h3>
    <p>盒模型分为：内容（content）、填充（padding）、边界（margin）、边框（border）四个部分。</p>
    <p>两种盒子模型：IE盒模型（border-box）、W3C标准盒模型（content-box）。</p>
    <p class="a">区别：IE盒模型：属性width，height包含content、border和padding。W3C标准盒模型：属性width，height只包含内容content。</p>
    <p>通过 box-sizing 属性可改变盒模型。</p>

    <h3>选择器</h3>
    <p>伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等。</p>
    <p v-text="content1"></p>
    <p class="b">注意：权重叠加，不能进位，继承的权重为0。</p>
    
    <h3>display的值</h3>
    <ul>
        <li>block:块级元素，独占一行，可设置宽高。</li>
        <li>inline:行内元素，只占内容部分，大部分不可设置宽高，同行显示。</li>
        <li>inline-block：行内块元素，可以一行放多个，宽高可设置</li>
        <li>none：不显示</li>
        <li>inherit：继承父元素display属性的值</li>
        <li>flex:弹性布局</li>
    </ul>

    <h3>position的值</h3>
    <ul>
        <li>absolute：绝对定位，相对父级位置移动，不占位置</li>
        <li>relative：相对定位，相对自身位置移动，占有位置</li>
        <li>fixed:固定，相对浏览器位置移动，不占有位置。</li>
        <li>static：默认值，没有定位，元素出现在正常的流中。</li>
    </ul>

    <h3>居中方法</h3>
    <p>水平居中：</p>
    <img src="../../assets/horizontal-center.png" alt="" width="200px">
    <p>水平垂直居中：</p>
    <p>绝对定位3种：</p>
    <img class="c" src="../../assets/horizontally-vertically1.png" alt="" >
    <img class="c" src="../../assets/horizontally-vertically2.png" alt="" >
    <img class="c" src="../../assets/horizontally-vertically3.png" alt="" >
    <p>flex布局1种：</p>
    <img class="c" src="../../assets/horizontally-vertically4.png" alt="" >
    
    <h3>Flex弹性布局</h3>
    <p>弹性布局分为两部分：容器和项目。</p>
    <p>以下6个属性设置在容器上:
        <ul>
            <li>flex-direction属性决定主轴的方向（即项目的排列方向）。</li>
            <li>flex-wrap属性定义，如果一条轴线排不下，如何换行。</li>
            <li>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</li>
            <li>justify-content属性定义了项目在主轴上的对齐方式。</li>
            <li>align-items属性定义项目在交叉轴上如何对齐。</li>
            <li>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</li>
        </ul>
    </p>
    <p>以下6个属性设置在项目上:
        <ul>
            <li>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</li>
            <li>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</li>
            <li>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</li>
            <li>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</li>
            <li>flex属性是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。</li>
            <li>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</li>
        </ul>
    </p>
    <p>实现三栏布局</p>
    <img class="c" src="../../assets/three.png" alt="" >

    <h3>BFC块级格式化上下文</h3>
    <p>含义：BFC指的是块级格式化上下文，一个元素形成了BFC之后，那么它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到BFC中的内部元素。一个BFC就像是一个隔离区域，和其他区域互不影响。</p>
    <p>如何创建BFC：一般来说根元素是一个BFC区域，浮动和绝对定位的元素也会形成BFC，display属性的值为inline-block、flex这些属性时也会创建BFC。还有就是元素的overflow的值不为visible时都会创建BFC。</p>
    <p>作用：清除浮动，防止margin重叠。</p>
    <h3>清除浮动</h3>
    <p>目的：为了解决父级元素因为子级元素浮动而引起的内部高度为0的问题。</p>
    <p>方法：
        <ul>
            <li>使用clear属性清除浮动。</li>
            <li>使用BFC块级格式化上下文来清除浮动。</li>
            <li>使用伪元素的方式清除浮动。</li>
        </ul>
    </p>

    <h3>移动端的三个viewport</h3>
    <p>layout viewport：移动设备通过滚动条或者缩放可以查看整个页面。</p>
    <p>visual viewport：移动设备上可见的区域的大小。</p>
    <p>ideal viewport：通过修改布局视口的大小，让它等于设备的宽度。</p>
  
    <h3>常见的元素隐藏方式</h3>
    <ul>
        <li>使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。</li>
        <li>使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件。</li>
        <li>使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。</li>
        <li>通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。</li>
        <li>通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏。</li>
        <li>通过 transform:scale(0,0)来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'conclusion_html',
  props: {
    
  },
  data() {     
      return {
          content1: '优先级：通配符选择器 < 元素、伪元素(0001) < 类、伪类选择器(0010) < ID选择器(0100) < 行内样式(1000) < ！important'
      }             
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a {
    margin-left: 20px;
}
.b {
    margin-left: 20px;
}
.c {
    width: 1000px;
}

</style>
