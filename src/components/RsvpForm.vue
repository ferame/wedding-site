<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const formRef = ref('');

const form = ref({
    name: '',
    email: '',
    message: '',
    reply_to: '',
    requirements: ''
});

const sendEmail = () => {
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
            <label>Name(s)<span class="text-[#EE576A]" title="Required">*</span></label>
            <input required oninvalid="this.setCustomValidity('Please enter your name(s)')" type="text" name="name" v-model="form.name" class="border border-gray-300 rounded py-2 px-4">
        </div>

        <div class="flex flex-col my-2">
            <label>Email<span class="text-[#EE576A]" title="Required">*</span></label>
            <input required oninvalid="this.setCustomValidity('Please enter your email')" type="email" name="email" v-model="form.email" class="border border-gray-300 rounded py-2 px-4">
        </div>

        <div class="flex flex-col my-2">
            <label>Will you be attending?<span class="text-[#EE576A]" title="Required">*</span></label>
            <select required id="response" name="attendance" class="border border-gray-300 rounded py-2 px-4">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Still Unsure</option>
            </select>
        </div>

        <div class="flex flex-col my-2">
            <label>Will you be staying overnight?<span class="text-[#EE576A]" title="Required">*</span></label>
            <select required id="response" name="overnight_stay" class="border border-gray-300 rounded py-2 px-4">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Still Unsure</option>
            </select>
        </div>

        <div class="flex flex-col my-2">
            <label>Dietary requirements</label>
            <textarea name="message" v-model="form.requirements" class="border border-gray-300 rounded py-2 px-4"></textarea>
            <!-- <input type="email" name="reply_to" v-model="form.reply_to" class="border border-gray-300 rounded py-2 px-4"> -->
        </div>

        <div class="flex flex-col my-2">
            <label>Anything else you want to add or ask</label>
            <textarea name="message" v-model="form.message" class="border border-gray-300 rounded py-2 px-4"></textarea>
        </div>

        <div class="flex justify-center">
            <input type="submit" value="Send" class="my-3 w-1/3 px-4 py-2 rounded-lg bg-[#EE576A] hover:bg-[#5CC6B6] text-white hover:text-white">
        </div>
    </form>
</template>