<template>
    <div class="user-profile">
        <div class="user-profile__user-panel">
            <h1 class="user-profile__username">
                @{{ user.username }}
            </h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
                Admin
            </div>
            <div class="user-profile__follower-count">
                <strong>Followers: </strong> {{ followers }}
            </div>
            <CreateTwootPanel @add-twoot="addTwoot" />
        </div>  
        <div class="user-profile__twoots-wrapper">
            <TwootItem 
            v-for="twoot in user.twoots" 
            :key="twoot.id" 
            :username="user.username" 
            :twoot="twoot" 
            @favourite="toggleFavourite"/>
        </div> 
    </div>
</template>

<script>
import TwootItem from "./TwootItem.vue";
import CreateTwootPanel from "./CreateTwootPanel.vue";

export default{
    name: 'UserProfile',
    components: {CreateTwootPanel, TwootItem},
    data () {
        return{
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
        }
    },
    // watch: {
    //     followers(newFollowerCount, oldFollowerCount){
    //         if(oldFollowerCount < newFollowerCount){
    //             console.log(`${this.user.username} has gain a follower....`)
    //         }
    //     }
    // },
    // computed: {
    //     fullName(){
    //         return `${this.user.firstName} ${this.user.lastName}`
    //     },
    // },
    methods:{
        // followUser() {
        //     this.followers++;
        // },
        // toggleFavourite(id){
        //     console.log(`Favourite Tweet #${id}`);
        // },
        addTwoot(twoot){
            this.user.twoot.unshift({id: this.user.twoots.length + 1, content: this.newTwootContent})
        }
    },
    mounted(){
        this.followUser;
    }
}
</script>

<style scoped>
@import '../assets/scss/UserProfile.css';
</style>
