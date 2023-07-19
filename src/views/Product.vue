<template>
    <v-app>
        <v-container>
            <h1> รายการสินค้า </h1>

            <v-row>
                <v-col class="mt-5 py-3 px-3 " cols="12" md="4" v-for="(item, i) in items" :key="i">
                    <v-sheet class="pa-2 ma-2">
                        <v-card color="#ffffff" width="400" class="mx-auto card-product " elevation="6">
                            <v-img class="img" height="400" :src="item.img" width="100%" />
                            <v-card-title class="card-title text-h5" primary-title>
                                <span id="card_title">{{ item.name }}</span>
                            </v-card-title>
                            <v-card-text>
                                <span class="text_type"> ประเภท: {{ item.type }} </span>
                                <br />
                                <span class="text_price mt-3 mb-3"> ฿{{ item.price }}.00 </span>
                                <br />
                                <span class="text_unit"> {{ item.unit }} ชิ้น</span>
                            </v-card-text>
                            <v-card-actions class="pr-2  py-3 px-3  d-flex justify-space-between">
                                <v-btn color="success" v-if="id_member != null" tile
                                    @click="addStore(item._id, item.price)">
                                    <v-icon left>mdi-cart-plus</v-icon> เพิ่มไปยังรถเข็น
                                </v-btn>
                                <!-- <v-btn class="mr-4"> -->
                                <v-btn elevation="2" class="mr-4"  :to="{ name: 'ProductById', params: { id: item._id } }" icon>
                                    <v-icon elevation="2" color="red">mdi-eye</v-icon>
                                </v-btn>
                                <!-- </v-btn> -->
                            </v-card-actions>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>

        <!-- {{ data_member }} -->
    </v-app>
</template>

<script>

export default {
    name: 'product',
    data: () => {
        return {
            items: [],
            id_member: localStorage.getItem('member'),
        }
    },
    created() {
        this.CheckLogin();
        this.getProduct();
        this.setMember();
    },
    methods: {
        CheckLogin() {
            console.log(this.id_member);
            // if (this.id_member == null) {
            //     this.$router.push({
            //         path: "/"
            //     });
            // }
        },
        setMember() {
            console.log('id member ' + this.id_member)
        },
        async getProduct() {
            try {
                const url = "http://localhost:3000/api/v1/products";
                const response = await this.axios.get(url);
                console.log(response.data[0].data);
                this.items = response.data[0].data;
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        },
        async addStore(idProduct, UnitPrice) {
            try {
                console.log(idProduct);
                const url = `http://localhost:3000/api/v1/products/${idProduct}/orders`
                await this.axios.post(url, {
                    ordersId: this.id_member,
                    ProductsId: idProduct,
                    userId: this.id_member,
                    UnitPrice: UnitPrice,
                    Quantity: 1,
                }).then((response) => {
                    this.$swal.fire({
                        icon: 'success',
                        title: 'คุณได้ทำการเพิ่มสินค้าลงในตะกร้าสินค้าแล้ว',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    console.log(response.data);
                }).catch((err) => {
                    console.log(err);
                })
            } catch (err) {
                console.log(err);
            }
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

.image {
    width: 100%;
    height: 100%;
}

.text_price {
    font-size: 24px;
    color: red;
}

.text_unit {
    font-size: 18px;
}

.text_type {
    font-size: 18px;
}

v-img {
    /* vertical-align: middle; */
    margin: auto auto;
    display: block;
}
</style>