import Vue from 'vue'
import {
    Button, Main, Table, TableColumn, Container,
    DropdownItem, DropdownMenu, aside, menu, submenu, MenuItem,
    MenuItemGroup, Header, Footer, Dropdown, Input, Form, FormItem,
    Tabs, TabPane, Row, Col, ButtonGroup, Tooltip, Pagination, Switch, Dialog, MessageBox
} from 'element-ui'

import { Message } from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table, TableColumn)
Vue.use(TableColumn)
Vue.use(Container)
Vue.use(Main)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(aside)
Vue.use(menu)
Vue.use(submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Dropdown)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(ButtonGroup)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Dialog)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm