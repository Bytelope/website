<!-- pages/index.vue -->
<template>
  <div class="main-page">
    <section class="about-section">
      <q-img src="/path/to/your/image.png" class="logo" />
      <h1>About BytelopeAB</h1>
      <p>Your IT solutions partner.</p>
      <q-btn color="primary" label="Get Started" />
    </section>

    <section class="trusted-section">
      <q-banner class="q-mb-md">
        Trusted by top tech firms worldwide.
      </q-banner>
      <div class="logo-grid">
        <q-img v-for="logo in customerLogos" :key="logo.alt" :src="logo.src" :alt="logo.alt" class="customer-logo" />
      </div>
    </section>

    <section class="services-section">
      <q-card class="service-card">
        <q-img src="/path/to/your/service-image1.png" />
        <q-card-section>
          <h2>Effortless IT Solutions</h2>
          <p>Experts in software development, Java, data migration, and ETL.</p>
          <q-btn color="primary" label="Learn More" />
        </q-card-section>
      </q-card>
      <!-- Add more cards as needed -->
    </section>

    <section class="contact-section">
      <q-input filled v-model="email" label="Enter your email address" />
      <q-btn color="primary" label="Submit" @click="submitEmail" />
      <div class="contact-links">
        <q-btn flat label="Start Trial" />
        <q-btn flat label="Contact Us" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')

const customerLogos = [
  { src: '/customers/kindred.webp', alt: 'Kindred People AB' },
  { src: '/customers/ericsson.webp', alt: 'Ericsson AB' },
  { src: '/customers/inera.webp', alt: 'Inera AB' },
  { src: '/customers/saab.svg', alt: 'Saab AB' },
  { src: '/customers/toshiba.svg', alt: 'Toshiba AB' },
  { src: '/customers/vetenskapsrådet.png', alt: 'Vetenskapsrådet' },
  { src: '/customers/rise.svg', alt: 'Innventia AB/RISE' },
  { src: '/customers/24mx.png', alt: 'Pierce AB/24MX' },
  { src: '/customers/sledstore.png', alt: 'Pierce AB/Sledstore' },
  { src: '/customers/xlmoto.png', alt: 'Pierce AB/XlMoto' },
]

const submitEmail = () => {
  // Handle email submission
}
</script>

<style scoped>
.main-page {
  padding: 20px;
}
.about-section, .trusted-section, .services-section, .contact-section {
  margin-bottom: 40px;
}
.logo {
  width: 200px;
  margin: 20px auto;
}
.logo-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.customer-logo {
  width: 100px;
  height: auto;
}
.service-card {
  width: 100%;
  margin: 20px 0;
}
.contact-section {
  text-align: center;
}
.contact-links {
  margin-top: 20px;
}
</style>
