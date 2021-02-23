import Vue from 'vue'
import Router from 'vue-router'
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Radio from "../components/Radio";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Link from "../components/Link";
import Input from "../components/Input";
import Select from "../components/Select";
import Tables from "../components/Tables";
import Alerts from "../components/Alerts";
import Messages from "../components/Messages";
import Switchs from "../components/Switchs";
import DatePicker from "../components/DatePickers";
import Uploads from "../components/Uploads";
import Form from "../components/Forms";
import FormsCustom from "../components/FormCustom"
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Button', component:Button},
    {path:'/Checkbox', component: Checkbox},
    {path:'/radio', component:Radio},
    {path:'/container',component: Container},
    {path:'/layout',component: Layout},
    {path:'/link',component: Link},
    {path:'/input',component: Input},
    {path:'/select',component: Select},
    {path:'/table',component: Tables},
    {path:'/alert',component: Alerts},
    {path:'/message',component: Messages},
    {path:'/switch',component: Switchs},
    {path:'/datePicker',component: DatePicker},
    {path:'/upload',component: Uploads},
    {path:'/form',component: Form},
    {path:'/formsCustom',component: FormsCustom},

  ]
})
