<template>
  <div class="wrapper">
    <div
      class="container-cards-contact"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 class="title-contact">Contact</h2>
      <div class="sub-cards-contact">
        <div class="container-infos">
          <button
            @click="accessToCv"
            class="custom-button-cv"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <a
              href="@/assets/pdf/CV-LOUISA-OHS.pdf"
              download="CV-LOUISA-OHS.pdf"
            >
              Accéder à mon CV
            </a>
          </button>

          <p data-aos="fade-up" data-aos-duration="1000" class="infos-contacts">
            <font-awesome-icon icon="envelope" /> louisaohs@gmail.com
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" class="infos-contacts">
            <font-awesome-icon icon="location-dot" /> Paris, Île-de-France
          </p>
          <div class="social-media">
            <a href="https://github.com/louisaohs"
              ><i class="fab fa-github"></i
            ></a>
            <a href="https://www.linkedin.com/in/louisa-ohs-5293b0240"
              ><i class="fab fa-linkedin"></i
            ></a>
            <a href="http://instagram.com/devohs"
              ><i class="fab fa-instagram"></i
            ></a>
          </div>
        </div>

        <form @submit.prevent="createNewMessage">
          <label
            for="firstnameUser"
            class="label-info"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Prénom</label
          >

          <input
            type="text"
            name="firstnameUser"
            placeholder="Victor"
            v-model="firstnameUser"
            class="infos-input"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <span v-if="errors.firstnameUser" class="errors-values">{{
            errors.firstnameUser
          }}</span>

          <label
            for="lastnameUser"
            class="label-info"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Nom</label
          >
          <input
            type="text"
            name="lastnameUser"
            placeholder="Hugo"
            v-model="lastnameUser"
            class="infos-input"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <span v-if="errors.lastnameUser" class="errors-values">{{
            errors.lastnameUser
          }}</span>

          <label
            for="emailUser"
            class="label-info"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Email</label
          >
          <input
            type="text"
            name="emailUser"
            placeholder="victor-hugo@exemple.com"
            v-model="emailUser"
            class="infos-input"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <span v-if="errors.emailUser" class="errors-values">{{
            errors.emailUser
          }}</span>

          <label
            for="subjectUser"
            class="label-info"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Objet</label
          >
          <input
            type="text"
            name="subjectUser"
            placeholder="Demande de renseignements..."
            v-model="subjectUser"
            class="infos-input"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <span v-if="errors.subjectUser" class="errors-values">{{
            errors.subjectUser
          }}</span>

          <label
            for="messageUser"
            class="label-info"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Message</label
          >

          <textarea
            id="message"
            name="messageUser"
            rows="5"
            cols="33"
            v-model="messageUser"
            class="infos-input"
            placeholder="Bonjour ! Puis-je savoir..."
            data-aos="fade-up"
            data-aos-duration="1000"
          ></textarea>

          <div class="button">
            <input
              type="submit"
              value="Collaborer"
              @click="getUsers"
              class="input-button"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>

          <p v-if="messageSent" class="success">
            Merci ! Votre message a bien été envoyé :)
            <br />
          </p>
          <p v-else-if="messageSentError" class="errors">
            Une erreur s'est produite, veuillez réessayer.
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import axios from "axios";
import { saveAs } from "file-saver";

