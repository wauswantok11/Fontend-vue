<template>
    <v-app>
        <v-app-bar elevation="4" app color="primary">
            <div class="d-flex align-center">
                <v-toolbar-title>
                    <span style="font-size: 24px; color:white"> {{ user }} </span>
                </v-toolbar-title>
            </div>
            <v-spacer> </v-spacer>
            <v-btn rounded variant="plain" class="py-3 px-3 d-flex justify-space-between mr-3 ml-3"
                v-for="(item, i) in items" :key="i" :to="item.path">
                <v-icon> {{ item.icon }}</v-icon> {{ item.name }}
            </v-btn>
            <!-- <v-btn @click="login()" rounded variant="plain" class="py-3 px-3 d-flex justify-space-between mr-3 ml-3">
                login
            </v-btn> -->
            <v-btn @click="logout()" rounded variant="plain" class="py-3 px-3 d-flex justify-space-between mr-3 ml-3">
                Logout
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>
<!-- <script setup>
    import Router from '../router/index.js';
</script>-->
<script >
// import Router from '../router/index.js';
export default {
    name: 'ToolBar',
    data() {
        return {
            navbarTitle: 'MENU',
            id_member: localStorage.getItem('member'),
            user: localStorage.getItem('user'),
            items: [
                { title: 'Product', icon: 'mdi-view-dashboard', path: '/product', name: 'สินค้า' },
                // { title: 'Me', icon: 'mdi-account', path: '/me', name: 'บัญชี' },
                { title: 'Store', icon: 'mdi-basket', path: '/store', name: 'ตะกร้า' },
                // { title: 'Login', icon: 'mdi-login', path: '/', name: 'เข้าสู่ระบบ' }
            ]
        }
    },
    methods: {
        login() {

        },
        logout() {
            let path = '/'
            if (this.id_member == null) {
                this.$router.push({
                    path: "/"
                });
            } else {
                this.id_member = localStorage.removeItem('member')
                this.$router.push(path);
            }
        }
    }
}
</script>

<style> @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

 * {
     font-family: 'IBM Plex Sans Thai', sans-serif;
     color: #414141;
 }
</style>