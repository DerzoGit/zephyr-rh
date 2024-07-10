<template>
    <div class="employeeDetails">
        <div>
            <h1>Fiche de {{ employee.name }} :</h1>
            <p v-if="employee" class="employee__details">
                <span>Nom de l'employé : {{ employee.name }}</span>
                <span>Département : {{ employee.department }}</span>
            </p>
            <p v-else>L'employé n'a pas été trouvé.</p>
        </div>
        <div>
            <NavEmployeeList/>
        </div>
    </div>
</template>

<script>
import NavEmployeeList from '@/components/employees/NavEmployeeList.vue'

export default {
    name: 'EmployeeDetails',
    components: {
        NavEmployeeList
    },
    computed: {
        employee() {
            const id = parseInt(this.$route.params.id)
            return this.$store.state.employees.find(employee => employee.id === id)
        }
    }
}
</script>

<style lang="scss" scoped>
    .employee__details {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 1rem;
        span {
            display: flex;
            justify-self: flex-start;
        }
    }
    .employeeDetails {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>