## 说明
m-pack 里面是vux的全体包, 主要用于mint-ui的补充

使用步骤:

1. 进入m-pack目录
```
npm install
```
2. 项目中引用
timao-m/src/views/tibao/start-entry.vue

+ 引入组件
```
import {Step,StepItem} from '../../../../m-pack/src/components/step'
import Toast from '../../../../m-pack/src/components/toast/index.vue';
import   Actionsheet   from '../../../../m-pack/src/components/actionsheet/index.vue'

```

+ 注册组件

components:{
            Step,StepItem,Actionsheet,Toast
},

+ 调用
```
<step v-model="step1" background-color='#fbf9fe'>
            <step-item title="title" description="des1"></step-item>
            <step-item title="title2" description="des2"></step-item>
            <step-item title="title3" description="des3"></step-item>
        </step>
        <toast v-model="show1" text="Hello World"></toast>
        <actionsheet
                v-model="show1"
                :menus="menus1"
                 ></actionsheet>
```
## 注意事项
1. $t引用的时候去掉
2. tibao-m 引入公用组件在 src/com.js
3. tibao-m 引入某个组件的时候可以直接用相对路径, 如上图所示