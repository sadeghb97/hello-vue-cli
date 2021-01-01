<template>
    <div class="card" style="width: 18rem; margin: 10px;">
            <img :src="src" class="card-img-top" v-bind:alt="alt">
            <div class="card-body">
                <h5 class="card-title" style="font-weight: bold"><slot name="title"></slot></h5>
                <p class="card-text"><slot></slot></p>
                <a v-show="$slots.button" href="#" class="btn btn-primary"><slot name="button"></slot></a>
            </div>
        </div>
</template>

<script>
export default {
    name: "GameCard",
    props: {
        src: String,
        alt: String
    }
}
</script>