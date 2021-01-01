import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        games: []
    },
    mutations: {
        loadGames(state, games){
            state.games = games
        },
        pushGames(state, games){
            state.games = state.games.concat(games)
            state.games.sort(function(a, b){
                if(a.metacritic > b.metacritic) return -1
                return 1
            });
        },
        clearGames(state){
            state.games = []
        },
        like(state, slug){
            var foundGame = state.games.find(function(game){
                return game.slug == slug
            })
            foundGame.likes++
        }
    },
    getters: {
        gameCount(state){
            return state.games.length
        },
        pureGames(state){
            return state.games.filter(function(game){
                return game.metacritic > 89
            })
        },
        pureGamesCount(state, getters){
            return getters.pureGames.length
        },
        sumLikes(state){
            var sum = 0;
            state.games.forEach(element => {
                sum += element.likes
            });
            return sum;
        }
    }
})

export default store