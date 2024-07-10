<template>
    <div>
        <form @submit.prevent="addEmployee">
            <input v-model="newEmployee.name" placeholder="Nom">
            <input v-model="newEmployee.department" placeholder="Département">
            <button type="submit" class="button--valid">Ajouter l'employé</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddEmployee",
    data() {
        return {
            newEmployee: {
                name: "",
                department: ""
            }
        }
    },
    methods: {
        ...mapActions(['addEmployee']),
        addEmployee() {
            this.$store.commit('addEmployee', { ...this.newEmployee })
            this.newEmployee.name = ''
            this.newEmployee.department = ''
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        padding: 1.2rem;
        max-width: 20rem;
        margin: 0 auto;
    }
</style>