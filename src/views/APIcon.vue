<template>
    <div>
        <v-container>
            <div class=" py-3 px-3 d-flex justify-space-between ">
                <h1 class="mb-6"> Users</h1>
                <v-btn class=" py-3 px-3" color="primary" @click="newItem()">
                    <v-icon>mdi-plus-circle</v-icon>
                    <v-text> New Item</v-text>
                </v-btn>
            </div>
            <v-row>
                <v-col class="mt-5 py-3 px-3 " cols="12" md="3" v-for="(item, i) in items" :key="i">
                    <v-sheet class="pa-2 ma-2">
                        <v-card color="#ffffff" theme="dark" class="mx-auto" elevation="6">
                            <v-img height="300px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" width="100%" />
                            <v-card-title class="card-title text-h5" primary-title>
                                <span id="card_title">{{ item.name }}</span>
                            </v-card-title>
                            <v-card-text>
                                <span> Age: {{ item.age }} </span>
                                <br />
                                <span> Email: {{ item.email }} </span>
                                <br />
                                <span> Phone: {{ item.phone }} </span>
                            </v-card-text>
                            <v-card-actions class=" py-3 px-3 d-flex justify-space-between ">
                                <v-icon color="warning" @click="editItem(item)">mdi-pencil</v-icon>
                                <v-icon color="red" @click="deleteDate(item._id)">mdi-delete</v-icon>
                            </v-card-actions>
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>

            <v-dialog v-model="dialogedit" max-width="600px">
                <v-card>
                    <v-card-title> {{ saveMode }} </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field label="name" type="text" name="name" id="name" v-model="postData.name">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="age" type="number" name="name" id="name" v-model="postData.age">
                                </v-text-field>
                            </v-col><v-col cols="12" md="6">
                                <v-text-field label="email" type="email" name="name" id="name" v-model="postData.email">
                                </v-text-field>
                            </v-col><v-col cols="12" md="6">
                                <v-text-field label="phone" type="text" name="name" id="name" v-model="postData.phone">
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
        </v-container>
    </div>
</template>

<script>
export default {
    name: "APIcon",
    data: () => {
        return {
            items: [],
            dialogedit: false,
            id: '',
            postData: {
                name: "",
                age: "",
                email: "",
                phone: ""
            },
            defaultData: {
                name: "",
                age: "",
                email: "",
                phone: ""
            }
        }
    },
    created() {
        this.getProductData()
    },
    computed: {
        saveMode() {
            return this.id == '' ? 'New Item' : 'Edit Item'
        }
    },
    methods: {
        newItem() {
            this.postData = { ...this.defaultData },
                this.id = '',
                this.dialogedit = true
        },
        closeData() {
            this.postData = { ...this.defData },
                this.dialogedit = false
        },
        saveSelect() {
            if (this.saveMode === 'Edit Item') {
                this.savePutData()
            } else this.SavePostData();
        },
        editItem(item) {
            this.id = item._id
            this.postData = { ...item }
            this.dialogedit = true
        },
        async getProductData() {
            try {
                const url = "http://localhost:3000/users";
                const response = await this.axios.get(url);
                console.log(response.data);
                this.items = response.data.data

            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        },
        async SavePostData() {
            try {
                
                const url = "http://localhost:3000/users";
                const response = await this.axios.post(url, this.postData)
                console.log(response);
                this.getProductData();
                this.closeData();
                this.$swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        },
        savePutData() {
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
                        const url = "http://localhost:3000/users/";
                        const response = await this.axios.put(url + this.id, this.postData)
                        console.log(response);
                        this.getProductData();
                        this.closeData();
                        this.$swal.fire('Saved!', '', 'success')
                    } else if (result.isDenied) {
                        this.$swal.fire('Changes are not saved', '', 'info')
                    }
                })


            } catch (error) {
                if (error) {
                    console.log(error);
                }
            }
        },
        deleteDate(id) {
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
                    const url = "http://localhost:3000/users/";
                    const response = await this.axios.delete(url + id)
                    console.log(response);
                    this.getProductData();
                    this.closeData();
                    this.$swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
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