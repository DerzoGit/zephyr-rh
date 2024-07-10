<template>
    <div class="employee-list">
        <p>Parcourir d'autres employés :</p>
        <ul class="employee-list__name">
            <li v-for="employee in employees" :key="employee.id">
                <router-link :to="{ name: 'EmployeeDetails', params: { id: employee.id}}">{{ employee.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "NavEmployeeList",
    computed: {
        ...mapState(['employees'])
    },
    methods: {
        ...mapActions(['fetchEmployees'])
    },
    mounted() {
        this.fetchEmployees()
    }
}
</script>

<style lang="scss" scoped>
    .employee-list {
        padding: 1.2rem;
        max-width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        &__name {
            li {
                display: flex;
                justify-content: center;
            }
        }
    }
</style>