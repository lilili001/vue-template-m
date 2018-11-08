export const drop_lists = {
    /*业务类型 下拉*/
    aywlx_dropList:[
        {name:'消费贷',value:'1'},
        {name:'库存融资',value:'2'},
        {name:'车抵贷',value:'3'},
        {name:'押车贷',value:'4'},
        {name:'经营性租赁',value:'5'}
    ],
    /*客户渠道一级科目 下拉*/
    akhlyCode_dropList:[
        {name:'线上',value:'1'},
        {name:'线下',value:'2'}
    ],
    /*客户渠道一级科目 下拉*/
    akhqd1_dropList:[
        {name:'线上',value:'1'},
        {name:'线下',value:'2'}
    ],
    /*合作渠道一级科目 下拉*/
    ahzqd1_dropList:[
        {name:'直营店',value:'3'},
        {name:'厂商',value:'4'},
        {name:'代理商',value:'5'},
        {name:'体验店',value:'6'}
    ],
    /*申请类型 下拉*/
    asqlx_dropList:[
        {name:'个人',value:'1'},
        {name:'企业',value:'2'}
    ],
    /*证件类型 下拉*/
    azjlx_dropList:[
        {name:'身份证',value:'1'},
        {name:'军官证',value:'2'},
        {name:'护照',value:'3'},
        {name:'士兵证',value:'4'},
        {name:'工商营业执政号码',value:'5'}
    ],
    /*付款方式 下拉*/
    fukuanfsh_dropList:[
        {name:'银企直联-工行',value:'0001'},
        {name:'银企直联-招行',value:'0002'},
        {name:'手工付款',value:'0003'}
    ],
    /*付款状态 下拉*/
    status_dropList:[
        {name:'待付款',value:'1'},
        {name:'暂存',value:'2'},
        {name:'付款中',value:'3'},
        {name:'退票待付款',value:'4'},
        {name:'付款成功',value:'5'},
        {name:'暂不付款',value:'6'},
        {name:'付款取消',value:'99'}
    ],
    /*车辆类型 下拉*/
    acllx_dropList:[
        {name:'新车',value:'1'},
        {name:'二手车',value:'2'},
        {name:'资源车',value:'3'}
    ],
    aCllx_dropList:[
        {name:'新车',value:'1'},
        {name:'二手车',value:'2'},
        {name:'资源车',value:'3'}
    ],
    /*租赁属性 下拉*/
    apzsx_dropList:[
        {name:'正租',value:'1'},
        {name:'回租',value:'2'},
        {name:'售后回租',value:'3'}
    ],
    /*收款方属性*/
    admsx1_dropList:[
        {name:'外采店',value:'0'},
        {name:'内部店',value:'1'}
    ],
    /*0 or 1*/
    yesOrNo_dropList:[
        {name:'是',value:'1'},
        {name:'否',value:'0'}
    ],
    //订单申请类型
    applyType_dropList:[
        {name:'零售',value:'1'},
        {name:'大项目',value:'2'}
    ],
    //gps价格类型
    agpsjglx_dropList:[
        {name:'普通价格',value:'1'},
        {name:'活动价格',value:'2'},
        {name:'车抵贷普通价',value:'3'},
        {name:'车抵贷活动价',value:'4'},
    ],
    //融资期限 月
    arzqx_dropList:[
        {name:'1期',value:'1'},
        {name:'2期',value:'2'},
        {name:'3期',value:'3'},
        {name:'6期',value:'6'},
        {name:'9期',value:'9'},
        {name:'12期',value:'12'},
        {name:'18期',value:'18'},
        {name:'19期',value:'19'},
        {name:'24期',value:'24'},
        {name:'30期',value:'30'},
        {name:'36期',value:'36'},
        {name:'42期',value:'42'},
        {name:'48期',value:'48'},
        {name:'54期',value:'54'},
        {name:'60期',value:'60'}
    ],
    //所属公司
    azlgsdm_dropList:[
        {name:'天津易鑫',value:'0003'},
        {name:'上海易鑫',value:'0002'},
        {name:'北京易鑫',value:'0004'},
        {name:'广州荣车',value:'0005'}
    ],
    //合同状态
    ahtzt_dropList:[
        {name:'创建',value:'1'},
        {name:'生效',value:'2'},
        {name:'结清',value:'3'},
        {name:'取消',value:'4'},
        {name:'拒绝',value:'5'},
        {name:'关闭',value:'6'}
    ],
    //申请状态
    asqzt_dropList:[
        {name:	'00-店面创建待提交'	,value:	'00'},
        {name:	'01-总部风控审批中'	,value:	'01'},
        {name:	'02-店面合同确认中'	,value:	'02'},
        {name:	'03-总部合同审核中'	,value:	'03'},
        {name:	'04-店面待首保上传'	,value:	'04'},
        {name:	'05-总部首保审/GPS核中'	,value:	'05'},
        {name:	'06-合同已生效'	,value:	'06'},
        {name:	'31-已生效合同当月取消'	,value:	'31'},
        {name:	'07-客户已提车'	,value:	'07'},
        {name:	'08-合同已放款'	,value:	'08'},
        {name:	'0a-等待电话资信'	,value:	'0a'},
        {name:	'0b-电核退回店面提报'	,value:	'0b'},
        {name:	'0c-风控退回店面提报'	,value:	'0c'},
        {name:	'0d-总部电核中'	,value:	'0d'},
        {name:	'0e-合同审核退回店面'	,value:	'0e'},
        {name:	'0f-首保审核退回店面'	,value:	'0f'},
        {name:	'0g-店面提回修改中'	,value:	'0g'},
        {name:	'0h-等待征信'	,value:	'0h'},
        {name:	'0i-等待征信报告'	,value:	'0i'},
        {name:	'0j-等待大数据验证'	,value:	'0j'},
        {name:	'0k-等待征信报告'	,value:	'0k'},
        {name:	'0l-等待评分'	,value:	'0l'},
        {name:	'0m-等待新风控'	,value:	'0m'},
        {name:	'0p-等待订金支付'	,value:	'0p'},
        {name:	'0r-双十一合同取消中'	,value:	'0r'},
        {name:	'20-合同已取消'	,value:	'20'},
        {name:	'21-风控前合同取消'	,value:	'21'},
        {name:	'22-风控后合同取消'	,value:	'22'},
        {name:	'30-合同已拒绝'	,value:	'30'},
        {name:	'061-合同请款'	,value:	'061'},
        {name:	'32-已生效合同非当月取消'	,value:	'32'},
        {name:	'33-正常客户结清'	,value:	'33'},
        {name:	'34-正常提前还款结清'	,value:	'34'},
        {name:	'35-强制提前还款结清'	,value:	'35'},
        {name:	'36-转续租提前还款结清'	,value:	'36'},
        {name:	'37-转销售提前还款结清'	,value:	'37'},
        {name:	'38-坏账核销结清'	,value:	'38'},
        {name:	'39-客户赎回结清'	,value:	'39'},
        {name:	'3a-二手车买断结清'	,value:	'3a'},
        {name:	'3b-展期'	,value:	'3b'},
        {name:	'60-质押贷审核中'	,value:	'60'},
        {name:	'2-部分债权转让'	,value:	'2'},
        {name:	'3-全额债权转让'	,value:	'3'},
        {name:	'4-核销账户'	,value:	'4'},
        {name:	'5-部分债权转让结清'	,value:	'5'},
        {name:	'6-全额债权转让结清'	,value:	'6'},
        {name:	'7-核销账户结清"'	,value:	'7'}
    ]
};