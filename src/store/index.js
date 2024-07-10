import { createStore } from 'vuex'

export default createStore({
  state: {
    employees: [],
    departments: [],
    lastEmployeeId: 0,
    lastDepartmentId: 0
  },
  getters: {
  },
  mutations: {
    setEmployees(state, employees) {
      state.employees = employees
      state.lastEmployeeId = employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) : 0
    },
    addEmployee(state, employee) {
      employee.id = ++state.lastEmployeeId
      state.employees.push(employee)
    },
    updateEmployee(state, updatedEmployee) {
      const employeeIndex = state.employees.findIndex(employee => employee.id === updatedEmployee.id)
      if(employeeIndex !== -1) {
        state.employees[employeeIndex] = updatedEmployee
      }
    },
    deleteEmployee(state, employeeId) {
      state.employees = state.employees.filter(employee => employee.id !== employeeId)
    },
    setDepartments(state, departments) {
      state.departments = departments
      state.lastDepartmentId = departments.length > 0 ? Math.max(...departments.map(department => department.id)) : 0
    },
    addDepartment(state, department) {
      department.id = ++state.lastDepartmentId
      state.departments.push(department)
    },
    updateDepartment(state, updatedDepartment) {
      const departmentIndex = state.departments.findIndex(department => department.id === updatedDepartment.id)
      if(departmentIndex !== -1) {
        state.departments[departmentIndex] = updatedDepartment
      }
    },
    deleteDepartment(state, departmentId) {
      state.departments = state.departments.filter(department => department.id !== departmentId)
    }
  },
  actions: {
    fetchEmployees({ commit }) {
      const employees = [
        { id: 1, name: "Jane", department: "Ressources humaines" },
        { id: 2, name: "Jan", department: "Communication" },
        { id: 3, name: "Jun", department: "Informatique" },
        { id: 4, name: "Jon", department: "Ressources humaines" }
      ]
      commit('setEmployees', employees)
    },
    fetchDepartments({ commit }) {
      const departments = [
        { id: 1, name: "Ressources humaines" },
        { id: 2, name: "Communication" },
        { id: 3, name: "Informatique" }
      ]
      commit("setDepartments", departments)
    }
  },
  modules: {
  }
})
