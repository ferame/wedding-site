<template>
  <div class="pt-8 pb-20 px-8">
    <ul class="qa-list list-disc max-h-full">
      <li v-for="(question, index) in qaList" :key="index" class="qa-item text-justify">
        <div>{{ index + 1 }}. <strong>{{ question.question }}</strong></div>
        <div>{{ question.answer }}</div>
      </li>
    </ul>
  </div>
  </template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const qaList = computed(() => ([
    {
      question: t('qa.deadlineQ'),
      answer: t('qa.deadlineA'),
    },
    {
      question: t('qa.accomodationQ'),
      answer: t('qa.accomodationA')
    },
    {
      question: t('qa.weatherQ'),
      answer: t('qa.weatherA')
    },
    {
      question: t('qa.indoorsQ'),
      answer: t('qa.indoorsA')
    },
    {
      question: t('qa.clothesQ'),
      answer: t('qa.clothesA')
    },
    {
      question: t('qa.shoesQ'),
      answer: t('qa.shoesA')
    },
    {
      question: t('qa.callQ'),
      answer: t('qa.callA')
    }
]));
</script>

<style scoped>
.qa-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.qa-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.qa-question {
  font-size: 18px;
  font-weight: bold;
}

.qa-answer {
  font-size: 16px;
}
</style>