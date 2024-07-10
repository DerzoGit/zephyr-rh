<template>
    <div>
        <ul>
            <li v-for="department in departments" :key="department.id">
                {{ department.name }}
                <div>
                    <button @click="$emit('editDepartment', department)">Mettre à jour le département</button>
                    <button @click="deleteDepartment(department.id)" class="button--negative">Supprimer ce département</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "DepartmentList",
    computed: {
        ...mapState(['departments'])
    },
    methods: {
        ...mapActions(['fetchDepartments', 'deleteDepartment']),
        deleteDepartment(departmentId) {
            this.$store.commit('deleteDepartment', departmentId)
        }
    },
    mounted() {
        this.fetchDepartments()
    }
}
</script>

<style></style>