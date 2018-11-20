//此文件引入内部 或外部 m-pack的公共组件 进行注册, 主要针对公用部分
import Vue from 'vue';

// import Actionsheet from '../../m-pack/src/components/actionsheet/index.vue'
// import Agree from '../../m-pack/src/components/agree/index.vue'
// import AjaxPlugin from '../../m-pack/src/plugins/ajax/index.js'
// import Alert from '../../m-pack/src/components/alert/index.vue'
// //import AlertModule from '../../m-pack/src/plugins/alert/module'
// import AlertPlugin from '../../m-pack/src/plugins/alert/index.js'
// import AppPlugin from '../../m-pack/src/plugins/app/index.js'
// import Array2stringFilter from '../../m-pack/src/filters/array2String.js'
// import Badge from '../../m-pack/src/components/badge/index.vue'
// import base64 from '../../m-pack/src/tools/base64/index.js'
// import Blur from '../../m-pack/src/components/blur/index.vue'
// import Box from '../../m-pack/src/components/box/index.vue'
// import BusPlugin from '../../m-pack/src/plugins/bus/index.js'
// import ButtonTab from '../../m-pack/src/components/button-tab/button-tab.vue'
// import ButtonTabItem from '../../m-pack/src/components/button-tab/button-tab-item.vue'
// import Calendar from '../../m-pack/src/components/calendar/index.vue'
// import Card from '../../m-pack/src/components/card/index.vue'
// import Cell from '../../m-pack/src/components/cell/index.vue'
// import CellBox from '../../m-pack/src/components/cell-box/index.vue'
// import CellFormPreview from '../../m-pack/src/components/cell-form-preview/index.vue'
// import Checker from '../../m-pack/src/components/checker/checker.vue'
// import CheckerItem from '../../m-pack/src/components/checker/checker-item.vue'
// import CheckIcon from '../../m-pack/src/components/check-icon/index.vue'
// import Checklist from '../../m-pack/src/components/checklist/index.vue'
// import ChinaAddressData from '../../m-pack/src/datas/china_address.json'
// import ChinaAddressV1Data from '../../m-pack/src/datas/china_address_v1.json'
// import ChinaAddressV2Data from '../../m-pack/src/datas/china_address_v2.json'
// import ChinaAddressV3Data from '../../m-pack/src/datas/china_address_v3.json'
// import ChinaAddressV4Data from '../../m-pack/src/datas/china_address_v4.json'
// import ChinamobileTool from '../../m-pack/src/tools/validator/chinaMobile.js'
// import ClickOutsideDirective from '../../m-pack/src/directives/click-outside/index.js'
// import Clocker from '../../m-pack/src/components/clocker/index.vue'
// import CloseDialogsPlugin from '../../m-pack/src/plugins/close-dialogs/index.js'
// import ColorPicker from '../../m-pack/src/components/color-picker/index.vue'
// import ConfigPlugin from '../../m-pack/src/plugins/config/index.js'
// import Confirm from '../../m-pack/src/components/confirm/index.vue'
// import ConfirmPlugin from '../../m-pack/src/plugins/confirm/index.js'
// import cookie from '../../m-pack/src/tools/cookie/index.js'
// import Countdown from '../../m-pack/src/components/countdown/index.vue'
// import Countup from '../../m-pack/src/components/countup/index.vue'
// import dateFormat from '../../m-pack/src/tools/date/format.js'
// import dateRange from '../../m-pack/src/tools/date/range.js'
// import Datetime from '../../m-pack/src/components/datetime/index.vue'
// import DatetimePlugin from '../../m-pack/src/plugins/datetime/index.js'
// import DatetimeRange from '../../m-pack/src/components/datetime-range/index.vue'
// import DatetimeView from '../../m-pack/src/components/datetime-view/index.vue'
// import debounce from '../../m-pack/src/tools/debounce/index.js'
// import Demobasic from '../../m-pack/src/components/fullpage/DemoBasic.vue'
// import Demoindex from '../../m-pack/src/components/popover/DemoIndex.vue'
// import DevicePlugin from '../../m-pack/src/plugins/device/index.js'
// import DevTip from '../../m-pack/src/components/dev-tip/index.vue'
// import Divider from '../../m-pack/src/components/divider/index.vue'
// import Drawer from '../../m-pack/src/components/drawer/index.vue'
// import Flexbox from '../../m-pack/src/components/flexbox/flexbox.vue'
// import FlexboxItem from '../../m-pack/src/components/flexbox/flexbox-item.vue'
// import Flow from '../../m-pack/src/components/flow/flow.vue'
// import FlowLine from '../../m-pack/src/components/flow/flow-line.vue'
// import FlowState from '../../m-pack/src/components/flow/flow-state.vue'
// import FormatTimeFilter from '../../m-pack/src/filters/format-time.js'
// import FormPreview from '../../m-pack/src/components/form-preview/index.vue'
// import FriendlyTimeFilter from '../../m-pack/src/filters/friendly-time.js'
// import Fullpage from '../../m-pack/src/components/fullpage/index.vue'
// import Grid from '../../m-pack/src/components/grid/grid.vue'
// import GridItem from '../../m-pack/src/components/grid/grid-item.vue'
// import Group from '../../m-pack/src/components/group/index.vue'
// import GroupTitle from '../../m-pack/src/components/group-title/index.vue'
// import Icon from '../../m-pack/src/components/icon/index.vue'
// import InlineCalendar from '../../m-pack/src/components/inline-calendar/index.vue'
// import InlineDesc from '../../m-pack/src/components/inline-desc/index.vue'
// import InlineLoading from '../../m-pack/src/components/inline-loading/index.vue'
// import InlineXNumber from '../../m-pack/src/components/inline-x-number/index.vue'
// import InlineXSwitch from '../../m-pack/src/components/inline-x-switch/index.vue'
// import InviewDirective from '../../m-pack/src/directives/inview/index.js'
// import Loading from '../../m-pack/src/components/loading/index.vue'
// import LoadingPlugin from '../../m-pack/src/plugins/loading/index.js'
// import LoadMore from '../../m-pack/src/components/load-more/index.vue'
// import LocalePlugin from '../../m-pack/src/plugins/locale/index.js'
// import Marquee from '../../m-pack/src/components/marquee/marquee.vue'
// import MarqueeItem from '../../m-pack/src/components/marquee/marquee-item.vue'
// import Masker from '../../m-pack/src/components/masker/index.vue'
// import md5 from '../../m-pack/src/tools/md5/index.js'
// import Msg from '../../m-pack/src/components/msg/index.vue'
// import Name2valueFilter from '../../m-pack/src/filters/name2value.js'
// import numberComma from '../../m-pack/src/tools/number/comma.js'
// import numberPad from '../../m-pack/src/tools/number/pad.js'
// import numberRandom from '../../m-pack/src/tools/number/random.js'
// import numberRange from '../../m-pack/src/tools/number/range.js'
// import NumberRoller from '../../m-pack/src/components/number-roller/index.vue'
// import Panel from '../../m-pack/src/components/panel/index.vue'
// import Picker from '../../m-pack/src/components/picker/index.vue'
// import Popover from '../../m-pack/src/components/popover/index.vue'
// import Popup from '../../m-pack/src/components/popup/index.vue'
// import PopupHeader from '../../m-pack/src/components/popup-header/index.vue'
// import PopupPicker from '../../m-pack/src/components/popup-picker/index.vue'
// import PopupRadio from '../../m-pack/src/components/popup-radio/index.vue'
// import Previewer from '../../m-pack/src/components/previewer/index.vue'
// import Qrcode from '../../m-pack/src/components/qrcode/index.vue'
// import querystring from '../../m-pack/src/tools/querystring/index.js'
// import Radio from '../../m-pack/src/components/radio/index.vue'
// import Range from '../../m-pack/src/components/range/index.vue'
// import Rater from '../../m-pack/src/components/rater/index.vue'
// import Scroller from '../../m-pack/src/components/scroller/index.vue'
// import Search from '../../m-pack/src/components/search/index.vue'
// import Selector from '../../m-pack/src/components/selector/index.vue'
// import Shake from '../../m-pack/src/components/shake/index.vue'
// import Spinner from '../../m-pack/src/components/spinner/index.vue'
// import Step from '../../m-pack/src/components/step/step.vue'
// import StepItem from '../../m-pack/src/components/step/step-item.vue'
// import Sticky from '../../m-pack/src/components/sticky/index.vue'
// import stringTrim from '../../m-pack/src/tools/string/trim.js'
// import Swipeout from '../../m-pack/src/components/swipeout/swipeout.vue'
// import SwipeoutButton from '../../m-pack/src/components/swipeout/swipeout-button.vue'
// import SwipeoutItem from '../../m-pack/src/components/swipeout/swipeout-item.vue'
// import Swiper from '../../m-pack/src/components/swiper/swiper.vue'
// import SwiperItem from '../../m-pack/src/components/swiper/swiper-item.vue'
// import Tab from '../../m-pack/src/components/tab/tab.vue'
// import Tabbar from '../../m-pack/src/components/tabbar/tabbar.vue'
// import TabbarItem from '../../m-pack/src/components/tabbar/tabbar-item.vue'
// import TabItem from '../../m-pack/src/components/tab/tab-item.vue'
// import throttle from '../../m-pack/src/tools/throttle/index.js'
// import Timeline from '../../m-pack/src/components/timeline/timeline.vue'
// import TimelineItem from '../../m-pack/src/components/timeline/timeline-item.vue'
// import Tip from '../../m-pack/src/components/tip/index.vue'
// import Toast from '../../m-pack/src/components/toast/index.vue'
// import ToastPlugin from '../../m-pack/src/plugins/toast/index.js'
// import TransferDom from '../../m-pack/src/directives/transfer-dom/index.js'
// import TransferDomDirective from '../../m-pack/src/directives/transfer-dom/index.js'
// import trim from '../../m-pack/src/tools/string/trim'
// import Value2nameFilter from '../../m-pack/src/filters/value2name.js'
// import Video from '../../m-pack/src/components/video/index.vue'
// import ViewBox from '../../m-pack/src/components/view-box/index.vue'
// import VuxComponentListData from '../../m-pack/src/datas/vux_component_list.json'
// import WechatEmotion from '../../m-pack/src/components/wechat-emotion/index.vue'
// import WechatPlugin from '../../m-pack/src/plugins/wechat/index.js'
// import WeekCalendar from '../../m-pack/src/components/week-calendar/index.vue'
// import WepayInput from '../../m-pack/src/components/wepay-input/index.vue'
// import XAddress from '../../m-pack/src/components/x-address/index.vue'
// import XButton from '../../m-pack/src/components/x-button/index.vue'
// import XCircle from '../../m-pack/src/components/x-circle/index.vue'
// import XDialog from '../../m-pack/src/components/x-dialog/index.vue'
// import XHeader from '../../m-pack/src/components/x-header/index.vue'
// import XHr from '../../m-pack/src/components/x-hr/index.vue'
// import XImg from '../../m-pack/src/components/x-img/index.vue'
// import XInput from '../../m-pack/src/components/x-input/index.vue'
// import XNumber from '../../m-pack/src/components/x-number/index.vue'
// import XProgress from '../../m-pack/src/components/x-progress/index.vue'
// import XSwitch from '../../m-pack/src/components/x-switch/index.vue'
// import XTable from '../../m-pack/src/components/x-table/index.vue'
// import XTextarea from '../../m-pack/src/components/x-textarea/index.vue'

