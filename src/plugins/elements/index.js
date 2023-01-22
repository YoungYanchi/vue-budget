import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/packages/theme-chalk/lib/index.css'
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
} from 'element-ui'

const elements = [
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
]
//Устанавливаем язык
locale.use(lang)
// Проходимся по массиву елементов и передаем в Vue.use() елементы, что бы сделать их глобальными
elements.forEach(El => Vue.use(El, { locale}))
