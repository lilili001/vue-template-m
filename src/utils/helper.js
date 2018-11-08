/*
* 如果是范围的日期选择 调用方法： helper.datepickerRange('#date1Id','#date2Id')
* 如果是单个日期选择 调用方法: helper.datepickerRange('#date1Id')
* 也可以在页面中使用datepickr文档的调用方法
* */

const helper = {
    datepickerRange(startObj,endObj){
        var _this = this;
        var today = this.getDateStr(0);
        var checkIn,checkOut;
        checkIn = $(startObj).flatpickr({
            //maxDate:today,
            onChange:function (dateObj, dateStr, instance) {
                var str = dateStr.replace(/-/g,'/');

                if( dateStr && !!endObj ){
                    var checkOutMinDate = new Date(str).getTime();
                    checkOutMinDate = new Date( checkOutMinDate );
                    var Y = checkOutMinDate.getFullYear() + '-';
                    var M = (checkOutMinDate.getMonth()+1 < 10 ? '0'+(checkOutMinDate.getMonth()+1) : checkOutMinDate.getMonth()+1) + '-';
                    var D = checkOutMinDate.getDate() + ' ';
                    checkOut.set('minDate', Y+M+D );
                }
            }
        });
        var tomorrow = this.getDateStr(1);
        if( !!endObj ){
            checkOut = $(endObj).flatpickr({
                //maxDate:today,
                onChange:function (dateObj, dateStr, instance) {
                    var str = dateStr.replace(/-/g,'/');
                    var checkInMaxDate = new Date(str).getTime();
                    if( dateStr ) {
                        checkInMaxDate = new Date(checkInMaxDate);
                        var Y = checkInMaxDate.getFullYear() + '-';
                        var M = (checkInMaxDate.getMonth()+1 < 10 ? '0'+(checkInMaxDate.getMonth()+1) : checkInMaxDate.getMonth()+1) + '-';
                        var D = checkInMaxDate.getDate() + ' ';
                        checkIn.set('maxDate', Y+M+D );
                    }
                }
            });
        }

        $(startObj+","+endObj).on('mouseenter',function () {
            if(!!this.value){
                var _this = this;
                $(this).siblings('.ivu-icon-ios-close-outline').show();
                $(this).siblings('.ivu-icon-ios-close-outline').on('mouseover',function () {
                            $(this).show();
                        }).click(function () {
                            $(_this).val('');
                            if( $(_this).data('flag') === 'start' ){
                                checkIn.clear();
                            }else{
                               endObj && checkOut.clear();
                            }
                            $(this).hide();
                        });
            }else{
                $(this).siblings('.ivu-icon-ios-close-outline').hide();
            }
        });
        $(startObj+","+endObj).parent().on('mouseout',function () {
            $(this).children('.ivu-icon-ios-close-outline').hide();
        });

        return [checkIn,checkOut]

    },
    getDateStr: function (AddDayCount)
    {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getYear();
        var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0
        var d = dd.getDate() < 10? '0' + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
        return (1900+ y) + '-' + m + '-' + d;
    },
};
export default helper;