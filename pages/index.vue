<template>
  <v-app>
    <v-container>
      <!-- Hero Section -->
      <v-card class="mb-5" color="primary" dark>
        <v-card-title class="justify-center py-10">
          <h1 class="display-2 font-weight-bold">{{ companyName }}</h1>
        </v-card-title>
        <v-card-subtitle class="justify-center pb-10">{{ pitch }}</v-card-subtitle>
      </v-card>

      <!-- About Us Section -->
      <v-card class="mb-5" outlined>
        <v-card-title>
          <v-icon left>mdi-information-outline</v-icon>
          <span class="text-h5 font-weight-bold">About Us</span>
        </v-card-title>
        <v-card-text>{{ pitch }}</v-card-text>
      </v-card>

      <!-- Past Customers Section -->
      <v-card class="mb-5" outlined>
        <v-card-title>
          <v-icon left>mdi-account-group-outline</v-icon>
          <span class="text-h5 font-weight-bold">Past Customers</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="logo in customerLogos" :key="logo.alt" cols="12" sm="6" md="4" class="text-center">
              <div class="logo-container">
                <v-img :src="logo.src" :alt="logo.alt" class="logo-image"></v-img>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Contact Information Section -->
      <v-card class="mb-5" outlined>
        <v-card-title>
          <v-icon left>mdi-contact-mail-outline</v-icon>
          <span class="text-h5 font-weight-bold">Contact Information</span>
        </v-card-title>
        <v-card-text>
          <p><v-icon left>mdi-email-outline</v-icon> Email: {{ contactEmail }}</p>
          <p><v-icon left>mdi-phone-outline</v-icon> Phone: {{ contactPhone }}</p>
        </v-card-text>
      </v-card>

      <!-- Footer -->
      <v-footer color="primary" dark padless>
        <v-card flat class="text-center pa-3">
          <v-card-text>&copy; 2024 {{ companyName }}. All rights reserved.</v-card-text>
        </v-card>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script setup>
const companyName = 'Bytelope AB'
const pitch = 'We help customers with their software development needs and database migrations.'
const contactEmail = 'webmaster@bytelope.com'
const contactPhone = '+46-760-335-220'
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
</script>

<style scoped>
.v-card {
  padding: 20px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  max-width: 200px;
  margin: 0 auto;
}

.logo-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.display-2 {
  font-size: 2.5rem;
  line-height: 3rem;
}

.text-h5 {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.font-weight-bold {
  font-weight: bold;
}
</style>
