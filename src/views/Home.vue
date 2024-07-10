<template>
  <div class="home">
    <h2>Liste des employés :</h2>
    <h3>Ajouter un employé</h3>
    <AddEmployee/>
    <EditEmployee v-if="isEditing" :employee="selectedEmployee" @cancelEdit="cancelEdit" @updateEmployee="updateEmployee"/>
    <EmployeeList :employees="employees" @editEmployee="editEmployee"/>

    <h2>Liste des départements :</h2>
    <h3>Ajouter un département</h3>
    <AddDepartment/>
    <EditDepartment v-if="isEditing" :department="selectedDepartment" @cancelEdit="cancelEdit" @updateDepartment="updateDepartment"/>
    <DepartmentList :departments="departments" @editDepartment="editDepartment"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EmployeeList from '@/components/employees/ListEmployee.vue'
import AddEmployee from '@/components/employees/AddEmployee.vue'
import AddDepartment from '@/components/departments/AddDepartment.vue'
import EditEmployee from '@/components/employees/EditEmployee.vue'
import DepartmentList from '@/components/departments/ListDepartments.vue'
import EditDepartment from '@/components/departments/EditDepartment.vue'

export default {
  name: 'Home',
  components: {
    EmployeeList,
    AddEmployee,
    AddDepartment,
    EditEmployee,
    DepartmentList,
    EditDepartment
  },
  data() {
    return {
      isEditing: false,
      selectedEmployee: null,
      selectedDepartment: null
    }
  },
  methods: {
    ...mapActions(['updateEmployee']),
    editEmployee(employee) {
      this.selectedEmployee = { ...employee }
      this.isEditing = true
    },
    cancelEdit() {
      this.selectedEmployee = null
      this.selectedDepartment = null
      this.isEditing = false
    },
    updateEmployee(updatedEmployee) {
      this.$store.commit('updateEmployee', updatedEmployee)
      this.selectedEmployee = null
      this.isEditing = false
    },
    editDepartment(department) {
      this.selectedDepartment = { ...department }
      this.isEditing = true
    },
    updateDepartment(updatedDepartment) {
      this.$store.commit('updateDepartment', updatedDepartment)
      this.selectedDepartment = null
      this.isEditing = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    max-width: 100vw;
  }
</style>
