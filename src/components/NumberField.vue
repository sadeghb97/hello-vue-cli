<template>
      <input style="margin-bottom: 8px;" type="text" class="form-control" :placeholder="placeholder" 
        :value="value" v-on:input="$emit('input', $event.target.value)" required>
</template>

<script>
export default {
    name: "NumberField",
    props: {
        'value': String, 
        'placeholder': String
    }
}
</script>