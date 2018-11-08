<template>
    <div>
        <div class="simple-breadcrumb col-xs-11">
            <span></span>

        </div>
        <Form :model="formData" ref="formData" class="bgary padding030 mar-t15 bg-shadow bg-white" :label-width="120">

            <!--********************** row (1) ***************************-->
            <Row class="">
                <i-col span="8" class="text-left">
                    <FormItem label="申请编号" class="w306" prop="srcbillcode">
                        <Input type="text" v-model="formData.srcbillcode" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="暂存号" class="w306" prop="zancunpicihao">
                        <Input type="text" v-model="formData.zancunpicihao" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="批次号" class="w306" prop="bactchno">
                        <Input type="text" v-model="formData.bactchno" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (2) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="付款方式" prop="fukuanfsh" class="w306 text-left">
                        <Select type="text" v-model="formData.fukuanfsh" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.fukuanfsh_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="收款银行" class="w306" prop="shoukuanbank">
                        <Input type="text" v-model="formData.shoukuanbank" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="收款方名称" class="w306" prop="shoukuanmch">
                        <Input type="text" v-model="formData.shoukuanmch" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (3) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="付款类型" prop="fukuantype" class="w306 text-left">
                        <Select type="text" v-model="formData.fukuantype" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.fukuantype_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="实际放款日期起" prop="shijifukriqstart" class="w306 datepicker">
                        <input id="shijifukriqstart" data-flag="" v-model="formData.shijifukriqstart"
                               class="flatpickr ivu-input" readonly placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="实际放款日期止" prop="shijifukriqend" class="w306 datepicker">
                        <input id="shijifukriqend" data-flag="" v-model="formData.shijifukriqend"
                               class="flatpickr ivu-input" readonly placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (4) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="是否退票" prop="asftp" class="w306 text-left">
                        <Select type="text" v-model="formData.asftp" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.asftp_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="付款状态" prop="status" class="w306 text-left">
                        <Select type="text" v-model="formData.status" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.status_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="是否库融车" prop="asfkcc" class="w306 text-left">
                        <Select type="text" v-model="formData.asfkcc" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.asfkcc_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (5) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="合同生效日期:起" prop="startDate" class="w306 datepicker">
                        <input id="startDate" data-flag="" v-model="formData.startDate" class="flatpickr ivu-input"
                               readonly placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="合同生效日期:止" prop="endDate" class="w306 datepicker">
                        <input id="endDate" data-flag="" v-model="formData.endDate" class="flatpickr ivu-input" readonly
                               placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="车辆类型" prop="acllx" class="w306 text-left">
                        <Select type="text" v-model="formData.acllx" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.acllx_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (6) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="租赁属性" prop="apzsx" class="w306 text-left">
                        <Select type="text" v-model="formData.apzsx" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.apzsx_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="付款金额" class="w306" prop="fukuanje">
                        <Input type="text" v-model="formData.fukuanje" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="创建日期:起" prop="startCreateDate" class="w306 datepicker">
                        <input id="startCreateDate" data-flag="" v-model="formData.startCreateDate"
                               class="flatpickr ivu-input" readonly placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (7) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="创建日期:止" prop="endCreateDate" class="w306 datepicker">
                        <input id="endCreateDate" data-flag="" v-model="formData.endCreateDate"
                               class="flatpickr ivu-input" readonly placeholder=""/>
                        <Icon type="ios-close-outline"></Icon>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="保险批次号" class="w306" prop="insuranceBatchno">
                        <Input type="text" v-model="formData.insuranceBatchno" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="收款方属性" prop="admsx1" class="w306 text-left">
                        <Select type="text" v-model="formData.admsx1" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.admsx1_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (8) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="订单申请类型" prop="applyType" class="w306 text-left">
                        <Select type="text" v-model="formData.applyType" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.applyType_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="租赁公司名称" prop="azlgsdm" class="w306 text-left">
                        <Select type="text" v-model="formData.azlgsdm" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.azlgsdm_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="授权书标识" prop="accreditFlag" class="w306 text-left">
                        <Select type="text" v-model="formData.accreditFlag" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.accreditFlag_dropList" :key="key" :value="item.value">
                                {{item.name}}

                            </Option>
                        </Select>
                    </FormItem>
                </i-col>
            </Row>

            <Row class="text-center mar-t20">
                <FormItem>
                    <Button type="primary" class="mar-r4" @click="queryList">查询</Button>
                    <Button type="ghost" class="mar-r4" @click="fnReset('formData')">重置</Button>
                </FormItem>
            </Row>
        </Form>

        <div class="table-wrap padding2030 bg-white bg-shadow text-right">
            <Row class="mar-b10 text-right">
                <Button type="primary" class="mar-r4 cust icon" icon="export" @click="">导出</Button>
            </Row>
            <Table @on-row-click="fnTableRowClick" class="table-static-list" border :columns="columns4"
                   :data="tableListData"></Table>

            <Row class="mar-t10 text-center">
                <Page :total="pager.total" :page-size="formData.pageSize" :page-size-opts="pager.Opts"
                      @on-change="pageChange" @on-page-size-change="pageSizeChange" show-total show-sizer></Page>
            </Row>
        </div>
    </div>
</template>

