<template>
  <div>
    <div>
      <table>
        <tr>
          <td>编号</td>
          <td>名称</td>
          <td>作者</td>
        </tr>
        <tr v-for="item in bookList" v-bind:key="item">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.author}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你好',
      bookList: []
    }
  },
  created () {
    const _this = this
    this.$ajax.get('http://localhost:8000/book/findAll')
      .then(function (res) {
        console.log('正确返回：', res)
        // _this.$data.bookList = res.data
        _this.bookList = res.data
      })
      .catch(function (error) {
        console.log('错误返回：', error)
      })
  }
}

</script>

<style>
</style>
