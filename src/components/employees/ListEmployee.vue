<template>
    <div>
        <ul>
            <li v-for="employee in employees" :key="employee.id">
                <router-link :to="{ name: 'EmployeeDetails', params: { id: employee.id}}">{{ employee.name }}</router-link>
                {{ " | Département - " + employee.department }}
                <div>
                    <button @click="$emit('editEmployee', employee)">Mettre à jour l'employé</button>
                    <button @click="deleteEmployee(employee.id)" class="button--negative">Supprimer cet employé</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "EmployeeList",
    computed: {
        ...mapState(['employees'])
    },
    methods: {
        ...mapActions(['fetchEmployees', 'deleteEmployee']),
        deleteEmployee(employeeId) {
            this.$store.commit('deleteEmployee', employeeId)
        }
    },
    mounted() {
        this.fetchEmployees()
    }
}
</script>