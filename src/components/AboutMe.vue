<script setup lang="ts">
import { ref } from 'vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import AtIcon from 'vue-material-design-icons/At.vue'
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue'
import SectionHead from '@/components/SectionHead.vue'

const email = ref<string>('maci**.gorn***i96@gmail.com')
const phone = ref<string>('51* *** 629')
const currentYear = new Date().getFullYear()
const birthYear: number = currentYear - 1996
const experienceYears: number = currentYear - 2019

function showEmail() {
  email.value = 'maciej.gornicki96@gmail.com'
}
function showPhone() {
  phone.value = '517 319 629'
}
</script>

<template>
  <div class="container">
    <SectionHead
      :h3Text="$t('aboutMe.sectionHead.h3Text')"
      :h5Text="$t('aboutMe.sectionHead.h5Text')"
      :spanText="$t('aboutMe.sectionHead.spanText')"
    />
    <h6 class="text-3xl mb-5">{{ $t('aboutMe.header', { birthYear: birthYear }) }}</h6>
    <p class="text-secondary text-xl">
      {{ $t('aboutMe.paragraph', { experienceYears: experienceYears }) }}
    </p>

    <div class="bg-grey-blue mt-8 py-8 flex justify-around">
      <div class="flex items-center justify-center flex-col">
        <PhoneIcon :size="42" fillColor="#d0bb79" />
        <h6 class="uppercase">{{ $t('aboutMe.phone') }}</h6>
        <p @click="showPhone" class="cursor-pointer">{{ phone }}</p>
      </div>
      <div class="flex items-center justify-center flex-col">
        <AtIcon :size="42" fillColor="#d0bb79" />
        <h6 class="uppercase">Email</h6>
        <p @click="showEmail" class="cursor-pointer">
          {{ email }}
        </p>
      </div>
      <div class="flex items-center justify-center flex-col">
        <MapMarkerIcon :size="42" fillColor="#d0bb79" />
        <h6 class="uppercase">{{ $t('aboutMe.location') }}</h6>
        <p>Sosnowiec, Śląsk</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
