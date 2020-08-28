<template>
  <b-container role="tablist">
    <h1 id="title">
      Help
    </h1>
    <div class="">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.register1 block variant="info">
            How to register an account?
          </b-button>
        </b-card-header>
        <b-collapse id="register1" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              You can register your account by filling up all your information needed as listed.
              <br>
              <a href="/register_login">Register now!</a>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.register2 block variant="info">
            Why I can't register with my email address?
          </b-button>
        </b-card-header>
        <b-collapse id="register2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text class="card1">
              <p>
                We are so sorry to hear that!
                <br><br>
                Please follow these steps and check it up again!
                <br>
                <ul>
                  <li>Check your internet connection and make sure everything goes right</li>
                  <li>Check if the account exists before</li>
                </ul>
              </p>
              <p>
                If you still cannot register an account, please contact us for help!
                Ping us at <strong>tMaster@tms.com.my</strong> Or call us at <strong>01-2345678</strong>
              </p>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button v-b-toggle.accordion-3 block variant="info">
            Accordion 3
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>some text</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
  #title{
    color: #ffffff;
  }

  .card1{
    text-align: left;
  }
</style>
