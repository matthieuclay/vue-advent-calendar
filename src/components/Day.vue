<template>
  <div>
    <slot name="back">
      <back-to-calendar :version="version"></back-to-calendar>
    </slot>
    <h1 class="headline">{{ date.format('dddd DD MMMM') }}</h1>
    <main class="page-content" v-if="isAllowedToView">
      <slot name="page-content" class="page-content"></slot>
    </main>
    <main v-else>
      <div class="page-content">
        <h2>Pas de triche!</h2>
        <p style="text-align:center;">
          En attendant, tu peux demander à Matthieu de te rouler un joint ou de te faire un massage 🤗
        </p>
      </div>
    </main>
  </div>
</template>

<script>
import Moment from 'moment'
import BackToCalendar from "@/components/BackToCalendar";

export default {
  name: 'Day',
  props: ['day'],
  components: {
    BackToCalendar
  },
  computed: {
    version: function () {
      return this.$route.params.version ?? ''
    },
    date: function () {
      return new Moment(this.day, 'DD.MM.YYYY').locale('fr')
    },
    now: function () {
      return new Moment().locale('fr')
    },
    isAllowedToView: function () {
      return this.date <= this.now
    },
    year: function () {
      return this.date.format('YYYY')
    }
  }
}
</script>

<style lang="scss">
.page-content {
  width: 50%;
  margin: 0 auto;
  flex-flow: column;
  text-align: center;

  background: rgba(#000, 0.3);
  padding: 25px;

  @media screen and (max-width: 900px) {
    width: 75%;
  }

  @media screen and (max-width: 400px) {
    width: 90%;
  }
}

.page-content video {
  max-width: 600px;
}

.small-video {
  display: flex;
  justify-content: center;
}

img.thumbnail {
  max-height: 100px;
  width: auto;
}

.big {
  max-width: 600px;
  width: 100%;
}

p.center {
  text-align: center;
}
</style>
