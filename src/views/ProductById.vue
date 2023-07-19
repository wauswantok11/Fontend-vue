<template>
    <div style="display: block;">
        <v-container>
            <v-card class="mx-auto " height="700px" outlined elevation="7" >

                <!-- <v-img class="img" height="500" :src="product.img" width="100%" /> -->

                {{ Product_name }}

            </v-card>

        </v-container>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: "ProductById",
    data: () => {
        return {
            itemsProduct: [],
            id: '',
            url: 'http://localhost:3000/api/v1/products/',
            Product_name: '',
        }
    },
    created() {
       this.ProductById();
    },
    methods: {
        async ProductById() {
            try {
                this.id = this.$route.params.id;
                // const url = 'http://localhost:3000/api/v1/products/';
                await this.axios.get(this.url + this.id).then((response) => {
                    console.log(response.data[0].name);
                    this.Product_name = response.data.name;
                }).catch((err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            } catch (err) {
                if (err) {
                    console.log(err)
                }
            }
        }
    }
}
</script>

<style></style>