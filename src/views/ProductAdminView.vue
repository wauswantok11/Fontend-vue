<template v-slot:default>
    <v-app>
        <v-container>
            <div>
                <div class=" py-3 px-3 d-flex justify-space-between ">
                    <h1> CRUD Product </h1>
                    <v-btn class=" py-3 px-3" color="primary" @click="postProduct()">
                        <span> เพิ่มสินค้า </span>
                    </v-btn>
                </div>
                <v-simple-table>
                    <thead>
                        <tr>
                            <th class="text-left" style="font-size: 24px;">
                                รูปสินค้า
                            </th>
                            <th class="text-left" style="font-size: 24px;">
                                สินค้า
                            </th>
                            <th class="text-left" style="font-size: 24px;">
                                ประเภทสินค้า
                            </th>
                            <th class="text-left" style="font-size: 24px;">
                                ราคาต่อชิ้น
                            </th>
                            <th class="text-left" style="font-size: 24px;">
                                จำนวน
                            </th>
                            <th class="text-left" style="font-size: 24px;">
                                แก้ไข/ลบ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, i) in items" :key="i">
                            <td><v-img height="80px" width="80px" :src="item.img"></v-img> </td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.type }}</td>
                            <td>{{ item.price }}</td>
                            <td>{{ item.unit }}</td>
                            <td>
                                <v-icon color="warning" @click="editItem(item)">mdi-pencil</v-icon>
                                <!-- <v-icon color="red" @click="deleteDate(item._id)">mdi-delete</v-icon> -->
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>

                <v-dialog v-model="dialogedit" max-width="600px">
                    <v-card>
                        <v-card-title> {{ saveMode }} </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ชื่อสินค้า" type="text" v-model="postData.name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ประเภท" type="text" v-model="postData.type">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ราคาต่อชิ้น" type="number" v-model="postData.price">
                                    </v-text-field>
                                </v-col><v-col cols="12" md="6">
                                    <v-text-field label="จำนวน" type="number" v-model="postData.unit">
                                    </v-text-field>
                                </v-col><v-col cols="12" md="12">
                                    <v-text-field label="รูปสินค้า" type="text" v-model="postData.img">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between pa-6">
                            <v-btn color="danger" @click="closeData()"> Close</v-btn>
                            <v-btn color="success" @click="saveSelect()"> Save </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

                <!-- <v-dialog v-model="dialogedit_edit" max-width="600px">
                    <v-card>
                        <v-card-title>Update Product </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ชื่อสินค้า" type="text" v-model="postData.name">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ประเภท" type="text" v-model="postData.type">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field label="ราคาต่อชิ้น" type="number" v-model="postData.price">
                                    </v-text-field>
                                </v-col><v-col cols="12" md="6">
                                    <v-text-field label="จำนวน" type="number" v-model="postData.unit">
                                    </v-text-field>
                                </v-col><v-col cols="12" md="12">
                                    <v-text-field label="รูปสินค้า" type="text" v-model="postData.img">
                                    </v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-space-between pa-6">
                            <v-btn color="danger" @click="closeData_edit()"> Close</v-btn>
                            <v-btn color="success" @click="updateProduct()"> Save </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog> -->

            </div>
        </v-container>

    </v-app>
</template>

<script>
export default {
    name: 'ProductAdmin',
    data: () => {
        return {
            items: [],
            id: '',
            dialogedit: false,
            postData: {
                name: "",
                type: "",
                unit: "",
                price: "",
                img: ""
            }, defaultData: {
                name: "",
                type: "",
                unit: "",
                price: "",
                img: ""
            },
        }
    },
    computed: {
        saveMode() {
            return this.id == '' ? 'New Product' : 'Edit Product'
        }
    },
    created() {
        this.getProduct();
    },
    methods: {
        closeData() {
            this.postData = { ...this.defData },
                this.dialogedit = false
        },
        postProduct() {
            this.postData = { ...this.defaultData },
                this.id = '',
                this.dialogedit = true
        },
        editItem(item) {
            this.id = item._id
            this.postData = { ...item }
            this.dialogedit = true
        },
        saveSelect() {
            if (this.saveMode === 'Edit Product') {
                this.savePutProduct()
            } else this.saveProduct();
        },

        async getProduct() {
            try {
                const url = "http://localhost:3000/api/v1/products";
                await this.axios.get(url).then((response) => {
                    this.items = response.data[0].data
                }).catch((error) => {
                    if (error) {
                        console.log(error)
                    }
                })
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        },
        async saveProduct() {
            try {
                const url = "http://localhost:3000/api/v1/products/";
                const response = await this.axios.post(url, this.postData)
                console.log(response);
                this.getProduct();
                this.closeData();
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1000
                })
            } catch (err) {
                console.log(err)
            }
        },
        async savePutProduct() {
            try {
                this.$swal.fire({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                }).then(async (result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        const url = "http://localhost:3000/api/v1/products/";
                        const response = await this.axios.put(url + this.id, this.postData)
                        console.log(response);
                        this.getProduct();
                        this.closeData();
                        this.$swal.fire('Saved!', '', 'success')
                    } else if (result.isDenied) {
                        this.$swal.fire('Changes are not saved', '', 'info')
                    }
                }).catch((err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            } catch (err) {
                console.log(err)
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