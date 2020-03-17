<template>
        <div class="tile is-pulled-right">
            <div class="tile is-child box" style="background: rgba(0, 0, 0, 0.5);">
                <p class="title is-1 has-text-white has-text-centered">{{time}}</p>
                <p class="subtitle is-5 has-text-white has-text-centered">{{date}}</p>
            </div>
        </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "Clock.vue",
        data() {
            return {
                date: '1月1日 (日)',
                time: '00:00:00'
            };
        },
        mounted: function() {
            setInterval(() => {
                this.date = moment(new Date()).locale('ja').format('MMMDo (ddd)');
                this.time = moment(new Date()).locale('ja').format('LTS');
            }, 1000);
        }
    }
</script>

<style scoped>

</style>
