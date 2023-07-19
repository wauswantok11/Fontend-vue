<template>
    <div>
        <v-container>
            <v-card class="elevation-12 mx-auto ">
                <v-img class="white-text align-end" height="200px"
                    src="https://media.istockphoto.com/id/1308243057/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%9A%E0%B8%A5%E0%B8%AD%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%82%E0%B8%96%E0%B8%87%E0%B8%AA%E0%B9%8D%E0%B8%B2%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B9%82%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B9%89.jpg?s=170667a&w=0&k=20&c=c9b6xDhSi2VIfprX98eT3RCWmZeTFIRs93roAr_2-eU=">
                    <v-card-title>
                        <h1 style="color:#333"> Login page </h1>
                    </v-card-title>
                </v-img>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field prepend-icon="mdi-account" v-model="username" label="username"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12">
                            <v-text-field prepend-icon="mdi-lock" v-model="password" type="password"
                                label="password"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-btn rounded @click="login()" color="primary" class="mr-2 text-center btn-login">Login</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-actions>
                    <v-row>
                        <v-col cols="12" md="12" class=" justify-center">
                            Don't have an account ? <v-btn rounded text color="primary"
                                class="ml-2 text-center btn-register" to="/register">Register</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <!-- <pre> {{ data_member  }} </pre>  -->
                <!-- <pre> {{ data_member[0].username  }} </pre> -->
            </v-card>
        </v-container>
        <!-- <product :data_member="data_member" ></product> -->
    </div>
</template>

<script >
// import product from "../views/Product.vue"
export default {
    name: 'login',
    data() {
        return {
            username: null,
            password: '',
            data_member: [],
            status_login: '',
        }
    },
    created() {
        this.CheckLogin();
    },
    methods: {
        CheckLogin() {
            this.id_member = localStorage.removeItem('member')
        },
        async login() {
            try {
                // e.preventDefault();
                let data = {
                    username: this.username,
                    password: this.password
                }

                const url = 'http://localhost:3000/api/v1/submitLogin/'
                const response = await this.axios.post(url, data)
                this.status_login = response.data[0].status;
                this.data_member = response.data[0].member;
               
                // set local 
                await localStorage.setItem('member' , this.data_member[0]._id);

                // alert(localStorage.getItem('member'))
                console.log(" Status Login : " + this.status_login);
                console.log(" Data Member : " +  this.data_member[0]._id );
                if (this.status_login == 200) {
                    this.$router.push({
                        name: "product"
                    });
                } else if (this.status_login == 210) {
                    this.$swal.fire({
                        title: 'Login Failed',
                        text: 'Invalid Username or Password ',
                        icon: 'error'
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

* {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    color: #414141;
}

.btn-login {
    float: right;
}
</style>