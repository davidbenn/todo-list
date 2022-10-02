<template>
    <div class="navbar bg-base-100 shadow">
  <div class="flex-1">
    <router-link to="/" class="btn btn-ghost normal-case text-xl">
        Todo
    </router-link>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end mr-3">
       <p class="text-purple-500">By: David Bene</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
   name: 'Navbar',
}
</script>

<style>

</style>