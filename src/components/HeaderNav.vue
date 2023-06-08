<template>
  <div id="navbar">
    <nav :class="{ scroll: !view.topOfPage, hide: isSmallScreen }">
      <div class="logo">
        <li class="title-header" :class="{ rotate: isRotating }">
          <img
            class="image-size-logo"
            src="~@/assets/images/logo-ohs-2.png"
            alt="My Image"
            @click="startRotation"
          />
        </li>
      </div>
      <ul>
        <li>
          <a @click="scrollToSection('section1')"
            ><font-awesome-icon icon="house" class="icons" />Accueil</a
          >
        </li>
        <li>
          <a @click="scrollToSection('section2')"
            ><font-awesome-icon icon="address-book" class="icons" />À propos de
            moi</a
          >
        </li>
        <li>
          <a @click="scrollToSection('section3')"
            ><font-awesome-icon icon="gears" class="icons" />Compétences</a
          >
        </li>
        <li>
          <a @click="scrollToSection('section4')"
            ><font-awesome-icon icon="diagram-project" class="icons" />
            Projets</a
          >
        </li>
        <li>
          <a @click="scrollToSection('section5')"
            ><font-awesome-icon icon="envelope" class="icons" />Contact</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",

  data() {
    return {
      isRotating: false,
      view: {
        topOfPage: true,
      },
      isSmallScreen: false,
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {

    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    
    handleResize() {
      this.isSmallScreen = window.innerWidth < 1650;
    },
    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    },

    startRotation() {
      this.isRotating = true;
    },
  },
};
</script>

<style lang="scss">
.hide {
  display: none;
}

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

.logo {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin-left: 20px;
}

.title-header {
  color: white;
}

.icons {
  margin-right: 10px;
}

body {
  height: 100vh;
  overflow-x: hidden;

  nav {
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: transparent;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &.scroll {
      box-shadow: 0 0 10px #aaa;
      background-color: #fff transparent;

      ul li {
        color: #ffffff;
      }
    }

    ul {
      margin-left: 64em;
      width: 34%;
      display: flex;
      justify-content: space-between;

      li {
        cursor: pointer;
        font-weight: 600;
        list-style-type: none;
        color: white;
      }
    }
  }
}
</style>
