<template>
    <div class="nav-bar">
        <router-link to="/">
        <div class="logo-wrap">
            <h1>English Dashboard</h1>
            <!--INSERT LOGO-->
        </div>
        </router-link>
        <!-- IF LOGGED IN, USE CURRENT USER ID <router-link :to="'/students/' + student.id">
        <h3>My Account</h3>
        </router-link> -->
        <router-link to="/login">
        <button class="primary-btn">Log In</button>
        </router-link>
        <router-link to="/signup">
        <button class="secondary-btn">Sign Up</button>
        </router-link>
    </div>

</template>

<script>
export default {
    name: "NavBar",
}
</script>