<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">
                @{{ state.user.username }}
            </h1>
            <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> {{ state.followers }}
            </div>
            <CreateTwootPanel @add-twoot="addTwoot" />
        </div>  
        <div class="user-profile__twoots-wrapper">
            <TwootItem 
            v-for="twoot in state.user.twoots" 
            :key="twoot.id" 
            :username="state.user.username" 
            :twoot="twoot" />
        </div> 
    </div>
</template>

<script>
import {reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import TwootItem from "../components/TwootItem.vue";
import CreateTwootPanel from "../components/CreateTwootPanel.vue";

export default{
    name: 'UserProfile',
    components: {CreateTwootPanel, TwootItem},
    setup(){
        const route = useRoute();
        const userId = computed(() => route.params.userId);
        const state = reactive({
            followers: 0,
            user: {
                id: 1,
                username: 'SagolMara',
                firstName: 'Sagol',
                lastName: 'Mara',
                email: 'SagolMara@gmail.com',
                isAdmin: true,
                twoots:[
                    {id: 1, content: "Twotter IS Awazing!.."},
                    {id: 2, content: "Don't forgot to subscriber to the earth is square!!.."}

                ]
            },
        })

        function addTwoot(twoot){
            state.user.twoots.unshift({id: state.user.twoots.length + 1, content: twoot})
        }

        return{
            state,
            addTwoot, 
            userId
        }
    },
    // data () {
    //     return{
    //         followers: 0,
    //         user: {
    //             id: 1,
    //             username: 'SagolMara',
    //             firstName: 'Sagol',
    //             lastName: 'Mara',
    //             email: 'SagolMara@gmail.com',
    //             isAdmin: true,
    //             twoots:[
    //                 {id: 1, content: "Twotter IS Awazing!.."},
    //                 {id: 2, content: "Don't forgot to subscriber to the earth is square!!.."}

    //             ]
    //         },
    //     }
    // },
    // methods:{
    //     addTwoot(twoot){
    //         this.user.twoots.unshift({id: this.user.twoots.length + 1, content: twoot})
    //     }
    // }
}
</script>

<style scoped>
@import '../assets/scss/UserProfile.css';
</style>
