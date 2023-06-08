<template>
  <div id="navigation-mobile">
    <ul>
      <li :class="{ scroll: !view.topOfPage, rotate: isRotating }">
        <img
          class="image-size-logo"
          src="~@/assets/images/logo-ohs-2.png"
          alt="My Image"
          @click="startClickRotating"
        />
      </li>
      <li>
        <font-awesome-icon icon="house" class="icons" />
        <a @click="scrollToSection('section1')">Accueil</a>
      </li>
      <li>
        <font-awesome-icon icon="address-book" class="icons" />
        <a @click="scrollToSection('section2')">À propos de moi</a>
      </li>
      <li>
        <font-awesome-icon icon="gears" class="icons" /><a
          @click="scrollToSection('section3')"
          >Compétences</a
        >
      </li>
      <li>
        <font-awesome-icon icon="diagram-project" class="icons" />
        <a @click="scrollToSection('section4')">Projects</a>
      </li>
      <li>
        <font-awesome-icon icon="envelope" class="icons" />
        <a @click="scrollToSection('section5')">Contact</a>
      </li>
    </ul>
    <div class="social-media">
      <a href="https://github.com/louohs"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/louisa-ohs-5293b0240"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a href="http://instagram.com/devohs"><i class="fab fa-instagram"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRotating: false,
      view: {
        topOfPage: true,
      },
    };
  },

  methods: {
    startClickRotating() {
      this.isRotating = true;
    },

    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },

    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.image-size-logo {
  height: 50px;
  width: 50px;
}

.rotate {
  transition: all 0.3s ease;
}

.rotate > img:nth-child(1) {
  cursor: pointer;
}

.rotate > img:nth-child(2) {
  cursor: default;
}

.rotate > img:nth-child(1):hover {
  transform: scale(1.3);
  animation: logo 0.7s;
}

@keyframes logo {
  0% {
    transform: rotate(0deg) scale(1);
  }
  20% {
    transform: rotate(15deg) scale(1.3);
  }
  40% {
    transform: rotate(-25deg) scale(1.3);
  }
  60% {
    transform: rotate(25deg) scale(1.3);
  }
  80% {
    transform: rotate(-15deg) scale(1.3);
  }
  100% {
    transform: rotate(0deg) scale(1.3);
  }
}

.icons {
  margin-right: 12px;
}

.custom-button {
  background-color: #ced5cd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}

#navigation-mobile {
  // padding for the navigation mobile
  padding: 10px 0 0 0;
  margin-top: 50px;

  ul {
    list-style: none;
    padding-left: 30px;

    li {
      color: white;
      font-weight: bold;
      margin-bottom: 40px;
      cursor: pointer;

      &:hover {
        color: #93c08c;
        transition: all 0.4s ease;
      }
    }
  }

  .social-media {
    position: absolute;
    left: 70px;
    bottom: 20px;

    i {
      margin: 0 30px 0 0;
      color: #fff;
      font-size: 2rem;
    }
  }
}
</style>
