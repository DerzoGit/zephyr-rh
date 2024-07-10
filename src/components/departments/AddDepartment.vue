<template>
    <div>
        <form @submit.prevent="addDepartment">
            <input v-model="newDepartment.name" placeholder="Nom du département">
            <button type="submit" class="button--valid">Ajouter le département</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: "AddDepartment",
    data() {
        return {
            newDepartment: {
                name: ""
            }
        }
    },
    methods: {
        ...mapActions(['addDepartment']),
        addDepartment() {
            this.$store.commit('addDepartment', { ...this.newDepartment })
            this.newDepartment.name = ''
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