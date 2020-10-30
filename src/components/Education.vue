<template>
  <div class="Education">
      <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">10.2020 - <b>Obecnie</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Studia magisterskie</h6>
          <h4>
            Akademia WSB
          </h4>
          <p>
            Po ukończeniu studiów pierwszego stopnia. Postanowiłem udać się na studia magisterskie.
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">10.2016 - <b>03.2020</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Studia inżynierskie</h6>
          <h4>
            Akademia WSB
          </h4>
          <p>
              Ukończyłem studia inżynierskie pierwszego stopnia na kierunku informatyka, ze specjalnością "Inżynieria Internetu Rzeczy".
          </p>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-md-5 col-sm-3">
          <span class="date">09.2014 - <b>04.2016</b></span>
        </div>
        <div class="col-md-7 col-sm-9 right">
          <h6>Kierunek: Technik Informatyk</h6>
          <h4>Zespol Szkol Elektornicznych i Informatycznych</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Education {
  margin-top: 50px;
  margin-bottom: 80px;
  @media(max-width: 767px){
    margin-top: 20px;
  margin-bottom: 40px;
  }
  .item {
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
    a {
      color: #d0bb79;
      text-decoration: none;
    }
  }
}
</style>
