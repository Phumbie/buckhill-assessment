<template>
  <footer class="light-green pa-10 footer-container">
    <v-container>
      <v-row>
        <v-col>
          <div class="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="53"
              fill="none"
            >
              <path
                d="M38.0402.04374c-3.2361-.49435-6.6643 3.25694-7.6516 8.43314-.9873 5.14712.7954 9.74172 4.0315 10.26512 3.2088.5235 6.6643-3.2278 7.679-8.404C43.1139 5.19086 41.2764.59626 38.0402.04374Zm-19.6089 0c-3.2636.55252-5.0736 5.14712-4.1138 10.29426 1.0422 5.1762 4.4703 8.9275 7.7065 8.404 3.2636-.5234 5.0462-5.118 4.0315-10.26512-.9873-5.1762-4.4155-8.9275-7.6242-8.43314ZM52.7126 13.4204c-3.1264-1.4249-7.3773 1.1632-9.5987 5.6706-2.0843 4.5946-1.3713 9.4218 1.7277 10.8468 3.0991 1.4249 7.3225-1.1342 9.4891-5.6997 2.1666-4.5655 1.3987-9.4218-1.6181-10.8177Zm-49.3651 0C.33075 14.8163-.43716 19.6726 1.72942 24.2381s6.39005 7.1246 9.48908 5.6997c3.099-1.425 3.8121-6.2522 1.7278-10.8468-2.2214-4.5074-6.47234-7.0955-9.5988-5.6706Zm4.57999 31.348c-.1097 2.7335 1.86491 5.7578 4.22351 6.8919 4.909 2.3846 10.7232-2.559 16.1808-2.559 5.4575 0 11.3265 5.1471 16.1533 2.559 2.7425-1.4249 4.6349-5.2052 4.2783-8.3459-.4936-4.3328-5.4027-6.6592-8.3098-9.8289-3.8669-4.1003-6.6094-11.8064-12.1218-11.8064-5.4851 0-8.3921 7.5898-12.0945 11.8064-3.0442 3.5477-8.11783 6.5429-8.30981 11.2829Z"
                fill="#4EC690"
              />
            </svg>
            <p>Petson</p>
          </div>
        </v-col>
        <v-col>
          <h6>Petson</h6>
          <ul>
            <li>
              <a href="#"> About us </a>
            </li>
            <li>
              <a href="#"> Blog </a>
            </li>
            <li>
              <a href="#"> Store locator</a>
            </li>
          </ul>
        </v-col>
        <v-col>
          <h6>Contact</h6>
          <ul>
            <li>
              <a href="#">contact@petson.com</a>
            </li>
            <li>
              <a href="#">+385 000 000</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                35 Shnauzer avenue, Dogville AL</a
              >
            </li>
          </ul>
        </v-col>
        <v-col>
          <h6>Information</h6>
          <ul>
            <li>
              <a href="#">Ordering and Shipping</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">GDPR statement</a>
            </li>
          </ul>
        </v-col>
        <v-col justify="center">
          <div>
            <p>If you can’t find answer to your question, please contact our</p>
            <p class="mt-4 customer-care"><a href="">Customer care</a></p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<style lang="scss" scoped>
  .footer-container {
    h6 {
      font-size: 20px;
      color: black;
      font-weight: normal;
    }
    ul {
      padding: 0;
    }
    li {
      text-decoration: none;
      list-style: none;
      margin-top: 4px;
    }
    li a {
      text-decoration: none;
      color: rgba(0, 0, 0, 0.54);
    }

    p {
      color: rgba(0, 0, 0, 0.54);
      font-size: 1rem;
    }
    .customer-care {
      color: #1976d2;
      text-decoration: none;
    }
  }
</style>
