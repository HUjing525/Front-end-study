<template>
  <div id="hello">
    <div id="hi">
      <img alt="Vue logo" src="../assets/study.png">
    </div>
    <h1 id="title"> Welcome to My Front-end Study Notes</h1>
    <div id="hi">
      <router-link to='/home'>
        <el-button round>START</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  height: 500px;
}
#hi {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 110px;
}
#title {
  text-align: center;
  margin-top: 50px;
  color: rgb(173, 236, 247);
}
.el-button.is-round {
  background-color: rgb(247, 123, 85);
  color: white;
  margin: 0 auto;
  
}
</style>
