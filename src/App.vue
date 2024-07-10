<template>
  <div>
    <nav>
      <router-link to="/">Accueil</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  display: flex;
  justify-content: center;
}

button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  margin: 0.25rem;
  &:hover {
    background-color: #0056b3;
  }
}

.button {
  &--valid {
    background-color: #018849;
    &:hover {
      background-color: #026435;
    }
  }
  &--negative {
    background-color: #aa2424;
    &:hover {
      background-color: #771919;
    }
  }
}

input {
  padding: 0.8rem;
  margin: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: calc(95% - 2rem);
}

ul {
  list-style-type: none;
}

li {
  padding: 0.8rem;
}

nav {
  padding: 30px;

  
}

a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &:hover {
      color: #537596;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
