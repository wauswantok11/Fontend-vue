<template>
    <div>
        <v-container>
            <v-card class="elevation-12 mx-auto ">

                <v-img class="white-text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                    <v-card-title>
                        <h1 style="color:#ffffff"> Register page </h1>
                    </v-card-title>
                </v-img>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="12">
                            <v-text-field type="email" prepend-icon="mdi-email" v-model="email"
                                label="Email"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-text-field prepend-icon="mdi-account" v-model="user" label="Username"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="12">
                            <v-text-field prepend-icon="mdi-lock" v-model="password" type="password"
                                label="Password"></v-text-field>
                        </v-col>


                        <v-col cols="12" md="12">
                            <p><span id="message" style="color:red"> </span></p>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="py-6">
                    <v-row>
                        <v-col cols="12" md="12" style="text-align: right;">
                            <v-btn rounded @click="register()" color="primary" class="mr-2  btn-login">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>

            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            email: '',
            user: '',
            password: '',
        }

    },
    created() {

    },
    methods: {
        async register() {
            try {
                console.log(this.email)
                console.log(this.user)
                console.log(this.password)
                const url = "http://localhost:3000/api/v1/register/"
                const response = await this.axios.post(url, {
                    email: this.email,
                    username: this.user,
                    password: this.password,
                })
                this.status_login = response.data[0].status;
                this.data_member = response.data[0].member;
                // await localStorage.setItem('member', this.data_member[0]._id);

                // console.log(" Status Login : " + this.status_login);
                // console.log(" Data Member : " + this.data_member);
                if (this.status_login == 200) {

                    this.$swal.fire({ 
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    this.$router.push({
                        name: "login"
                    });
                } else if (this.status_login == 210) {
                    this.$swal.fire({
                        title: 'Register Failed',
                        icon: 'error'
                    })
                }
            } catch (err) {
                console.log(err);
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