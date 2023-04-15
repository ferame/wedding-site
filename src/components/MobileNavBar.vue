<template>
    <nav>
        <div class="flex justify-between pt-2 px-3 pb-1 bg-white">
            <RouterLink
                to="/"
                class="text-xl action:text-pink-400"
                >
                <img src="../assets/Elena_Justinas_no_background.png" width="150">
            </RouterLink>
            <div class="flex gap-5">
                <button
                    @click="toggleLang"
                    class="focus:outline-none"
                >
                    <img :src="selectedLanguage.icon" :alt="selectedLanguage.label" class="w-8 rounded border border-black">
                </button>
            
                <button
                    @click="toggleNav"
                    class="focus:outline-none"
                >
                    <img :src="showMenu ? './src/assets/mobile/menu-opened.png' : './src/assets/mobile/menu-closed.png'" class="w-8 h-8 ">
                </button>
            </div>
        </div>

        <ul
            :class="showLangSelector ? 'flex' : 'hidden'"
            class="
                list-items
                flex-col
                bg-pink-100
                pt-2
            "
        >
          <li v-for="language in languages"
              :key="language.code"
              class="flex flex-row px-3 text-lg active:bg-pink-200 py-2"
              @click="selectLanguage(language)">
            <img :src="language.icon" :alt="language.label" class="w-8 rounded-md mx-2">
            <span>{{ language.labelLong }}</span>
          </li>
        </ul>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            list-items
            flex-col
            bg-pink-100
            pt-2
          "
        >
            <RouterLink class="route" v-on:click="toggleNav" to="/story">{{ $t('navbar.story') }}</RouterLink>
            <RouterLink class="route" v-on:click="toggleNav" to="/agenda">{{ $t('navbar.agenda') }}</RouterLink>
            <RouterLink class="route" v-on:click="toggleNav" to="/travel">{{  $t('navbar.location') }}</RouterLink>
            <RouterLink class="route" v-on:click="toggleNav" to="/q-and-a">{{  $t('navbar.QnA') }}</RouterLink>
            <RouterLink class="route" v-on:click="toggleNav" to="/rsvp">{{  $t('navbar.rsvp') }}</RouterLink>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { getLanguageByCode, languages } from '@/utils/language';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

interface Language {
    code: string;
    label: string;
    icon: string;
    class: string;
}

const languageHandler = useI18n();
languageHandler.locale.value
const selectedLanguage = ref<Language>(getLanguageByCode(languageHandler.locale.value));

const showMenu = ref(false);
const showLangSelector = ref(false);

const toggleNav = () => {
    console.log('Nav called');
    
    return (showMenu.value = !showMenu.value);
}
const toggleLang = () => (showLangSelector.value = !showLangSelector.value);

const selectLanguage = (language: Language) => {
    selectedLanguage.value = language;
    languageHandler.locale.value = language.code;
    showLangSelector.value = false;
}
</script>

<style scoped>
.route {
    @apply px-3 text-lg active:bg-pink-200 py-2
}
</style>