<script>
    import helper from "@/utils/helper";
    import {
        drop_lists
    }
        from '@/utils/drop_options';

    import Flatpickr from '@/assets/js/lib/flatpickr.min';
    import zh from '@/assets/js/lib/zh';
    Flatpickr.localize(zh.zh);

    export
    default {
        name: "fangkuan",
        data() {
            return {
                pager: {
                    "total": 0,
                    "Opts": [10, 20, 50, 100, 200]
                },
                dp_list: drop_lists,
                dateGroup: [],
                formData: {
                    "currentPage": 1,
                    "pageSize": 10,
                    "srcbillcode": "",
                    "zancunpicihao": "",
                    "bactchno": "",
                    "fukuanfsh": "",
                    "shoukuanbank": "",
                    "shoukuanmch": "",
                    "fukuantype": "",
                    "shijifukriqstart": "",
                    "shijifukriqend": "",
                    "asftp": "",
                    "status": "",
                    "asfkcc": "",
                    "startDate": "",
                    "endDate": "",
                    "acllx": "",
                    "apzsx": "",
                    "fukuanje": "",
                    "startCreateDate": "",
                    "endCreateDate": "",
                    "insuranceBatchno": "",
                    "admsx1": "",
                    "applyType": "",
                    "azlgsdm": "",
                    "accreditFlag": ""
                },
                columns4: [{"title": "序号", "width": 60, "fixed": "left"}, {
                    "title": "客户名称 ",
                    "key": "akhxm",
                    "width": 100
                }, {"title": "暂存号 ", "key": "zancunpicihao", "width": 100}, {
                    "title": "付款类型 ",
                    "key": "fukuantype",
                    "width": 100
                }, {"title": "原付款金额 ", "key": "fukuanjine", "width": 120}, {
                    "title": "实际付款金额 ",
                    "key": "asjfkje",
                    "width": 140
                }, {"title": "抵扣金额 ", "key": "adkje", "width": 100}, {
                    "title": "付款状态 ",
                    "key": "status",
                    "width": 100
                }, {"title": "付款方式 ", "key": "fukuanfsh", "width": 100}, {
                    "title": "店面属性 ",
                    "key": "admsx",
                    "width": 100
                }, {"title": "租赁属性 ", "key": "apzsx", "width": 100}, {
                    "title": "车辆类型 ",
                    "key": "acllx",
                    "width": 100
                }, {"title": "合同生效日期 ", "key": "dHtsxrq", "width": 140}, {
                    "title": "实际付款时间 ",
                    "key": "shijifukriq",
                    "width": 140
                }, {"title": "收款名称 ", "key": "shoukuanmch", "width": 100}, {
                    "title": "收款银行 ",
                    "key": "shoukuanbank",
                    "width": 100
                }, {"title": "收款账号 ", "key": "shoukuanacct", "width": 100}, {
                    "title": "收款省份 ",
                    "key": "shoukprovince",
                    "width": 100
                }, {"title": "收款城市 ", "key": "shoukctyu", "width": 100}, {
                    "title": "店面名称 ",
                    "key": "atbdmc",
                    "width": 100
                }, {"title": "分公司名称 ", "key": "afgsmc", "width": 120}, {
                    "title": "片区名称 ",
                    "key": "apqmc",
                    "width": 100
                }, {"title": "区域名称 ", "key": "aqymc", "width": 100}, {
                    "title": "租赁公司名称 ",
                    "key": "azlgsmc",
                    "width": 140
                }, {"title": "批次号 ", "key": "batchno", "width": 100}, {
                    "title": "店面属性 ",
                    "key": "admsx",
                    "width": 100
                }, {"title": "是否库融车 ", "key": "asfkcc", "width": 120}, {
                    "title": "是否退票 ",
                    "key": "asftp",
                    "width": 100
                }, {"title": "授权书标识 ", "key": "accreditFlag", "width": 120}, {
                    "title": "付款接口返回码 ",
                    "key": "aresCode",
                    "width": 140
                }, {"title": "付款接口描述 ", "key": "aresMsg", "width": 140}],
                tableListData: []
            }
        },
        mounted() {
            document.title = '';
            var dateGroup0 = helper.datepickerRange("#startDate", "#endDate");
            var dateGroup1 = helper.datepickerRange("#shijifukriqstart", "#shijifukriqend");
            var dateGroup2 = helper.datepickerRange("#startCreateDate", "#endCreateDate");
            this.dateGroup = _.union(dateGroup0, dateGroup1, dateGroup2);

            //查询列表
            this.queryList();
        },
        methods: {
            queryList() {

            },
            go(routename, params) {
                this.$router.go({
                    name: routename,
                    params: params
                })
            },
            pageChange(curPage) {
                this.formData.currentPage = curPage;
                this.queryList();
            },
            pageSizeChange(pageSize) {
                this.formData.pageSize = pageSize;
            },
            fnReset(name) {
                //清除所有日期
                _.each(this.dateGroup, function (element, index) {
                    element.clear();
                });
                this.$refs[name].resetFields();
                this.queryList();
            },
            fnTableRowClick() {
                $('.ivu-poptip-popper').hide();
                $(event.target).parents('.ivu-poptip').find('.ivu-poptip-popper').toggle();
                event.stopPropagation();
            }
        }
    }
</script>
