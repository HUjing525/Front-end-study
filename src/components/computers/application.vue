<template>
  <div>
    <h2>应用层</h2>
    <p>含义：应用层协议定义了应用进程间的交互和通信规则。</p>
    
    <h3>HTTP协议</h3>
    <p>含义：HTTP是超文本传输协议，它定义了客户端和服务器之间交换报文的格式和方式，默认使用 80 端口。</p>
    <p>特点：
        <ol>
            <li>HTTP 是一个无状态的协议，HTTP 服务器不会保存关于客户的任何信息。</li>
            <li>有会话的，可以使用cookies保存一小段数据。</li>
        </ol>
    </p>
    <p>连接模式：
        <ul>
            <li>非持久连接：服务器必须为每一个请求的对象建立和维护一个全新的连接。</li>
            <li>持久连接：TCP 连接默认不关闭，可以被多个请求复用。</li>
        </ul>
    </p>

    <h4>HTTP请求报文</h4>
    <p>HTTP请求报文含三部分：请求行、首部行、实体主体</p>
    <p class="a">请求行包含：方法字段、URL字段和 HTTP版本字段</p>
    <div class="b">
        <table class="c" border="1" cellspacing="0" cellpadding="5" width="500" height="220">
            <thead><!--头部分-->
                <tr><!--行标签-->
                    <th>方法字段</th><!--表头标签-->
                    <th>含义</th>          
                </tr> 
            </thead>
            <tbody><!--主体部分-->
                <tr><!--行标签-->
                    <td>GET</td><!--单元格标签-->
                    <td>请求服务器发送某个资源，请求不含实体主体，是安全的，幂等的。</td>
                </tr>

                <tr><!--行标签-->
                    <td>POST</td><!--单元格标签-->
                    <td>将实体提交到指定的资源，通常通过HTML表单发送，并返回服务器的修改结果。不安全，非幂等的。</td>
                </tr>

                <tr><!--行标签-->
                    <td>PUT</td><!--单元格标签-->
                    <td>用请求有效载荷替换目标资源的所有当前表示。</td>
                </tr>

                <tr><!--行标签-->
                    <td>PATCH</td><!--单元格标签-->
                    <td>用于对资源进行部分修改。</td>
                </tr>

                <tr><!--行标签-->
                    <td>CONNECT</td><!--单元格标签-->
                    <td>建立一个由客户端到目标资源标识的服务器的隧道。</td>
                </tr>

                  <tr><!--行标签-->
                    <td>HEAD</td><!--单元格标签-->
                    <td>请求一个与GET请求的响应相同的响应，但没有响应体。</td>
                </tr>

            </tbody>
        </table>
    </div>

    <h4>HTTP响应报文</h4>
    <p>HTTP响应报文含三部分：状态行、首部行、实体主体</p>
    <p class="c">状态行包含：HTTP版本字段、状态码、相应的状态信息</p>
    <ul class="d">
        <li>1XX:代表服务器接收到请求</li>
        <li>2XX:代表成功</li>
        <li>3XX:代表重定向</li>
        <li>4XX:代表客户端错误</li>
        <li>5XX:代表服务器端错误</li>
    </ul>
    <div class="e">
        <table class="c" border="1" cellspacing="0" cellpadding="5" width="500" height="220">
            <thead><!--头部分-->
                <tr><!--行标签-->
                    <th>状态码</th><!--表头标签-->
                    <th>英文名称</th>   
                    <th>中文描述</th>         
                </tr> 
            </thead>
            <tbody><!--主体部分-->
                <tr><!--行标签-->
                    <td>100</td><!--单元格标签-->
                    <td>continue</td>
                    <td>一切正常，服务器可以继续发送请求。</td>
                </tr>

                <tr><!--行标签-->
                    <td>200</td><!--单元格标签-->
                    <td>OK</td>
                    <td>请求成功</td>
                </tr>

                <tr><!--行标签-->
                    <td>202</td><!--单元格标签-->
                    <td>Accepted</td>
                    <td>已经接受请求，但未响应。</td>
                </tr>

                 <tr><!--行标签-->
                    <td>204</td><!--单元格标签-->
                    <td>No Content</td>
                    <td>服务器成功处理，但未返回实体主体。</td>
                </tr>

                <tr><!--行标签-->
                    <td>301</td><!--单元格标签-->
                    <td>Moved Permanently</td>
                    <td>永久移动。请求的资源已被永久的移动到新URI，今后任何新的请求都应使用新的URI代替。</td>
                </tr>

                <tr><!--行标签-->
                    <td>302</td><!--单元格标签-->
                    <td>Found</td>
                    <td>临时移动。请求的资源只是临时被移动。客户端之后的请求应继续使用原有URI。</td>
                </tr>

                <tr><!--行标签-->
                   <td>304</td><!--单元格标签-->
                    <td>Not Modified</td>
                    <td>所请求的资源未修改，服务器不会返回任何资源，但客户端可以使用缓存中的内容。</td>
                </tr>

                <tr><!--行标签-->
                    <td>204</td><!--单元格标签-->
                    <td>No Content</td>
                    <td>服务器成功处理，但未返回实体主体。</td>
                </tr>

                <tr><!--行标签-->
                    <td>307</td><!--单元格标签-->
                    <td>Temporary Redirect</td>
                    <td>临时重定向。与302类似。但307可以确保请求方法和实体主体不变。</td>
                </tr>

                <tr><!--行标签-->
                    <td>308</td><!--单元格标签-->
                    <td>Permanent Redirect</td>
                    <td>永久重定向。与301类似。但308可以确保请求方法和实体主体不变。</td>
                </tr>

                <tr><!--行标签-->
                    <td>400</td><!--单元格标签-->
                    <td>Bad Request</td>
                    <td>客户端请求的语法错误，服务器无法理解。</td>
                </tr>

                <tr><!--行标签-->
                    <td>404</td><!--单元格标签-->
                    <td>Not Found</td>
                    <td>服务器未找到请求的资源。</td>
                </tr>

                <tr><!--行标签-->
                    <td>500</td><!--单元格标签-->
                    <td>Internal Server Error</td>
                    <td>客服务器内部出错。</td>
                </tr>

                <tr><!--行标签-->
                    <td>503</td><!--单元格标签-->
                    <td>Service Unavailable </td>
                    <td>由于超载或系统维护，服务器暂时的无法处理客户端的请求。（即服务器未准备好处理请求）</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h4>HTTP/1.0</h4>
    <p>特点：采用非持久连接，服务器必须为每次请求的对象建立和维护一个全新的连接。</p>
    <h4>HTTP/1.1</h4>
    <p>特点：采用持久连接，多个请求可以复用同一个 TCP 连接。</p>
    <p>缺点：数据请求的通信次序 是固定的。服务器只有处理完一个请求的响应后，才会进行下一个请求的处理，如果前面请求的响应特别慢的话，就会造成许 多请求排队等待的情况，这种情况被称为“队头堵塞”。</p>
    <p>解决办法：
        <ul>
            <li>减少请求数</li>
            <li>同时打开多个持久连接</li>
        </ul>
    </p>
    <h4>HTTP/2</h4>
    <ul>
        <li>二进制协议
            <p>在 HTTP/1.1 版中，报文的头信息必须是文本（ASCII 编码），数据体可以是文本，也可以是 二进制。HTTP/2 则是一个彻底的二进制协议，头信息和数据体都是二进制，并且统称为"帧"，可以分为头信息帧和数据帧。它是实现多路复用的基础。</p>
        </li>
        <li>多路复用</li>
        <li>数据流</li>
        <li>头信息压缩</li>
        <li>服务器推送</li>
    </ul>


    <h3>HTTPS协议</h3>
  </div>
</template>


<script>
export default {
  name: 'application',
  props: {
    
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
    margin-left: 20px;
}
.d {
    margin-left: 20px;
}
.e {
    margin-left: 20px;
}
</style>