export default {
  name: "ContactMe",

  data() {
    return {
      users: [],
      firstnameUser: "",
      lastnameUser: "",
      emailUser: "",
      subjectUser: "",
      messageUser: "",
      errors: {
        firstnameUser: "",
        lastnameUser: "",
        emailUser: "",
        subjectUser: "",
        messageUser: "",
      },
      messageSent: false,
      messageSentError: false,
      token: "",
    };
  },

  methods: {
    // async getUsers() {
    //   const response = await fetch("http://localhost:8000/api/users", {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   });

    //   const data = await response.json();
    //   console.log(data);

    //   this.result = data.success;
    //   if (data.success === true) {
    //     localStorage.setItem("token", data.token);
    //   }
    // },

    mounted() {
      emailjs.init("E-u_BQRxlwXZIR-_Y");
    },

    async createNewMessage() {
      this.submitForm();

      if (Object.keys(this.errors).length === 0) {
        const emailParams = {
          to_name: "Louisa",
          from_name: this.emailUser,
          firstnameUser: this.firstnameUser,
          lastnameUser: this.lastnameUser,
          emailUser: this.emailUser,
          subjectUser: this.subjectUser,
          messageUser: this.messageUser,
        };

        emailjs
          .send(
            "SERVICE_LOUOHS_4683939",
            "template_4fjeb3a",
            emailParams,
            "E-u_BQRxlwXZIR-_Y"
          )
          .then((response) => {
            console.log("Email envoyé !", response.status, response.text);
            this.messageSent = true;
            this.messageSentError = false;
          })
          .catch((error) => {
            console.error("Erreur d'envoie d'email :", error);
            this.messageSent = false;
            this.messageSentError = true;
          });
      }
    },

    // gestion d'erreurs
    submitForm() {
      this.errors = {};

      if (!this.firstnameUser) {
        this.errors.firstnameUser = "Veuillez entrer un prénom.";
      }

      if (!this.lastnameUser) {
        this.errors.lastnameUser = "Veuillez entrer un nom.";
      }

      if (!this.emailUser) {
        this.errors.emailUser = "Veuillez entrer un email.";
      } else if (!this.isValidEmail(this.emailUser)) {
        this.errors.emailUser = "Veuillez entrer un email valide.";
      }

      if (!this.subjectUser) {
        this.errors.subjectUser = "Veuillez entrer un objet.";
      }

      if (!this.messageUser) {
        this.errors.messageUser = "Veuillez entrer un message.";
      }
    },

    isValidEmail(email) {
      let regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },

    downloadItem(url) {
      axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          saveAs(response.data, "CV-LOUISA-OHS.pdf");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  // mounted() {
  //   this.getUsers();
  // },
};
</script>

<style>
.container-cards-contact {
  width: 100%;
  max-width: 700px;
  margin: 1rem auto;
  color: rgb(179, 179, 179);
}

.sub-cards-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.sub-container-button {
  display: flex;
  justify-content: center;
  margin-left: -1px;
}

.title-contact {
  font-weight: bold;
  text-transform: uppercase;
  color: #93c08c;
  letter-spacing: 3px;
  text-decoration: underline;
  text-decoration-color: #dce3d4;
  animation: underlineAnimation 2s infinite;
}

@keyframes underlineAnimation {
  0% {
    text-decoration-color: #dce3d4;
  }
  50% {
    text-decoration-color: rgb(179, 179, 179);
  }
  100% {
    text-decoration-color: #dce3d4;
  }
}

.cv-info {
  margin-bottom: 0.5rem;
}

.contact-info {
  margin-top: 0.5rem;
}

.infos-contacts {
  font-family: "Nanum Myeongjo", sans-serif;
}

a {
  text-decoration: none;
  color: white;
}

.label-info {
  padding-top: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 10px;
  color: #8b8b8b;
}

::placeholder {
  color: #949494;
}

.infos-input {
  position: relative;
  outline: none !important;
  border-radius: 10px;
  padding: 10px;
  border: none;
  letter-spacing: 2px;
  font-family: "Poppins", sans-serif;
  border: 1px solid #93c08c;
  background-color: #dce3d4;
  width: 100%;
}

.custom-button-cv {
  background-color: #ced5cd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 19px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 36px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

.custom-button-cv:hover {
  transition: color 0.4s ease;
  color: #93c08c;
}

.input-button {
  background-color: #ced5cd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 19px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
}

.input-button:hover {
  transition: color 0.4s ease;
  color: #93c08c;
}

textarea {
  width: 100%;
  resize: none;
}
.button {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.success {
  font-size: 15px;
  text-align: center;
  color: rgb(199, 199, 199);
  text-shadow: 0 0 5px #f7f7f7, 0 0 10px #f7f7f7;
}

.errors-values {
  font-size: 13px;
  margin-top: 3px;
  color: white;
  text-shadow: 0 0 5px #df4646, 0 0 10px #df4646, 0 0 20px #df4646;
}
.errors {
  text-align: center;
  color: white;
  text-shadow: 0 0 5px #df4646, 0 0 10px #df4646, 0 0 20px #df4646;
}

.social-media {
  margin-bottom: 20px;
}

i {
  margin: 0 30px 0 0;
  color: #ced5cd;
  font-size: 2rem;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
}
</style>
