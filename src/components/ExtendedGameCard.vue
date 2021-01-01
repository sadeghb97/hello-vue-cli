<template>
    <div class="card" @click="likeGame" style="width: 18rem; margin: 10px;">
            <img :src="src" class="card-img-top" v-bind:alt="alt">
            <div class="card-body">
                <h5 class="card-title" style="font-weight: bold"><slot name="title"></slot></h5>
                <p class="card-text"><slot></slot></p>
                <a v-show="$slots.button" href="#" class="btn btn-primary"><slot name="button"></slot></a>
                <div style="font-weight: bold" v-show="hasMetacritic"><span>Meta: </span><slot name="metacritic"></slot></div>
                <div style="font-weight: bold" v-show="hasReleaseDate"><span>Release Date: </span><slot name="release_date"></slot></div>
                <div v-show="hasGenre"><span>Genre: </span><slot name="genre"></slot></div>
                <div v-show="hasPlatform"><span>Platform: </span><slot name="platform"></slot></div>
                <div v-show="hasStore"><span>Store: </span><slot name="store"></slot></div>
                <div v-show="hasLike"><span>Likes: </span>{{getLikes}}</div>
            </div>
        </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    //agar baraye likes be jaye props az slot estefade konim ba taghire state beruz nemishavad
    name: "ExtendedGameCard",
    props: {
        slug: String,
        src: String,
        alt: String,
        likes: Number
    },
    computed:{
        hasMetacritic(){
            return this.$slots.metacritic != null && this.$slots.metacritic[0].text !== ""
        },
        hasReleaseDate(){
            return this.$slots.release_date != null && this.$slots.release_date[0].text !== ""
        },
        hasGenre(){
            return this.$slots.genre != null && this.$slots.genre[0].text !== ""
        },
        hasPlatform(){
            return this.$slots.platform != null && this.$slots.platform[0].text !== ""
        },
        hasStore(){
            return this.$slots.store != null && this.$slots.store[0].text !== ""
        },
        hasLike(){
            //har bar ruye card click shode va meghdare like an dar store ziad shavad
            //yek bar in method run mishavad va agar tedade like bish az sefr bashad meghdare an
            //dar cart namayesh miyabad. dar surate daryafte tedade like az tarighe slot
            //pas az click va afzayeshe meghdare like nemitavanestim meghdare like ra dar cart update konim
            return this.likes != null && this.likes > 0
        },
        getLikes(){
            return this.likes
        }
    },
    methods: {
        ...mapMutations(['like']),
        likeGame(){
            this.$store.commit('like', this.slug)
        }
    }
}
</script>