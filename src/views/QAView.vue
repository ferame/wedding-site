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
const qaList = [
    {
      question: "When is the RSVP deadline?",
      answer: "Please respond by June 1st."
    },
    {
      question: "Is accommodation included?",
      answer: "The wedding includes 1 free stay overnight in the manor, including breakfast. The venue has many bedrooms on the second floor, several shared bathrooms and a shared living area. Please select in the RSVP form whether you would like to stay overnight."
    },
    {
      question: "What will the weather be like?",
      answer: "Based on previous years, we expect the weather to be mostly sunny with temperatures between 23°C during the day and 13°C during the night. Keep in mind that the weather in Lithuania is unpredictable so it can be anything between 10°C and 30°C."
    },
    {
      question: "Will the wedding be indoors or outdoors?",
      answer: "Unless it rains, the welcome drinks, the wedding, and the late night amber ceremony will be outdoors while the celebration will be indoors."
    },
    {
      question: "What should I wear?",
      answer: "We have a standard wedding dress code but remember that it might get cold during the evening."
    },
    {
      question: "What shoes should I wear?",
      answer: "There is grass and gravel outside the venue so we advise the ladies not to wear very thin stilettos. Make sure to have comfortable shoes for dancing too!"
    },
    {
      question: "Who to call with questions?",
      answer: "Here are all the phone numbers of the wedding party."
    }
]
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