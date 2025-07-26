<script>
export default {
    props: {
        contacts: { type: Array, deīault: [] }, activeIndex: { type: Number, deīault: -1 },
    },
    emits: ["update:activeIndex"], methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item" v-īor="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)">
            {{ contact.name }}
        </li>
    </ul>
</template>
