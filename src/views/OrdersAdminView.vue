<template  v-slot:default>
    <v-app>
        <v-container>
            <div>
                <div class=" py-3 px-3 d-flex justify-space-between ">
                    <h1>Orders By Admin </h1>
                </div>
                
            </div>

        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'OrdersAdmin',
    data: () => {
        return {
            orders: [],
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

* {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    color: #414141;
}
</style>