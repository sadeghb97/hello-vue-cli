<template>
    <div style="font-weight: bold; font-size: 30px; margin-bottom: 8px;">
        <span>{{title}}: </span>
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: "TodoStat",
    props: {
        "title": String
    }
}
</script>