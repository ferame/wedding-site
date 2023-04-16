<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const formRef = ref('');

const form = ref({
    name: '',
    email: '',
    attendance: '',
    overnight_stay: '',
    requirements: '',
    message: ''
});

const errors = ref({
    name: '',
    email: '',
    attendance: '',
    overnight_stay: ''
});

const EMAIL_VALIDATION_REGEX = /\S+@\S+\.\S+/;

const validateForm = (): boolean => {
    let isValid = true;

    // Validate name
    if (!form.value.name) {
        errors.value.name = 'Name is required';
        isValid = false;
    } else {
        errors.value.name = '';
    }

    // Validate email
    if (!form.value.email) {
        errors.value.email = 'Email is required';
        isValid = false;
    } else if (!EMAIL_VALIDATION_REGEX.test(form.value.email)) {
        errors.value.email = 'Invalid email format';
        isValid = false;
    } else {
        errors.value.email = '';
    }

    console.log('Form value');
    console.log(form.value);

    // Validate attendance
    if (!form.value.attendance) {
        errors.value.attendance = 'Attendance response is required';
        isValid = false;
    } else {
        errors.value.attendance = '';
    }

    // Validate overnight stay
    if (!form.value.overnight_stay) {
        errors.value.overnight_stay = 'Overnight stay response is required';
        isValid = false;
    } else {
        errors.value.overnight_stay = '';
    }

    return isValid;
}

const sendEmail = () => {
    if (formRef.value !== null && validateForm()) {
        try {
            emailjs.sendForm(
            'service_y9x7qvb',
            'template_1o2f4l3',
            formRef.value,
            'HoYnFRtGLJAAVckGZ')
            .then((result) => {
                // TODO: change to a toastify solution
                alert('RSVP sent successfully');
            }, (error) => {
                // TODO: change to a toastify solution
                alert('RSVP failed to send');
            });   
        } catch (error) {
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
            <input type="text" name="name" v-model="form.name" class="border border-gray-300 rounded py-2 px-4">
            <p v-if="errors.name" class="text-red-500">{{ errors.name }}</p>
        </div>

        <div class="flex flex-col my-2">
            <label>Email<span class="text-[#EE576A]" title="Required">*</span></label>
            <input type="email" name="email" v-model="form.email" class="border border-gray-300 rounded py-2 px-4">
            <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
        </div>

        <div class="flex flex-col my-2">
            <label>Will you be attending?<span class="text-[#EE576A]" title="Required">*</span></label>
            <select id="response" name="attendance" v-model="form.attendance" class="border border-gray-300 rounded py-2 px-4">
                <option value="">Please select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Still Unsure</option>
            </select>
            <p v-if="errors.attendance" class="text-red-500">{{ errors.attendance }}</p>
        </div>

        <div class="flex flex-col my-2">
            <label>Will you be staying overnight?<span class="text-[#EE576A]" title="Required">*</span></label>
            <select id="response" name="overnight_stay" v-model="form.overnight_stay" class="border border-gray-300 rounded py-2 px-4">
                <option value="">Please select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="unsure">Still Unsure</option>
            </select>
            <p v-if="errors.overnight_stay" class="text-red-500">{{ errors.overnight_stay }}</p>
        </div>

        <div class="flex flex-col my-2">
            <label>Dietary requirements</label>
            <textarea name="requirements" v-model="form.requirements" class="border border-gray-300 rounded py-2 px-4"></textarea>
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