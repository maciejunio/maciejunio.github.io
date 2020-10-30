<template>
  <div class="Experience">
    <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">10.2019 - <b>Obecnie</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Agora S.A.</h6>
          <h4>Frontend Developer</h4>
          <p>
            W pracy głównie zajmuję się rozwojem strony <a href="http://sport.pl/" target="_blank">http://sport.pl/</a>.
            Stak technologiczny to: JavaScript, Vue.js, Nuxt.js, SASS, Git, Docker
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">01.2018 - <b>10.2019</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Final S.A.</h6>
          <h4>Administrator systemów informatycznych</h4>
          <p>
            Jako administrator systemów zajmowałem się głównie systemem ERP oraz MES (wsparcie użytkowników, tworzenie nowych modułów, tworzenie raportów), także wszelkiego rodzaju procesy sprzedażowe, logistyczne czy produkcyjne nie są mi obce. Do moich obowiązków należało również opieka nad różnego rodzaju systemami takimi jak serwery Linux, AD, Veem, VMware
          </p>
        </div>
      </div>
    </div>
     <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">01.2017 - <b>12.2017</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Final S.A.</h6>
          <h4>Specjalista ds. IT</h4>
          <p>
            Pracując jako specjalista ds. IT zajmowałem się różnego rodzaju systemami np. serwery Linux, AD, Veem, VMware, ERP, MES
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">09.2016 - <b>12.2016</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Redmoon</h6>
          <h4>Pracownik HelpDesk</h4>
          <p>
            Bieżące wsparcie użytkowników w problemach ze sprzętem komputerowym.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Experience {
  margin-top: 50px;
  margin-bottom: 80px;
  @media(max-width: 767px){
    margin-top: 20px;
  margin-bottom: 40px;
  }
  .item{
    margin-bottom: 50px;
     @media(max-width: 767px){
      margin-bottom: 20px;
    }
  }
  .date {
    letter-spacing: 1px;
    padding-top: 15px;
    font-size: 18px;
    @media(max-width: 767px){
      display: block;
      margin-bottom: 15px;
    }
    b {
      font-size: 35px;
      font-weight: 700;
    }
  }
  .right {
    border-left: 1px solid #eee;
    @media(max-width: 767px){
      margin-left: 15px;
    }
  }
  h6 {
    color: #777;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  h4 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 15px;
    position: relative;
    &::before {
      content: '';
      width: 20px;
      height: 20px;
      background: #0d0f16;
      border-radius: 50%;
      position: absolute;
      left: -26px;
      top: 4px;
    }
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: #d0bb79;
      border-radius: 50%;
      position: absolute;
      left: -20px;
      top: 10px;
    }
  }
  p {
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    color: #999;
    line-height: 2;
    margin: 0;
    font-size: 14px;
    a{
      color:#d0bb79;
      text-decoration: none;
    }
  }
}
</style>
