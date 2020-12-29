<template>
    <li :class="{'list-group-item': true, 'active': completed}"><slot></slot></li>
</template>

<script>
export default {
    name: "TodoItem",
    props:{
        completed: Boolean
    }
}
</script>