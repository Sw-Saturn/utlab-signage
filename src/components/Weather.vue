<template>
    <div class="tile is-pulled-right is-2">
        <div class="tile is-child box" style="background: rgba(0, 0, 0, 0.5);">
            <div class="weather">
                <p class="subtitle is-5 has-text-white has-text-left">{{this.city}}</p>
                <p class="title is-3 has-text-white has-text-left">{{this.temp}}℃ {{this.condition.main}}</p>
            </div>
        </div>
    </div>
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
                    this.city = response.data.name
                    this.temp = response.data.main.temp
                    this.condition = response.data.weather[0]
                }.bind(this))
                .catch(function(error){
                    console.log(error)
                })
        },
    }



</script>

<style scoped>

</style>
