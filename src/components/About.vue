<template>
  <div class="About">
    <div class="aboutMeText">
      <h5>Mam na imię Maciek. Mam 26 lat.</h5>
      <p>
        Zaraz po ukończeniu szkoły średniej rozpocząłem pracę w branży IT. Przez
        3 lata pracowałem jako administrator systemów IT, ale to nigdy nie było
        coś co chciałem robić do końca życia. Od 3 lat pracuje jako programista,
        ale programowaniem interesuję się już 8 lat. W 2021 roku otworzyłem
        własną działalność gospodarczą, aby móc pracować również jako
        freelancer. Ukończyłem studia inżynierskie pierwszego stopnia z
        informatyki. Moja praca inżynierska nosiła tytuł "Analiza możliwości
        zastosowania rozwiązań IoT dla potrzeb controlingu parkingu miejskiego".
        W wolnym czasie rozwijam swoje umiejętności w zakresie tworzenia
        aplikacji internetowych.
      </p>
    </div>

    <div class="contact">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <div class="item">
            <Phone :size="35" fillColor="#d0bb79" />
            <div>
              <h6>Telefon</h6>
              <p @click="showPhone">{{ phone }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="item">
            <At :size="35" fillColor="#d0bb79" />
            <div>
              <h6>Email</h6>
              <p @click="showEmail">{{ email }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="item">
            <MapMarker :size="35" fillColor="#d0bb79" />
            <div>
              <h6>Lokalizacja</h6>
              <p>Sosnowiec, Śląsk</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Phone from 'vue-material-design-icons/Phone.vue';
import At from 'vue-material-design-icons/At.vue';
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
export default {
  components: {
    Phone,
    At,
    MapMarker,
  },
  data() {
    return {
      email: 'maci**.gorn***i96@gmail.com',
      phone: '51* *** 629',
    };
  },
  methods: {
    showEmail() {
      this.email = 'maciej.gornicki96@gmail.com';
    },
    showPhone() {
      this.phone = '517 319 629';
    },
  },
};
</script>

<style lang="scss" scoped>
.About {
  .aboutMeText {
    h5 {
      color: #eee;
      font-weight: 600;
      line-height: 1.6;
      margin-bottom: 15px;
      font-size: 24px;
    }
    p {
      font-size: 17px;
      font-weight: 400;
      font-family: 'Open Sans', sans-serif;
      color: #999;
      line-height: 2;
      margin: 0;
      text-align: justify;
    }
  }

  .contact {
    padding: 40px 15px;
    border-radius: 10px;
    background: #12141c;
    margin: 80px 0;
    text-align: center;
    .item {
      h6 {
        margin-top: 20px;
        font-size: 17px;
        text-transform: uppercase;
      }
      p {
        font-size: 16px;
        color: #ccc;
        cursor: pointer;
        transition: all 0.2s ease-in;
        &:hover {
          color: rgb(238, 238, 238);
        }
      }
    }
  }
}
</style>
