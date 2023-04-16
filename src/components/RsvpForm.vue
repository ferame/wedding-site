<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const formRef = ref('');

const required = computed(() => t('rsvp.requiredField'));
const namesError = computed(() => t('rsvp.namesError'));
const emailError = computed(() => t('rsvp.emailError'));
const emailWrong = computed(() => t('rsvp.emailWrong'));
const attendanceError = computed(() => t('rsvp.attendanceError'));
const stayError = computed(() => t('rsvp.stayError'));

const send = computed(() => t('rsvp.send'))

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
        errors.value.name = namesError.value;
        isValid = false;
    } else {
        errors.value.name = '';
    }

    // Validate email
    if (!form.value.email) {
        errors.value.email = emailError.value;
        isValid = false;
    } else if (!EMAIL_VALIDATION_REGEX.test(form.value.email)) {
        errors.value.email = emailWrong.value;
        isValid = false;
    } else {
        errors.value.email = '';
    }

    // Validate attendance
    if (!form.value.attendance) {
        errors.value.attendance = attendanceError.value;
        isValid = false;
    } else {
        errors.value.attendance = '';
    }

    // Validate overnight stay
    if (!form.value.overnight_stay) {
        errors.value.overnight_stay = stayError.value;
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
                alert(t('rsvp.success'));
            }, (error) => {
                // TODO: change to a toastify solution
                alert(t('rsvp.failure'));
                console.error(error);
            });   
        } catch (error) {
            if (error instanceof ReferenceError) {
                console.error( "JSON Error: " + error.message );
            } else {
                throw error; // rethrow
            }
        }
    }
}
</script>

<template>
    <form ref="formRef" @submit.prevent="sendEmail">
        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.names') }}<span class="text-[#EE576A]" :title=required>*</span></label>
            <input type="text" name="name" v-model="form.name" class="border border-gray-300 rounded py-2 px-4">
            <p v-if="errors.name" class="text-red-500">{{ errors.name }}</p>
        </div>

        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.email') }}<span class="text-[#EE576A]" :title=required>*</span></label>
            <input type="email" name="email" v-model="form.email" class="border border-gray-300 rounded py-2 px-4">
            <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
        </div>

        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.attendance') }}<span class="text-[#EE576A]" :title=required>*</span></label>
            <select id="response" name="attendance" v-model="form.attendance" class="border border-gray-300 rounded py-2 px-4">
                <option value="">{{$t('rsvp.choose.select')}}</option>
                <option value="yes">{{ $t('rsvp.choose.yes') }}</option>
                <option value="no">{{ $t('rsvp.choose.no') }}</option>
                <option value="unsure">{{$t('rsvp.choose.unsure')}}</option>
            </select>
            <p v-if="errors.attendance" class="text-red-500">{{ errors.attendance }}</p>
        </div>

        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.stay') }}<span class="text-[#EE576A]" :title=required>*</span></label>
            <select id="response" name="overnight_stay" v-model="form.overnight_stay" class="border border-gray-300 rounded py-2 px-4">
                <option value="">{{$t('rsvp.choose.select')}}</option>
                <option value="yes">{{ $t('rsvp.choose.yes') }}</option>
                <option value="no">{{ $t('rsvp.choose.no') }}</option>
                <option value="unsure">{{$t('rsvp.choose.unsure')}}</option>
            </select>
            <p v-if="errors.overnight_stay" class="text-red-500">{{ errors.overnight_stay }}</p>
        </div>

        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.dietary') }}</label>
            <textarea name="requirements" v-model="form.requirements" class="border border-gray-300 rounded py-2 px-4"></textarea>
        </div>

        <div class="flex flex-col my-3">
            <label>{{ $t('rsvp.otherQ') }}</label>
            <textarea name="message" v-model="form.message" class="border border-gray-300 rounded py-2 px-4"></textarea>
        </div>

        <div class="flex justify-center pb-20">
            <input type="submit" :value=send class="my-3 w-1/3 px-4 py-2 rounded-lg bg-[#EE576A] hover:bg-[#5CC6B6] text-white hover:text-white">
        </div>
    </form>
</template>