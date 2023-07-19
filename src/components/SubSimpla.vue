<template>
    <div>
        <h1> Start components </h1>
        {{ name }}
        <v-btn color="success" @click="callevent()" > Click </v-btn>
        <h1> End components </h1>
    </div>
</template>

<script>
import { EventBus } from '@/EventBus';

export default {
    name: " SubSimpla",
   props: ['name'],
    data:()=>{
        return{
            datas: "Data in SubSimpla"
        }
    },
    methods:{
        callmain(){
            this.$emit('data : ', this.datas )
        },
        callevent(){
            EventBus.$emit('displays' , 'ssss')
        }
    }
}
</script>

<style></style>