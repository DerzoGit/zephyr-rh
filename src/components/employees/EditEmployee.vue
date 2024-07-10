<template>
    <div v-if="employee">
        <h4>Mise à jour de l'employé</h4>
        <form @submit.prevent="updateEmployeeForm">
            <input v-model="employee.name">
            <input v-model="employee.department">
            <button type="submit" class="button--valid">Sauvegarder l'utilisateur</button>
            <button type="button" @click="cancelEdit" class="button--negative">Annuler l'édition</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        employee: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateEmployeeForm() {
            this.$emit('updateEmployee', { ...this.employee })
        },
        cancelEdit() {
            this.$emit('cancelEdit')
        }
    }
}
</script>

<style lang="scss" scoped>
    form {
        padding: 1.2rem;
        max-width: 20rem;
        margin: 0 auto; 
    }
</style>