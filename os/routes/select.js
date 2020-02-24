var express = require('express');
var router = express.Router();

router.post('/getData', async (req, res, next) => {
  var options = [
    { label: '张无忌', value: '001'},
    { label: '赵敏', value: '002' },
    { label: '小赵', value: '003' },
    { label: '周芷若', value: '004' },
    { label: '杨逍', value: '005' },
    { label: '殷天正', value: '006' },
    { label: '谢逊', value: '007' },
    { label: '金花婆婆', value: '008' },
    { label: '成昆', value: '009' },
    { label: '张三丰', value: '010' },
    { label: '张翠山', value: '011' },
    { label: '殷素素', value: '012' },
    { label: '宋青书', value: '013' },
    { label: '陈友谅', value: '014' },
    { label: '张三丰', value: '015' },
    { label: '张翠山', value: '016' },
    { label: '张观博', value: '017' },
    { label: '张欣竹', value: '018' },
    { label: '张欣阳', value: '019' },
    { label: '张刚军', value: '020' },
    { label: '张扬阳', value: '021' },
    { label: '张靖阳', value: '022' },
    { label: '张熙阳', value: '023' },
    { label: '张嘉萱', value: '024' },
    { label: '张铭阳', value: '025' },
    { label: '张飞', value: '026' },
    { label: '张雨荨', value: '027' },
    { label: '张文博', value: '028' },
    { label: '张诗含', value: '029' },
    { label: '张诗若', value: '030' },
    { label: '张晓雨', value: '031' },
    { label: '张展鸣', value: '032' },
    { label: '张晓春', value: '033' },
    { label: '张洪文', value: '034' },
    { label: '张轩杰', value: '035' },
    { label: '张俊杰', value: '036' },
  ]
  var results = options.filter(item => {
    return item.label.indexOf(req.body.name) !== -1
  }).slice((req.body.pageIndex - 1) * req.body.pageSize, (req.body.pageIndex - 1) * req.body.pageSize + req.body.pageSize)
  console.log(results)
  res.json({
    code: 1,
    rows: results
  })
})

module.exports = router