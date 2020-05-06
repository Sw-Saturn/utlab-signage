<template>
    <article class="tile is-child is-vertical">
        <div v-for="(data, key) in news" :key="key">
        <div class="box widget">
                <article class="media" style="margin: 10px auto;">
                    <figure class="media-left">
                        <p class="image is-128x128 is-vcentered">
                            <img :src="data.urlToImage">
                        </p>
                    </figure>
                    <div class="media-content content">
                        <p class="subtitle is-5 has-text-white has-text-left">
                            {{data.title}}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    </article>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "News",
        data() {
           return {
               news : {
                   title: String,
                   urlToImage: String,
               },
           }
        },
        mounted(){
            this.fetchNews();
            this.intervalId = setInterval(() => {
                this.fetchNews();
            }, 60000);
        },
        methods: {
            fetchNews() {
                const url = 'https://newsapi.org/v2/top-headlines?country=jp&pageSize=5&apiKey=';
                axios.get(url + process.env.VUE_APP_NEWS_APIKEY)
                    .then(function(response){
                        this.news = response.data['articles'];
                    }.bind(this))
                    .catch(function(error){
                        console.log(error)
                    });
            }
        }
    }
</script>

<style scoped>

</style>
