<template>
  <div id="app">
    <FormCard @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance"/>
    <BudgetList :list="list" @deleteItem="onDeleteItem"/>
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormCard from "@/components/FormCard";
export default {
  name: 'App',
  components: {
    BudgetList,
    TotalBalance,
    FormCard
  },
  data: () => ({
    list: {
      1: {
        type: 'Доходы',
        value: 500,
        comment: "Зарплата за январь",
        id: 1,
      },
      2: {
        type: 'Расходы',
        value: -200,
        comment: "Оплатил жкх",
        id: 2,
      },
    }
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  },
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id )
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.$set(this.list, newObj.id, newObj)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
