<template>
    <div>
        <Row>
            <i-col span="16" offset="4">

        <Card>


        <h1>1.按钮：normal</h1>
        <p>1.1.large</p>

        <Button size="large" type="primary">正面</Button>
        <Button size="large" type="ghost">负面</Button>
        <Button size="large" disabled>禁用(Disabled)</Button>

        <p>1.2.base</p>
        <Button type="primary">正面</Button>
        <Button type="ghost">负面</Button>
        <Button disabled>禁用(Disabled)</Button>

        <p>1.3.button with icon</p>
        <Button type="primary" icon="ios-search">Search</Button>
        <Button type="ghost" icon="ios-search">负面</Button>

        <h1>2.表格</h1>

        <Form ref="formData" :model="formData" class="bgary padding030 mar-t15 bg-shadow bg-white">
            <Row>
                <Col span="8">
                <FormItem label="子数据源名称" class="text-left">
                    <Input class="w220" type="text" ></Input>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="数据源名称" class="text-left ds-name">
                    <Select clearable class="w220" placeholder="请选择">
                    </Select>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem>
                    <Button class="mar-r4" type="primary">查询</Button>
                    <Button class="mar0" type="ghost">重置</Button>
                </FormItem>
                </Col>
            </Row>
        </Form>
        <div class="bg-shadow bg-white padding2030">
            <Row class="mar-b10 text-right">
                <Button type="primary" class="mar-r4 cust icon" icon="plus">添加子数据源 </Button>
                <Button type="ghost" icon="close-round">删除</Button>
            </Row>
            <Table :data="data1" border :columns="columns1"></Table>
            <Page class="mar-t10" :total="100" show-sizer showTotal showSizer showElevator ></Page>
        </div>
        <h1>3.弹窗</h1>
        <p>3.1 alert</p>
        <Button @click="instance('info')">Modal Alert</Button>
        <p>3.2 normal</p>
        <Button type="primary" @click="modal1 = !modal1">Normal Modal</Button>
        <Modal
                v-model="modal1"
                title="Common Modal dialog box title"
                @on-ok="ok"
                @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>

        <h1>4.form</h1>
        <Input class="w220" disabled="" v-model="a"></Input>
        <Select v-model="model2" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Form>
            <FormItem label="调用风控时间" class="mar-t20">
                <Row>
                    <Col span="5">
                    <input type="text" id="check_in_date" @click="fnClick" class="flatpickr ivu-input w200" readonly="readonly">
                    </Col>
                    <Col span="1" style="text-align: center;">-</Col>
                    <Col span="5">
                    <input id="check_out_date" type="text" data-flag="end"  @click="fnClick" class="flatpickr ivu-input w200" readonly="readonly">
                    </Col>
                </Row>
            </FormItem>
        </Form>

        <h1>5.tab</h1>
        <Tabs value="name1">
            <TabPane label="标签一" name="name1">标签一的内容</TabPane>
            <TabPane label="标签二" name="name2">标签二的内容</TabPane>
            <TabPane label="标签三" name="name3">标签三的内容</TabPane>
        </Tabs>

        <Tabs type="card">
            <TabPane label="标签一">标签一的内容</TabPane>
            <TabPane label="标签二">标签二的内容</TabPane>
            <TabPane label="标签三">标签三的内容</TabPane>
        </Tabs>
        <p> menu </p>
        <Menu mode="horizontal" active-name="1">
            <MenuItem name="1">
                内容管理
            </MenuItem>
            <MenuItem name="2">
                用户管理
            </MenuItem>
            <MenuItem name="4">
                综合设置
            </MenuItem>
        </Menu>

        </Card>
            </i-col>
        </Row>
    </div>
</template>
<script type="text/javascript">
    import Flatpickr from '@/assets/js/lib/flatpickr.min';
    import zh from '@/assets/js/lib/zh';
    export default{
        name:"vButton",
        data(){
            return {
                checkIn:null,
                checkOut:null,
                a:'aaa',
                modal1:false,
                footerHide:false,
                formData:{
                    "callRiskStartTime":"",
                    "callRiskEndTime":""
                },
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model2: '',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        "sortable": true,
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        mounted(){
            this.fnFlatPicker();
        },
        methods:{
            fnFlatPicker() {
                Flatpickr.localize(zh.zh);
                var _this = this;
                var today = this.getDateStr(0);
                this.checkIn = $("#check_in_date").flatpickr({
                    maxDate:today,
                    onChange:function (dateObj, dateStr, instance) {
                        var str = dateStr.replace(/-/g,'/');
                        _this.formData.callRiskStartTime = new Date(str).getTime();
                        if( dateStr ){
                            var checkOutMinDate = _this.formData.callRiskStartTime ;
                            checkOutMinDate = new Date( checkOutMinDate );
                            var Y = checkOutMinDate.getFullYear() + '-';
                            var M = (checkOutMinDate.getMonth()+1 < 10 ? '0'+(checkOutMinDate.getMonth()+1) : checkOutMinDate.getMonth()+1) + '-';
                            var D = checkOutMinDate.getDate() + ' ';
                            _this.checkOut.set('minDate', Y+M+D );
                        }
                    }
                });
                var tomorrow = this.getDateStr(1);
                this.checkOut = $("#check_out_date").flatpickr({
                    maxDate:today,
                    onChange:function (dateObj, dateStr, instance) {
                        var str = dateStr.replace(/-/g,'/');
                        _this.formData.callRiskEndTime = new Date(str).getTime();
                        var checkInMaxDate = _this.formData.callRiskEndTime ;
                        if( dateStr ) {
                            checkInMaxDate = new Date(checkInMaxDate);
                            var Y = checkInMaxDate.getFullYear() + '-';
                            var M = (checkInMaxDate.getMonth()+1 < 10 ? '0'+(checkInMaxDate.getMonth()+1) : checkInMaxDate.getMonth()+1) + '-';
                            var D = checkInMaxDate.getDate() + ' ';
                            _this.checkIn.set('maxDate', Y+M+D );
                        }
                    }
                });
            },
            instance (type) {
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            content: content
                        });
                        break;
                }
            },
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            },
            fnClick(){
                event.preventDefault()
            },
            getDateStr: function (AddDayCount)
            {
                var dd = new Date();
                dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
                var y = dd.getYear();
                var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
                var d = dd.getDate() < 10? '0' + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
                return (1900+ y) + '-' + m + '-' + d;
            }
        }
    }
</script>