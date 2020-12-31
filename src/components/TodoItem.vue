<template>
    <li :class="{'list-group-item': true, 'active': completed}" @click="handleClick"><slot></slot></li>
</template>

<script>
export default {
    name: "TodoItem",
    props:{
        completed: Boolean
    },
    methods:{
        handleClick(){
            this.$emit('toggle')
        }
    }
}
</script>