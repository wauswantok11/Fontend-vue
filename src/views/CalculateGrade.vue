<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card class="mt-10" elevation="10">
                        <v-card class="mx-auto" max-width="100%">
                            <v-img class="white--text align-end" height="200px"
                                src="https://images.unsplash.com/photo-1623425654429-44cd0dd6c9ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80">
                                <v-card-title>
                                    <h1 class="ml-3"><span> Calculate Grade </span></h1>
                                </v-card-title>
                                <v-card-subtitle>
                                    <h3 class="mt-3">โปรแกรมตัดเกรด</h3>
                                </v-card-subtitle>
                            </v-img>

                            <v-card-text class=" font-weight-bold">
                                <v-card-subtitle>
                                    <v-text-field v-model="value" id="value" name="value" label="กรอกคะแนน">
                                        {{ value }}
                                    </v-text-field>

                                    <h3 class="mt-4">
                                        <span> {{ titleText }} </span> <span
                                            style="font-size: larger; color:rgb(255, 0, 0)"> {{ text }}</span>
                                    </h3>
                                </v-card-subtitle>
                                <!-- <v-btn color="primary" @click="alert()"> Click</v-btn> -->
                            </v-card-text>

                            <v-card-text>
                                <v-simple-table ableclass="elevation-5 mt-1" class="table">
                                    <template v-slot:default>

                                        <thead>
                                            <tr style="background-color: aliceblue;">
                                                <th class="text-left" style="font-size: larger; color:blue">เกดร</th>
                                                <th class="text-left" style="font-size: larger; color:blue">คะแนนสูงสุด</th>
                                                <th class="text-left" style="font-size: larger; color:blue">คะแนนต่ำสุด</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(grade, i) in grades" :key="i">
                                                <td style="font-size: large;">{{ grade.title }}</td>
                                                <td style="font-size: large;">{{ grade.MaxValue }}</td>
                                                <td style="font-size: large;">{{ grade.MinValue }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                                <!-- <v-list lines="one">
                                    <v-list-item v-for="(item , i) in grades" :key="i" :title="item.title">{{ i = i + 1 }} {{ item.title }}</v-list-item>
                                </v-list> -->
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "",
    data: () => {
        return {
            grades: [
                { title: "A", MaxValue: "100", MinValue: "80" },
                { title: "B", MaxValue: "79", MinValue: "70" },
                { title: "C", MaxValue: "69", MinValue: "60" },
                { title: "D", MaxValue: "59", MinValue: "50" },
                { title: "F", MaxValue: "49", MinValue: "0" },
            ],
            value: "",
            titleText: "",
        };
    },
    watch: {
        value(value) {
            if (value != "") {
                if (/^\d+$/.test(value)) {
                    if (value <= 100) {
                        this.titleText = `${value} คะแนน เกรด : `;
                        if (value <= 100 && value >= 80) {
                            this.text = "  A ";
                        } else if (value <= 79 && value >= 70) {
                            this.text = "  B ";
                        } else if (value <= 69 && value >= 60) {
                            this.text = "  C ";
                        } else if (value <= 59 && value >= 50) {
                            this.text = "  D ";
                        } else if (value <= 49 && value >= 0) {
                            this.text = "  F ";
                        } else {
                            this.text = "";
                        }
                    } else {
                        this.titleText = " ";
                        this.text = " คะแนนเต็ม 100 ";
                        this.$swal.fire({
                            title: 'คะแนนเต็ม 100',
                            icon: 'warning',
                            showConfirmButton: false,
                            timer: 700
                        })
                    }
                } else {
                    this.text = "กรอกตัวเลข 0 - 100 ";
                    this.titleText = " ";
                    this.$swal.fire({
                        title: 'กรอกตัวเลข 0 - 100 ',
                        icon: 'warning',
                        showConfirmButton: false,
                        timer: 700
                    })
                }
            } else {
                this.text = "กรอกคะแนน";
                this.titleText = " ";
            }
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

* {
    font-family: 'IBM Plex Sans Thai', sans-serif;

}

.calculate , .table{
    border: 1px solid rgb(88, 88, 88);
}

img {
    max-width: 100%;
    height: auto;
}
</style>
