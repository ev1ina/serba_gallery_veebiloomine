<script>
export default {
    data() {
        return { menuOpen: false };
    },
};
</script>

<template>
    <header class="site-header">
        <div class="container header-inner">
            <RouterLink class="brand" to="/"
                >Sebra<small>galerii ja kunstistuudio</small></RouterLink
            >
            <button
                class="menu-toggle"
                @click="menuOpen = !menuOpen"
                :aria-expanded="menuOpen"
                aria-controls="main-menu"
                :aria-label="menuOpen ? 'Sulge menüü' : 'Ava menüü'"
            >
                <span></span><span></span><span></span>
            </button>
            <nav
                id="main-menu"
                class="main-menu"
                @click="menuOpen = false"
                :class="{ 'is-open': menuOpen }"
                aria-label="Peamenüü"
            >
                <RouterLink to="/">Avaleht</RouterLink
                ><RouterLink to="/#looming">Looming</RouterLink
                ><RouterLink to="/artists">Kunstnikud</RouterLink
                ><RouterLink to="/courses">Kursused</RouterLink
                ><RouterLink to="/#meist">Meist</RouterLink>
            </nav>
        </div>
    </header>
</template>
