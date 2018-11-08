<template>
    <div>
        <div class="simple-breadcrumb col-xs-11">
            <span>结算</span>
            <Icon type="ios-arrow-right"></Icon>
            <span>付款信息</span>

        </div>
        <Form :model="formData" ref="formData" class="bgary padding030 mar-t15 bg-shadow bg-white" :label-width="120">

            <!--********************** row (1) ***************************-->
            <Row class="">
                <i-col span="8" class="text-left">
                    <FormItem label="收款银行" prop="bank" class="w306 text-left">
                        <Select type="text" v-model="formData.bank" placeholder="请选择">
                            <Option v-for="(item,key) in dp_list.bank_dropList" :key="key" :value="item.value">
                                {{item.name}}
                            </Option>
                        </Select>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-center">
                    <FormItem label="收款人" class="w306" prop="reciver">
                        <Input type="text" v-model="formData.reciver" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>

                <i-col span="8" class="text-right">
                    <FormItem label="收款账号" class="w306" prop="bankNo">
                        <Input type="text" v-model="formData.bankNo" placeholder="">
                        </Input>
                    </FormItem>
                </i-col>
            </Row>

            <!--********************** row (2) ***************************-->
            <Row class="mar-t14">
                <i-col span="8" class="text-left">
                    <FormItem label="主体名称" class="w306" prop="zhuti">
                        <Input type="text" v-model="formData.zhuti" placeholder="">
                        </Input>
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
            <Table @on-row-click="fnTableRowClick" class="table-static-list" border :columns="columns4" :data="tableListData"></Table>

            <Row class="mar-t10 text-center">
                <Page :total="pager.total" :page-size="formData.pageSize" :page-size-opts="pager.Opts" @on-change="pageChange" @on-page-size-change="pageSizeChange" show-total show-sizer></Page>
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
                    "bank": "",
                    "reciver": "",
                    "bankNo": "",
                    "zhuti": ""
                },
                columns4: [{
                    "title": "序号",
                    "width": 60,
                    "fixed": "left"
                }],
                tableListData: []
            }
        },
        mounted() {
            document.title = '结算-付款信息';
            var dateGroup0 = helper.datepickerRange("#dsctjrq", "#dsctjrqEnd");
            this.dateGroup = dateGroup0;

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
