<template>
    <v-container>
        <h1>Simpla </h1>
        <SubSimpla :name="name" @display="display" />
        <v-text-field v-model="LocalName" id="LocalName" name="LocalName" label="Input Local Name"> </v-text-field>
        <v-btn @click="stampLocal()">Set Local</v-btn>
        <!-- <h2> Name : {{ name }}</h2>
        <h2 v-if="show">if show : {{ name }} </h2>
        <h2 v-for="(item , i) in items" :key="i"> {{ item.data }}</h2>
        <br />
        <v-btn color="primary" @click="display()"> Click</v-btn>
        <div>
            <p class="mt-4"> {{ text }}</p>
            <v-text-field v-model="value" id="value" name="value" label="Input value">
              {{ text }}
            </v-text-field>
        </div>
        <v-row>
            <v-co colr="4" md="4">
                <v-card class="mx-auto my-12 mb-3" max-width="300" v-for="(item, i) in items" :key="i" elevation="6">
                    <v-img height="300px" :src="item.img" width="300px" />
                    <v-card-title class="card-title" primary-title>
                        <span id="card_title"> {{ item.title }}</span>
                    </v-card-title>
                    <v-card-subtitle>
                        {{ item.subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ item.data }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="displayPraem(item.title)"> Click</v-btn>
                    </v-card-actions>
                </v-card>
            </v-co>
        </v-row> -->
    </v-container>
</template>

<script>
import { EventBus } from '@/EventBus';
import SubSimpla from '../components/SubSimpla.vue';
export default {
    name: 'Simpla',
    components: {
        SubSimpla,
    },
    data: () => {
        return {
            name: " adul vasuvantok ",
            show: true,
            value: '',
            items: [
                { title: 'Card Title 1', subtitle: 'Card subtitle 1', data: 'Card text 1', img: 'https://png.pngtree.com/thumb_back/fh260/background/20200724/pngtree-mountains-landscape-background-vector-design-image_365197.jpg' },
                { title: 'Card Title 2', subtitle: 'Card subtitle 2', data: 'Card text 2', img: 'https://png.pngtree.com/thumb_back/fh260/background/20200724/pngtree-mountains-landscape-background-vector-design-image_365197.jpg' },
                { title: 'Card Title 3', subtitle: 'Card subtitle 3', data: 'Card text 3', img: 'https://png.pngtree.com/thumb_back/fh260/background/20200724/pngtree-mountains-landscape-background-vector-design-image_365197.jpg' },
            ],
            text: '',
            // item: "item",
            LocalName: "", 
        }
    },
    methods: {
        display(item) {
            alert(`Hello alert: ${this.value} ${item}`)
        },
        displayPraem(data) {
            alert(`Hello :${data}`);
        },
        stampLocal(){
            localStorage.setItem("user", this.LocalName);
            alert(" Success Set Local Name ");
        }
    },
    watch: {
        value(value) {
            // console.log(value);
            if (value == 80) {
                this.text = "  A ";
            } else if (value == 70) {
                this.text = "  B ";
            }

        }
    },
    mounted() {
        EventBus.$no('displays', this.display)
    }
}
</script>

<style>
.card-title {
    text-align: center;
    display: block;
}

</style>