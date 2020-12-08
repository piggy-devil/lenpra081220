<template>
  <AppHeader />
    <div class="w-full flex">
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from "./components/front/AppHeader";

export default {
    components: { AppHeader},
};
</script>

<style></style>
