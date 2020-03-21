<template>
    <article class="tile is-child">
        <div class="box widget">
            <div style="margin: 6px auto;">
                <p class="title is-1 has-text-white has-text-centered">{{time}}</p>
                <p class="subtitle is-3 has-text-white has-text-centered">{{date}}</p>
            </div>
        </div>
    </article>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "Clock.vue",
        data() {
            return {
                date: '1月1日 (日)',
                time: '00:00:00',
            };
        },
        mounted() {
            setInterval(() => {
                this.date = moment(new Date()).locale('ja').format('MMMDo (ddd)');
                this.time = moment(new Date()).locale('ja').format('LTS');
            }, 1000);
        },
    }
</script>

<style scoped>

</style>
