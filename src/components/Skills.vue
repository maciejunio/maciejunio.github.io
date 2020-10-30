<template>
  <div class="Skills">
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Java Script</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 90%;"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Vue.js</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 85%;"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              85%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Nuxt.js</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 80%;"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              80%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>NestJS</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 70%;"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>SASS</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%;"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Node.js</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 70%;"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Angular</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 40%;"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Firebase</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 60%;"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Python</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 50%;"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>IoT</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 70%;"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Git</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 90%;"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              90%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>Jira</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 95%;"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              95%
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="skillItem">
          <h5>MongoDB</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%;"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              65%
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skillItem">
          <h5>MySQL</h5>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 75%;"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              75%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Skills {
  .row {
    margin-bottom: 30px;
    @media(max-width:767px){
      margin-bottom: 0;
    }
  }
  margin-top: 50px;
  @media(max-width:767px){
     margin-top: 20px;
  }
  .skillItem {
    h5 {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }
    @media(max-width:767px){
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }
  .progress-bar {
    background-color: #d0bb79;
  }
  .progress {
    background: #2a2a2e;
  }
}
</style>
