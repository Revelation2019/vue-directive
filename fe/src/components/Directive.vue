<template>
  <el-form ref="form" :inline="true" size="small" :model="form" label-width="80px">
    <el-form-item label="姓名:">
      <el-select
        v-model="form.name"
        filterable
        remote
        v-loadmore="laodMore"
        :remote-method="remoteMethod"
        :loading="loading"
        >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
import { post } from '@/service/request'

export default {
  name: 'Directive',
  data () {
    return {
      options: [],
      loading: false,
      value: '',
      form: {
        name: ''
      },
      query: {
        pageIndex: 1,
        pageSize: 10,
        name: ''
      }
    }
  },
  methods: {
    init () {
      var query = {
        pageIndex: 1,
        pageSize: 10,
        name: ''
      }
      this.query = {...query}
    },
    remoteMethod (name) {
      this.init()
      this.query.name = name
      post('/select/getData', this.query).then(res => {
        this.options = res.data.rows
      })
    },
    laodMore () {
      this.query.pageIndex += 1
      post('/select/getData', this.query).then(res => {
        this.options.push(...res.data.rows)
      })
    }
  }
}
</script>

<style scoped>

</style>
