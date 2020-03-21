<template>
    <article class="tile is-child">
        <div class="box widget">
            <article class="weather media" style="margin: 10px auto;">
                <figure class="media-left">
                    <p class="image is-128x128 is-vcentered">
                        <img :src="generateIconURL()">
                    </p>
                </figure>
                <div class="media-content content">
                    <p class="subtitle is-3 has-text-white has-text-left">{{this.city}}, {{this.countryName.toString().toUpperCase()}}</p>
                    <p class="title is-2 has-text-white has-text-left">{{this.temp}}℃</p>
                </div>
            </article>
        </div>
    </article>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Weather",
        data() {
            return {
                city: null,
                temp: null,
                condition: {
                    main: null,
                    icon: null,
                },
            }
        },
        props: {
            cityName: {
                type: String,
                default: "Tokyo",
            },
            countryName: {
                type: String,
                default: "jp",
            },
        },
        mounted: function(){
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
            axios.get(url + this.cityName + ',' + this.countryName + '&units=metric&appid=' + process.env.VUE_APP_WEATHER_APIKEY)
                .then(function(response){
                    this.city = response.data.name;
                    this.temp = response.data.main.temp;
                    this.condition = response.data.weather[0];
                }.bind(this))
                .catch(function(error){
                    console.log(error)
                })
        },
        methods: {
            generateIconURL: function () {
                const icon_url = 'https://openweathermap.org/img/w/';
                return icon_url + this.condition.icon + '.png';
            },
        },
    }
</script>

<style scoped>

</style>
