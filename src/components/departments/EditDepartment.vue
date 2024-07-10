<template>
    <div v-if="department">
        <h4>Mise à jour du département</h4>
        <form @submit.prevent="updateDepartmentForm">
            <input v-model="department.name">
            <button type="submit" class="button--valid">Sauvegarder le département</button>
            <button type="button" @click="cancelEdit" class="button--negative">Annuler l'édition</button>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        department: {
            type: Object,
            required: true
        }
    },
    methods: {
        updateDepartmentForm() {
            this.$emit('updateDepartment', { ...this.department })
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