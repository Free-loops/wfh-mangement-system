import befautify from 'ASSETS/image/timg.jpg'
import befautify1 from 'ASSETS/image/timg (1).jpg'
import befautify2 from 'ASSETS/image/timg (2).jpg'
import befautify3 from 'ASSETS/image/timg (3).jpg'
import DialogCom from '../../components/DialogCom'
import Pagination from '../../components/Pagination'

export default {
  name: 'yhgl',
  components: {
    'dialog-Com': DialogCom,
    'my-pagination': Pagination
  },
  data () {
    return {
      title: '',
      editOrSet: '',
      radio: '1',
      labelPosition: 'left',
      formOptions: [{
        value: '1',
        label: '无标签用户'
      }, {
        value: '2',
        label: '本月新用户'
      }, {
        value: '3',
        label: '五月优惠用户'
      }],
      formLabelAlign: {
        option: '',
        update: '',
        radio: '1'
      },
      dialogFlag: false,
      moveOptions1: [{
        value: '1',
        label: '企业用户'
      }],
      moveOptions2: [{
        value: '1',
        label: '普通用户'
      }],
      moveKey: null, // 移动到
      // ..
      tableData: [{
        img: befautify,
        ID: 'WFH001',
        name: '王小虎',
        sex: '男',
        label: '新品推广',
        logintime: '2019-05-03 17:33:33',
        loc: '广东',
        level: 'v1',
        accountSum: 1444,
        code: '23131',
        num: 12313,
        summeroy: 321341
      }, {
        img: befautify1,
        ID: 'WFH001',
        name: '王小虎',
        sex: '男',
        label: '新品推广',
        logintime: '2019-05-03 17:33:33',
        loc: '广东',
        level: 'v1',
        accountSum: 1444,
        code: '23131',
        num: 12313,
        summeroy: 321341
      }, {
        img: befautify2,
        ID: 'WFH001',
        name: '王小虎',
        sex: '男',
        label: '新品推广',
        logintime: '2019-05-03 17:33:33',
        loc: '广东',
        level: 'v1',
        accountSum: 1444,
        code: '23131',
        num: 12313,
        summeroy: 321341
      }, {
        img: befautify3,
        ID: 'WFH001',
        name: '王小虎',
        sex: '男',
        label: '新品推广',
        logintime: '2019-05-03 17:33:33',
        loc: '广东',
        level: 'v1',
        accountSum: 1444,
        code: '23131',
        num: 12313,
        summeroy: 321341
      }, {
        img: befautify3,
        ID: 'WFH001',
        name: '王小虎',
        sex: '男',
        label: '新品推广',
        logintime: '2019-05-03 17:33:33',
        loc: '广东',
        level: 'v1',
        accountSum: 1444,
        code: '23131',
        num: 12313,
        summeroy: 321341
      }],
      currentPage4: 1,
      activeName: 'common', // tabindex
      idNameNum: null, // 搜索关键字
      selectKey: '1', // 选择关键字
      options: [{
        value: '1',
        label: '全部用户'
      }, {
        value: '2',
        label: '无标签用户'
      }, {
        value: '3',
        label: '本月新用户'
      }, {
        value: '4',
        label: '五月优惠用户'
      }]
    }
  },
  methods: {
    sureSave (flag) {
      this.dialogFlag = flag
      if (this.editOrSet === 'edit') {
        console.log('编辑')
      } else {
        console.log('设置标签')
      }
    },
    cancleSave (flag) {
      this.dialogFlag = flag
      if (this.editOrSet === 'edit') {
        console.log('编辑')
      } else {
        console.log('设置标签')
      }
    },
    editHandle (row) {
      this.dialogFlag = true
      this.editOrSet = 'edit'
      this.title = '编辑'
      console.log(row, '========')
    },
    setTags () {
      this.dialogFlag = true
      this.editOrSet = 'set'
      this.title = '设置标签'
    },
    handleSelectionChange () {},
    handleCurrentChange () {},
    handleSizeChange () {},
    handleClick (val) {
      console.log(this.activeName)
      if (this.activeName === 'blacklist') {
        console.log(0)
      }
    }
  }
}
