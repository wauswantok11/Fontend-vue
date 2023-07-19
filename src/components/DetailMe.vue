<template>
    <v-container class=" mb-5 mt-1">
        <v-card elevation="7" class="mt-1">
            <v-card-titl class="text-center">
                <v-img height="200px" width="100%" class="mx-auto px-9" id="img1"
                    src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_640.png" />
                <v-img id="img2" alt="user" class="mx-auto" height="250" max-width="250" src="../assets/me.jpg" />
            </v-card-titl>
            <v-card-text>
                <h1 class="text-left py-6" style="padding-left: 20px;"> Profile </h1>
                <div class="text-center" width="90%">
                    <hr width="100%" class="mx-auto" />
                </div>
                <div class="setcenter" style="padding-bottom: 30px;">
                    <v-row class="mt-5">
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> ชื่อ-นามสกุล</b> </span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5">{{ this.name }}​</span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> ชื่อเล่น </b></span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5"> {{ this.nickname }}</span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> การศึกษา </b></span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5">มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่</span>
                            <span class="ml-5"> คณะวิทยาศาสตร์ สาขาวิชาเทคโนโลยีสารสนเทศ</span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> งานอดิเรก </b></span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5"> เล่นเกม เล่นดนตรี</span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> สิ่งที่ชอบ </b></span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5"> เขียนโปรแกรม เล่นเกม</span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="2" sm="6">
                            <span class="ml-3"> <b> สิ่งที่ไม่ชอบ </b></span>
                        </v-col>
                        <v-col class="text-left fontL " cols="12" md="10" sm="6">
                            <span class="ml-5"> สัตว์เลื้อยคลาน แมลง</span>
                        </v-col>
                    </v-row>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Detail",
    data() {
        return {
            name: "นาย อดุล วสุวรรธก",
            nickname: "บูม"
        }
    }
}
</script>
<style scope>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai&display=swap');

* {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    color: #414141;
}

.fontL {
    font-size: 20px;
}

.text-left {
    text-align: left;
}

.setcenter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
}

#img1 {
    border-top-left-radius: 5px 5px;
    border-top-right-radius: 5px 5px;
    position: absolute;
    border: solid 5px rgb(255, 255, 255);
}

#img2 {
    border: solid 5px rgb(255, 255, 255);
    /* position: absolute; */
    top: 60px;
    margin-bottom: 60px;
    border-radius: 50%;
}
</style>