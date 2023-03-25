<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const formRef = ref('');

const form = ref({
    name: '',
    email: '',
    message: '',
    reply_to: ''
});

function sendEmail() {
    console.log(form.value);
    console.log('testing');
    
    if (form.value !== null) {
        console.log('It went here');
        
        try {
            console.log('and here');
            emailjs.sendForm(
            'service_y9x7qvb',
            'template_1o2f4l3',
            formRef.value,
            'HoYnFRtGLJAAVckGZ')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });   
        } catch (error) {
            console.log('and here...');
            if (error instanceof ReferenceError) {
            alert( "JSON Error: " + error.message );
           } else {
            throw error; // rethrow
           }
        }
    }
}
</script>

<template>
    <form ref="formRef" @submit.prevent="sendEmail">
        <div class="my-2 border-solid border-sky-500 border-2">
            <label>Name</label>
            <input type="text" name="name" v-model="form.name">
        </div>

        <div class="my-2 border-solid border-rose-500 border-2">
            <label>Email</label>
            <input type="email" name="email" v-model="form.email">
        </div>

        <div class="my-2 border-solid border-indigo-500 border-2">
            <label>Message</label>
            <textarea name="message" v-model="form.message"></textarea>
        </div>

        <div class="my-2 border-solid border-amber-500 border-2">
            <label>Reply to email</label>
            <input type="email" name="reply_to" v-model="form.reply_to">
        </div>

      <input type="submit" value="Send">
    </form>
</template>