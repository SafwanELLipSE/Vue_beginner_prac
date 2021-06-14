<template>
    <div class="app">
        {{ user.username }} - {{ fullName }} <br>
        <strong>Followers: </strong> {{ followers }} <br>
        <button @click="followUser">
            Follow
        </button>
    </div>
</template>

<script>
export default{
    name: 'App',
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
            },
        }
    },
    watch: {
        followers(newFollowerCount, oldFollowerCount){
            if(oldFollowerCount < newFollowerCount){
                console.log(`${this.user.username} has gain a follower....`)
            }
        }
    },
    computed: {
        fullName(){
            return `${this.user.firstName} ${this.user.lastName}`
        }
    },
    methods:{
        followUser() {
            this.followers++;
        }
    },
    mounted(){
        this.followUser;
    }
}
</script>

<style>
#app {
    margin: 50px auto;
}
</style>
