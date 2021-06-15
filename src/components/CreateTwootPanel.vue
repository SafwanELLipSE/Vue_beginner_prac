<template>
    <form class="create-twoot-panel" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharaterCount >180}">
        <label for="newTwoot"><strong>New Twoot: </strong> ({{ newTwootCharaterCount}} / 180)</label>
        <textarea id="newTwoot" rows="3" v-model="newTwootContent"/>

        <div class="create-twoot-panel__submit">
            <div class="create-twoot-type">
                <label for="newTwootType"><strong>Type: </strong></label>
                <select id="newTwootType" v-model="selectedTwootType">
                    <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
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
export default {
    name: "CreateTwootPanel",
    data () {
        return{
            newTwootContent:'',
            selectedTwootType:'instant',
            twootTypes:[
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ],
        }
    },
    computed: {
        newTwootCharaterCount(){
            return this.newTwootContent.length;
        }
    },
    methods:{
        createNewTwoot(){
            if(this.newTwootContent && this.selectedTwootType !== 'draft'){
                this.$emit('add-twoot', this.newTwootContent);
                this.newTwootContent = '';
            }
        }
    },
};
</script>
<style scoped>
@import '../assets/scss/CreateTwootPanel.css';
</style>