/*import mheader from '@/views/tibao/partials/header.vue';
import Grid from '../../m-pack/src/components/grid/grid.vue'
import GridItem from '../../m-pack/src/components/grid/grid-item.vue'
import GroupTitle from '../../m-pack/src/components/group-title/index.vue'
import Card from '../../m-pack/src/components/card/index.vue'
import Divider from '../../m-pack/src/components/divider/index.vue'*/

/*Vue.component("grid",Grid);
Vue.component("grid-item",GridItem);
Vue.component("group-title",GroupTitle);
Vue.component("mheader",mheader);
Vue.component("card",Card);
Vue.component("divider",Divider);*/


/*import XHeader from '@mpack/components/x-header/index.vue'
import Actionsheet from '@mpack/components/actionsheet/index.vue'
import TransferDom from '@mpack/directives/transfer-dom/index.js'
import Card from '@mpack/components/card/index.vue'
import Cell from '@mpack/components/cell/index.vue'
import CellFormPreview from '@mpack/components/cell-form-preview/index.vue'
import Group from '@mpack/components/group/index.vue'
import {Tab, TabItem} from '@mpack/components/tab'
import resultCheck from '@/views/tibao/partials/result-check.vue'
import XInput from '@mpack/components/x-input'
import XTextarea from '@mpack/components/x-textarea'
import Flexbox from '@mpack/components/flexbox/flexbox.vue'
import FlexboxItem from '@mpack/components/flexbox/flexbox-item.vue'
import PopupPicker from '@mpack/components/popup-picker/index.vue'
import Popup from '@mpack/components/popup/index.vue'

Vue.component("XHeader",XHeader);
Vue.component("actionsheet",Actionsheet);
Vue.component("card",Card);
Vue.component("cell",Cell);
Vue.component("group",Group);
Vue.component("Tab",Tab);
Vue.component("TabItem",TabItem);
Vue.component("XInput",XInput);
Vue.component("XTextarea",XTextarea);
Vue.component("Flexbox",Flexbox);
Vue.component("FlexboxItem",FlexboxItem);
Vue.component("PopupPicker",PopupPicker);
Vue.component("Popup",Popup);*/



import ConfigPlugin from '../../m-pack/src/plugins/config/index.js'
import DevicePlugin from '../../m-pack/src/plugins/device/index.js'
import AlertPlugin from '../../m-pack/src/plugins/alert/index.js'
import ConfirmPlugin from '../../m-pack/src/plugins/confirm/index.js'
import ToastPlugin from '../../m-pack/src/plugins/toast/index.js'

//如果要用vux的插件 下面的可以打开
// global VUX config
Vue.use(ConfigPlugin, {$layout: 'VIEW_BOX'}); // global config for VUX, since v2.5.12

// plugins
Vue.use(DevicePlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);

Vue.$vux.toast.show({
    text: 'Loading'
})

/*Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)*/
