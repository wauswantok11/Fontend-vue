<template v-slot:default>
    <div>
        <v-container>
            <div class="mt-3 mb-3 ">
                <h1> ตะกร้าสินค้า </h1>
            </div>
            <v-card class="mx-auto" elevation="6">
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                รูปสินค้า
                            </th>
                            <th class="text-left">
                               ชื่อสินค้า
                            </th>
                            <th class="text-left">
                                ประเภท
                            </th>

                            <th class="text-left">
                                ราคาต่อชิ้น
                            </th>
                            <th class="text-left">
                                จำนวน
                            </th>
                            <th>
                                จัดการออเดอร์
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(order, i) in orders" :key="i">
                            <td><v-img height="80px" width="80px" :src="order.ProductDetails[0].img"></v-img> </td>
                            <td> {{ order.ProductDetails[0].name }} </td>
                            <td> {{ order.ProductDetails[0].type }} </td>
                            <td width="20%">{{ order.ProductDetails[0].price }} </td>
                            <td width="20%">{{ order.Quantity }}</td>
                            <th class="text-left">
                                <v-icon color="red" @click="deleteProduct(order._id)">mdi-delete</v-icon>
                            </th>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Store',
    data: () => {
        return {
            orders: [],
            id_member: localStorage.getItem('member'),
        }
    },
    created() {
        this.CheckLogin()
        this.getOrders();
    },
    methods: {
        CheckLogin() {
            console.log('id_member ' + this.id_member)
            if ( this.id_member == null ) {
                this.$router.push({
                    path: "/"
                });
            } 
        },
        async getOrders() {
            try {
                const url = `http://localhost:3000/api/v1/orders/user/${this.id_member}`
                await this.axios.get(url).then((response) => {
                    console.log(response.data);
                    this.orders = response.data
                })
            } catch (error) {
                if (error) {
                    console.error(error);
                }
            }
        },
        async deleteProduct(id) {
            try {
                this.$swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                    if (result.isConfirmed) {

                        const url = "http://localhost:3000/api/v1/orders/"
                        await this.axios.delete(url + id).then((response) => {
                            console.log(response);
                            // this.orders = response.data
                            this.getOrders();
                        }).catch((err) => {
                            if (err) {
                                console.log(err)
                            }
                        })
                        this.$swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })


            } catch (error) {
                if (error) {
                    console.error(error);
                }
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
</style>