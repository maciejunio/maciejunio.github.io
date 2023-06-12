<template>
  <div class="Portfolio">
    <vue-gallery-slideshow :images="imagesMonitoringSystem" :index="indexMonitoringSystem"
      @close="indexMonitoringSystem = null"></vue-gallery-slideshow>
    <vue-gallery-slideshow :images="imagesBusinessPage" :index="indexBusinessPage"
      @close="indexBusinessPage = null"></vue-gallery-slideshow>
    <vue-gallery-slideshow :images="imagesItPortal" :index="indexItPortal"
      @close="indexItPortal = null"></vue-gallery-slideshow>
    <vue-gallery-slideshow :images="imagesClientPortal" :index="indexClientPortal"
      @close="indexClientPortal = null"></vue-gallery-slideshow>
    <vue-gallery-slideshow :images="imagesCovidPortal" :index="indexCovidPortal"
      @close="indexCovidPortal = null"></vue-gallery-slideshow>
    <div class="slide">
      <div class="row">
        <div class="col-md-12">
          <h3><span>SYSTEM</span> LOGISTYCZNY</h3>
          <p>Na zlecenie klienta stworzyłem system do zarządzania koszami produkcyjnymi oraz planowania transportów</p>
          <p>Całość składa się z aplikacji mobilnej na skanery kodów kreskowych, części desktopowej oraz backendu.</p>
          <p>System pozwala na:
          <ul style="margin-bottom: 70px;">
            <li>Wystawianie dokumentów WZ oraz PZ</li>
            <li>Planowanie dostaw do klientów</li>
            <li>Zarządzaniem lokalizacjami koszy produkcyjnych</li>
            <li>Wysyłanie powiadomień do klientów w momencie akceptacji transportu przez magazynierów</li>
            <li>Generowanie raportów Excel</li>
          </ul>
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/vue.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/node-js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/MongoDB.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/cordova.png?raw=true" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-12">
          <h3><span>URATUJ </span> SPEKTAKL</h3>
          <p>Na zlecenie Teatru Nowy w Łodzi stworzyłem interaktywną grę dla najmłodszych</p>
          <p>Gra polega na wcieleniu się w role czterech pracowników teatru. Każda misja polega na obejrzeniu filmiku
            przygotowanego przez pracowaników i zadecydowaniu, którą drogą powinien on iść, aby dotrzeć na spektakl.</p>
          <p style="margin-bottom: 70px">
            <a href="https://nowy.pl/gra/" target="_blank">https://nowy.pl/gra/</a>
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/vue.png?raw=true" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-12">
          <h3><span>URATUJ </span> SPEKTAKL</h3>
          <p>Na zlecenie Teatru Nowy w Łodzi stworzyłem interaktywną grę dla najmłodszych</p>
          <p>Gra polega na wcieleniu się w role czterech pracowników teatru. Każda misja polega na obejrzeniu filmiku
            przygotowanego przez pracowaników i zadecydowaniu, którą drogą powinien on iść, aby dotrzeć na spektakl.</p>
          <p style="margin-bottom: 70px">
            <a href="https://nowy.pl/gra/" target="_blank">https://nowy.pl/gra/</a>
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/vue.png?raw=true" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-7">
          <h3><span>KORONAWIRUS </span> W POLSCE</h3>
          <p>
            Gdy w pod koniec lutego koronawirus trafił do Polski, postanowiłem w jakiś sposób dołączyć się do walki. W tym
            celu powstał projekt koronawirus-w-polsce.pl.
          </p>
          <p>
            Projekt zawierał statystyki, wykresy dla Polski, Świata, województw oraz powiatów w formie aplikacji PWA oraz
            desktopowej. Projekt zawierał interaktywną mapę Polski z podziałem na powiaty. Dane aktualizowane były
            codziennie. Na mapie zaznaczone były obowiązujące strefy obostrzeń.
          </p>
          <p>
            Aplikacja cieszyła się dużym zainteresowaniem w szczytowym momencie generowała ruch na poziomie 200 tys.
            unikalnych użytkowników miesięcznie. Po około roku działania aplikacji z moich danych w celach statystycznych
            zaczął korzystać 'Institute of Biomedical Engineering University of Oxford'</p>
          <p style="margin-bottom: 70px">
            Całość napisana została przy użyciu Vue oraz node-js
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/vue.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/node-js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/MongoDB.png?raw=true" />


          </div>
        </div>
        <div class="col-md-5 alignCenter">
          <div class="imagesHorizontal">
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus1-thumb.png?raw=true"
              @click="indexCovidPortal = 0" />
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus2-thumb.png?raw=true"
              @click="indexCovidPortal = 1" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-7">
          <h3><span>SYSTEM</span> MONITORINGU</h3>
          <p>
            Z wykorzystaniem RaspberryPi, czujników temperatury i
            wilgotności oraz czujników dymu stworzyłem system,
            który monitoruje kluczowe parametry w serwerowniach.
          </p>
          <p>
            W przypadku, gdy temperatura jest za wysoka albo za niska lub
            gdy w serwerowni pojawi się dym, system informuję o tym
            wiadomością SMS oraz powiadomieniem w aplikacji mobilnej. Same
            pomiary zapisywane są do bazy danych, aby można było przeglądać
            ich historię.
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/raspberry-pi.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/arduino.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/cordova.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/flask.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/python.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/mysql.png?raw=true" />
          </div>
        </div>
        <div class="col-md-5 alignCenter">
          <div class="imagesHorizontal">
            <img class="images" :src="imagesMonitoringSystem[0]" @click="indexMonitoringSystem = 0" />
          </div>

        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-7">
          <h3><span>PORTAL </span> DLA KLIENTÓW FIRMY</h3>
          <p>
            Pracując jeszcze jako administrator systemów stworzyłem portal dla klientów, który pobiera dane z systemu ERP
            i pozwala klientom przeglądać na bieżąco swoje faktury, WZ oraz zamówienia.
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/python.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/flask.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/mysql.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/html.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/css.png?raw=true" />
          </div>
        </div>
        <div class="col-md-5 alignCenter">
          <div class="imagesHorizontal">
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-klienta1-thumb.png?raw=true"
              @click="indexClientPortal = 0" />
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-klienta2-thumb.png?raw=true"
              @click="indexClientPortal = 1" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-7">
          <h3><span>PORTAL </span> DLA DZIAŁU IT</h3>
          <p>
            Pracując jeszcze jako administrator systemów stworzyłem aplikację internetową działu IT, która usprawniła
            pracę w całym dziale.
          </p>
          <p>
            Aplikacja pozwalała na:
          <ul>
            <li>Zarządzanie sprzętem, który jest pod opięką działu IT,</li>
            <li>Wystawianie dokumentów przekazania i odbioru sprzętu,</li>
            <li>Tworzenie listy zakupów</li>
          </ul>
          </p>
          <p>
            Wraz z wejściem w życie nowej ustawy o ochronie danych osobowych portal został wyposażony moduł RODO, który
            składa się z:
          <ul>
            <li>Rejestru naruszeń</li>
            <li>Spisu obszarów przetwarzania</li>
            <li>Spisu zbiorów danych osobowych</li>
          </ul>
          </p>

          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/php.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/mysql.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/html.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/css.png?raw=true" />
          </div>
        </div>
        <div class="col-md-5 alignCenter">
          <div class="imagesHorizontal">
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-it1-thumb.png?raw=true"
              @click="indexItPortal = 0" />
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-it2-thumb.png?raw=true"
              @click="indexItPortal = 1" />
          </div>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="row">
        <div class="col-md-7">
          <h3><span>STRONA</span> WIZYTÓWKA</h3>
          <p>
            Na zlecenie klienta stworzyłem prostą stronę firmy składającą
            się ze strony głównej, oraz podstrony z ciekawostkami.
          </p>
          <p>
            Projekt graficzny strony był mojego autorstwa. Do całości
            dochodzi również autorski CMS pozwalający na dodawanie
            ciekawostek oraz edytownie elementów na stronie.
          </p>
          <p>
            Strona została napisana przy użyciu standardowych technologii
            webowych, PHP, MySQL oraz zgodnie z najnowocześniejszymi
            standardami SEO oraz RWD.
          </p>
          <p>
            <a href="https://www.pomoc-poszkodowanym.eu/" target="_blank">https://www.pomoc-poszkodowanym.eu/</a>
          </p>
          <div class="technology">
            <h6>Wykorzystane technologie:</h6>
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/php.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/mysql.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/js.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/html.png?raw=true" />
            <img
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/technology/css.png?raw=true" />
          </div>
        </div>
        <div class="col-md-5 alignCenter">
          <div class="imagesHorizontal">
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/ema1-thumb.png?raw=true"
              @click="indexBusinessPage = 0" />
            <img class="images"
              src="https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/ema2-thumb.png?raw=true"
              @click="indexBusinessPage = 1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
