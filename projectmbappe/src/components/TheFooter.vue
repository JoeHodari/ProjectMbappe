<template>
  <!-- Footer -->
  <Footer :text="['center', 'lg-start', 'muted']">
    <!-- Section: Social media -->
    <section class="
        d-flex
        justify-content-center justify-content-lg-between
        p-4
        border-bottom
      ">
      <!-- Left -->
      <div class="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>

      </div>
      <!-- Left -->
      <!-- Right -->
      <div>
        <a href="" class="me-4 text-reset">
            <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a href="" class="me-4 text-reset">
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="" class="me-4 text-reset">
            <font-awesome-icon icon="fa-brands fa-google" />
        </a>
        <a href="" class="me-4 text-reset">
            <font-awesome-icon icon="fa-brands fa-instagram"/>
        </a>
        <a href="" class="me-4 text-reset">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
        </a>
        <a href="" class="me-4 text-reset">
          <Icon iconStyle="fab" icon="github"></Icon>
        </a>
      </div>
      <!-- Right -->
    </section>
    <br>
    <!-- Section: Social media -->
    <!-- Section: quick links -->
    <div class="container">
        <div class="row align-items-start">
            <div class="col text-start">
                <!-- Content -->
                <h6 class="text-uppercase fw-bold mb-4">
                    <font-awesome-icon icon="fa-solid fa-building" /> Aplhard Hire
                </h6>
                <p>Alphard Hire is a chauffered car rental company that deals with hiring out Toyota Alphard and Velfire. We are mainly located in Nairobi, Kenya but our services can be offered all over East Africa. We offer you a taste of luxury and professionalism. <br> Thank you for doing business with us. </p>
            </div>
            <div class="col text-center">
                <h6 class="text-uppercase fw-bold mb-4">Quick Links</h6>
                <ul> Home </ul>
                <ul> About Us </ul>
                <ul> Services </ul>
                <ul> Contact Us </ul>
            </div>
            <div class="col text-end">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><font-awesome-icon icon="fa-solid fa-house" /> Nairobi, Kenya</p>
                <p><font-awesome-icon icon="fa-solid fa-envelope" /> hodaritravelagencies@gmail.com</p>
                <p><font-awesome-icon icon="fa-solid fa-phone" /> +2547 0808 3620</p>
                <p><font-awesome-icon icon="fa-solid fa-mailbox" /> 108310-00100</p></div>
        </div>
    </div>
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2022: H O D A R I
      <font-awesome-icon icon="fa-solid fa-user-secret" />
    </div>
    <!-- Copyright -->
  </Footer>
  <!-- Footer -->

</template>
  
<script>

export default {
  name: 'TheFooter'
}

</script>