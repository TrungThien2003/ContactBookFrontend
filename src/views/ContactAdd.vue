<template>
    <div class="page">
        <h4>Thêm mới liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="addContact" @delete:contact="cancelContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },

    data() {
        return {
            message: "",
        };
    },
    methods: {

        async addContact(data) {
            try {
                console.log("Updating contact:", data);
                await ContactService.create(data);
                alert('Liên hệ được thêm thành công.');
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
            }
        },
        async cancelContact() {
            if (confirm("Bạn muốn hủy thêm liên hệ này?")) {
                try {
                    this.$router.push({ name: "contactbook" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },


    created() {
        this.message = "";
    },
}
</script>
