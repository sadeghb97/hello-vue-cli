<template>
    <html>
        <head>
            <meta charset="utf8">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        </head>
        <body>
            <div id="app" class="container">
                <div class="row">
                    <div class="col">
                        <NumberField placeholder="Start" v-model="start"></NumberField>
                        <NumberField placeholder="Start" v-model="to"></NumberField>
                        <NumberField placeholder="Requests" v-model="requestsNumber"></NumberField>
                        <input style="margin-top:8px; margin-bottom: 24px; width: 300px; height: 50px;"
                            class="btn btn-primary" @click="download" value="Send" />
                    </div>
                    <div style="font-size: 30px; font-weight: bold; margin-bottom: 20px;">
                        {{gameCount}} --> {{pureGamesCount}} --> {{sumLikes}}
                    </div>
                    <ExtendedGameCard v-for="game in pureGames" :key="game.slug" 
                            v-bind:src="game.bg" v-bind:alt="game.name" :slug="game.slug" :likes="game.likes">
                        <template slot="title">{{game.name}}</template>
                        <template slot="metacritic">{{game.metacritic}}</template>
                        <template slot="release_date">{{game.release_date}}</template>
                        <template slot="genre">{{game.genre}}</template>
                        <template slot="platform">{{game.platform}}</template>
                        <template slot="store">{{game.store}}</template>
                    </ExtendedGameCard>
                </div>
            </div>
        </body>
    </html>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import axios from 'axios';
import store from './store';
import ExtendedGameCard from "./components/ExtendedGameCard.vue"
import NumberField from "./components/NumberField.vue"
import { configs } from './configs'

function fetchGame(element){
    var hasGenre = element.genres !== null && element.genres instanceof Array && 
        element.genres.length > 0;
    var hasPlatform = element.parent_platforms !== null && 
        element.parent_platforms instanceof Array && element.parent_platforms.length > 0;
    var hasStore = element.stores !== null && element.stores instanceof Array &&
        element.stores.length > 0;

    return {
        slug: element.slug,
        name: element.name,
        platform: hasPlatform ? element.parent_platforms[0].platform.name : "",
        store: hasStore ? element.stores[0].name : "",
        release_date: element.released,
        bg: element.background_image,
        metacritic: element.metacritic,
        esrb: element.esrb_rating !== null ? element.esrb_rating.name : "",
        genre: hasGenre ? element.genres[0].name : "",
        likes: 0
    };
}

function downloadPage(store, start, to, page){
    var url = `${configs.RAWG_API_BASE_URL}games?dates=` + start + 
        "-01-01," + to + "-12-31&ordering=-rating&page_size=40&page=" + 
        page;

    axios.get(url)
    .then(response => {
        var games = []
        response.data.results.forEach(element => {
            games.push(fetchGame(element))
        });
        store.commit('pushGames', games)
    })
    .catch(err => {
        console.log(err)
    })
}

export default {
    name: "BestGames",
    components:{
        ExtendedGameCard,
        NumberField
    },
    data: function(){
        return {
            start: "2019",
            to: "2020",
            requestsNumber: "1"
        }
    },
    computed: {
        ...mapState(['games']),
        ...mapGetters(['gameCount', 'pureGames', 'pureGamesCount', 'sumLikes'])
    },
    methods: {
        ...mapMutations(['laodGames', 'pushGames', 'clearGames', 'like']),
        download(){
            store.commit('clearGames')
            for(var i=0; this.requestsNumber>i; i++){
                downloadPage(store, this.start, this.to, i+1)
            }
        }
    }
}
</script>