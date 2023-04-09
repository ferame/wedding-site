<template>
    <div class="relative">
      <button @click="isOpen = !isOpen"
              class="flex items-center space-x-2 px-3 py-1 bg-pink-100 rounded-t-lg hover:bg-pink-200 active:bg-pink-200">
        <img :src="selectedLanguage.icon" :alt="selectedLanguage.label" class="w-5 h-5">
        <span class="">{{ selectedLanguage.label }}</span>
      </button>
      <div v-if="isOpen"
           class="absolute top-full left-0 mt-2 rounded-lg z-10 bg-pink-100">
        <ul>
          <li v-for="language in languages"
              :key="language.code"
              :class="language.class"
              class="px-3 py-1 hover:bg-pink-200 cursor-pointer flex items-center space-x-2"
              @click="selectLanguage(language)">
            <img :src="language.icon" :alt="language.label" class="w-5 h-5 ">
            <span>{{ language.label }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
  
  interface Language {
    code: string;
    label: string;
    icon: string;
    class: string;
  }
  
  const isOpen = ref(false);
  const selectedLanguage = ref<Language>({
    code: 'en',
    label: 'EN',
    icon: './src/assets/flags/gb.svg',
    class: 'rounded-t-lg'
  });

  const languageHandler = useI18n();

  const languages: Language[] = [
    {
      code: 'en',
      label: 'EN',
      icon: './src/assets/flags/gb.svg',
      class: 'rounded-t-lg'
    },
    {
      code: 'lt',
      label: 'LT',
      icon: './src/assets/flags/lt.svg',
      class: ''
    },
    {
      code: 'bg',
      label: 'BG',
      icon: './src/assets/flags/bg.svg',
      class: 'rounded-b-lg'
    },
  ];
  
  const selectLanguage = (language: Language) => {
    selectedLanguage.value = language;
    languageHandler.locale.value = language.code;
    isOpen.value = false;
  }
  </script>
  