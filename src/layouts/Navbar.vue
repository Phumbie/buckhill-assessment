<template>
  <v-app-bar
    app
    class="navbar"
    color="#4EC690"
    elevation="0"
    clipped-left
    width="100%"
    fixed
  >
    <div class="navbar-container">
      <div class="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="29"
          fill="none"
        >
          <path
            d="M21.1344.02422c-1.8215-.27366-3.7511 1.80291-4.3068 4.66825-.5558 2.84925.4476 5.39263 2.2692 5.68243 1.8061.2897 3.7511-1.78685 4.3223-4.65219.5712-2.84925-.4631-5.39264-2.2847-5.6985Zm-11.0373 0C8.26013.33007 7.2413 2.87346 7.78159 5.7227c.5866 2.86534 2.51621 4.94189 4.33771 4.65219 1.837-.2898 2.8404-2.83318 2.2692-5.68243-.5557-2.86534-2.4853-4.94191-4.2914-4.66825Zm19.296 7.40482c-1.7598-.78878-4.1525.6439-5.4028 3.13896-1.1732 2.5434-.7719 5.2156.9725 6.0044 1.7443.7888 4.1216-.6278 5.3411-3.1551s.7873-5.21558-.9108-5.98826Zm-27.78625 0C-.0912 8.20172-.52343 10.89.69608 13.4173c1.21951 2.5273 3.59678 3.9439 5.34115 3.1551 1.74436-.7888 2.14571-3.461.97251-6.0044-1.25038-2.49506-3.64309-3.92774-5.40289-3.13896ZM4.1848 24.7821c-.06174 1.5131 1.04971 3.1873 2.37727 3.8151 2.7632 1.32 6.03583-1.4166 9.10773-1.4166 3.0719 0 6.3754 2.8492 9.0923 1.4166 1.5437-.7888 2.6088-2.8815 2.4081-4.62-.2778-2.3985-3.041-3.6863-4.6773-5.4409-2.1766-2.2698-3.7203-6.5356-6.8231-6.5356-3.0874 0-4.7237 4.2014-6.80763 6.5356-1.71349 1.9639-4.56931 3.6219-4.67737 6.2458Z"
            fill="#fff"
          />
        </svg>
        <p>Petson</p>
      </div>
      <div class="nav-options">
        <p>PRODUCTS</p>
        <p>PROMOTIONS</p>
        <p>BLOG</p>
      </div>
      <div>
        <v-btn class="ma-2 mr-2" color="white" outlined>
          <v-icon dark left> {{ icons.mdiCart }} </v-icon>
          Cart (0)
        </v-btn>
        <v-btn class="ma-2" color="white" outlined> LOGIN </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
  import { mdiCart } from "@mdi/js";
  export default {
    data: () => ({
      icons: {
        mdiCart,
      },
    }),
  };
</script>
<style lang="scss" scoped>
  .navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 70rem;
    margin: auto;

    .logo {
      display: flex;
      align-items: center;
    }
    .logo p {
      margin: auto;
      color: white;
      margin-left: 13px;
      font-size: 20px;
    }
    .nav-options {
      display: flex;
      align-items: center;
    }

    .nav-options p {
      color: white;
      margin-right: 1rem;
      margin-bottom: 0;
      font-weight: semibold;
      cursor: pointer;
    }
  }
</style>