export default {
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      imagesMonitoringSystem: [
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/monitoring1.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/monitoring2.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/monitoring3.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/monitoring4.jpg?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/monitoring5.jpg?raw=true',
      ],
      imagesBusinessPage: [
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/ema1.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/ema2.png?raw=true',
      ],
      imagesItPortal: [
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-it1.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-it2.png?raw=true',
      ],
      imagesClientPortal: [
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-klienta1.PNG?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/portal-klienta2.PNG?raw=true',
      ],
      imagesCovidPortal: [
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus1.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus2.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus3.png?raw=true',
        'https://github.com/maciejunio/maciejunio.github.io/blob/main/src/assets/portfolio/koronawirus4.png?raw=true',
      ],
      indexMonitoringSystem: null,
      indexBusinessPage: null,
      indexItPortal: null,
      indexClientPortal: null,
      indexCovidPortal: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.Portfolio {
  .slide {
    padding: 30px 30px;
    border-radius: 10px;
    background: #12141c;
    margin: 80px 0;
  }

  .slide:first-child {
    margin: 30px 0;
  }

  .maxHeight {
    height: 90%;
  }

  .images {
    cursor: pointer;
  }

  .alignCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imagesHorizontal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 62px;

    img {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }

  h3 {
    font-size: 35px;
    margin-bottom: 20px;

    span {
      color: #d0bb79;
    }
  }

  p {
    font-size: 20px;
    text-align: justify;

    a {
      color: #d0bb79;
      text-decoration: none;
      transition: 0.2s all ease-in;
    }
  }

  .technology {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    h6 {
      margin-right: 20px;
      font-size: 18px;
    }

    img {
      width: 30px;
      margin-right: 10px;
    }

    @media(max-width: 500px) {
      display: none;
    }
  }
}
</style>
