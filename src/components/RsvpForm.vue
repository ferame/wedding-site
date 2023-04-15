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
        <div class="flex flex-col my-2">
            <label>Name</label>
            <input type="text" name="name" v-model="form.name" class="border border-gray-300 rounded py-2 px-4">
        </div>

        <div class="flex flex-col my-2">
            <label>Email</label>
            <input type="email" name="email" v-model="form.email" class="border border-gray-300 rounded py-2 px-4">
        </div>

        <div class="flex flex-col my-2">
            <label>Will you be attending?</label>
            <select id="response" name="response" class="border border-gray-300 rounded py-2 px-4">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Still Unsure</option>
            </select>
        </div>

        <div class="flex flex-col my-2">
            <label>Message</label>
            <textarea name="message" v-model="form.message" class="border border-gray-300 rounded py-2 px-4"></textarea>
        </div>

        <div class="flex flex-col my-2">
            <label>Reply to email</label>
            <input type="email" name="reply_to" v-model="form.reply_to" class="border border-gray-300 rounded py-2 px-4">
        </div>

      <input type="submit" value="Send">
    </form>
</template>