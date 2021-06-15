<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'--exceeded': state.newTwootCharaterCount >180}">
        <label for="newTwoot"><strong>New Twoot: </strong> ({{ state.newTwootCharaterCount}} / 180)</label>
        <textarea id="newTwoot" rows="3" v-model="state.newTwootContent"/>

        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="state.selectedTwootType">
                    <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
                        {{ option.name }}
                    </option>
                </select>
            </div>
            <button>
                Twoot!
            </button>
        </div>
    </form>
</template>

<script>
import {reactive, computed} from 'vue';

export default {
    name: "CreateTwootPanel",
    setup(props,ctx){
        const state = reactive({
            newTwootContent:'',
            selectedTwootType:'instant',
            twootTypes:[
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ],
        })

        const newTwootCharaterCount = computed(() => state.newTwootContent.length);

        function createNewTwoot(){
            if(state.newTwootContent && state.selectedTwootType !== 'draft'){
                ctx.emit('add-twoot', state.newTwootContent);
                state.newTwootContent = '';
            }
        }
        return{
            state,
            newTwootCharaterCount,
            createNewTwoot
        }
    },
    // data () {
    //     return{
    //         newTwootContent:'',
    //         selectedTwootType:'instant',
    //         twootTypes:[
    //             {value: 'draft', name: 'Draft'},
    //             {value: 'instant', name: 'Instant Twoot'}
    //         ],
    //     }
    // },
    // computed: {
    //     newTwootCharaterCount(){
    //         return this.newTwootContent.length;
    //     }
    // },
    // methods:{
    //     createNewTwoot(){
    //         if(this.newTwootContent && this.selectedTwootType !== 'draft'){
    //             this.$emit('add-twoot', this.newTwootContent);
    //             this.newTwootContent = '';
    //         }
    //     }
    // },
};
</script>
<style scoped>
@import '../assets/scss/CreateTwootPanel.css';
</style>