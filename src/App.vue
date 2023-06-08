<template>
  <div v-if="isLoading" class="loader">
    <PageLoader />
  </div>
  <div v-else>
    <div class="home-page fade-in">
      <NavMobile />
      <div
        :class="{ dark: mode === 'dark', 'hide-background': mode === 'dark' }"
      >
        <div :class="mode === 'dark' ? 'dark' : ''">
          <div
            class="content"
            :class="{ open: showNav, dark: mode === 'dark' }"
          >
            <!-- Base nav -->
            <div class="top-bar">
              <!-- ------------ -->

              <div id="navigation-icon" v-if="mobileView" @click="clickIcons">
                <i :class="isIconCross ? 'fas fa-times' : 'fas fa-bars'"></i>
              </div>
              <!-- ------------ -->
              <!-- Header main -->
              <HeaderNav
                v-if="!mobileView"
                :class="{ 'navbar-background': !mobileView }"
              />
            </div>
            <!-- ------------- -->
            <!-- All components -->
            <div>
              <div id="section1">
                <div class="wrapper">
                  <div
                    class="container-home"
                    :class="{
                      dark: mode === 'dark',
                      'hide-background': mode === 'dark',
                    }"
                  >
                    <div class="sub-home">
                      <img
                        v-bind:class="['image']"
                        :src="imagePath"
                        alt="My Image"
                      />
                      <div class="infos-home">
                        <h1 class="title-name fade">Louisa Ohs</h1>
                        <p class="title-work">Web developer</p>
                      </div>
                    </div>
                    <!-- Particles -->
                    <div class="particles">
                      <vue-particles
                        color="#dedede"
                        :particleOpacity="0.7"
                        :particlesNumber="80"
                        shapeType="circle"
                        :particleSize="4"
                        linesColor="#dedede"
                        :linesWidth="1"
                        :lineLinked="true"
                        :lineOpacity="0.4"
                        :linesDistance="150"
                        :moveSpeed="2"
                        :hoverEffect="true"
                        hoverMode="grab"
                        :clickEffect="true"
                        clickMode="push"
                      >
                      </vue-particles>
                    </div>
                  </div>
                </div>
                <div class="button-da">
                  <button
                    @click="toggleDarkMode"
                    class="custom-button-mode"
                    :class="{ dark: mode === 'dark' }"
                  >
                    {{ mode === "dark" ? "Light" : "Dark" }}
                    <div class="icons-center">
                      <font-awesome-icon
                        :icon="mode === 'dark' ? 'sun' : 'moon'"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div>
              <div id="section2">
                <AboutMe />
              </div>
            </div>

            <div>
              <div id="section3">
                <AllSkills />
              </div>
            </div>

            <div>
              <div id="section4">
                <AllProjects />
              </div>
            </div>

           
            <div>
              <div id="section5">
                <ContactMe />
              </div>
            </div>

            <footer :class="{ dark: mode === 'dark' }">
              <div class="footer-app">
                © 2023 Developed, designed by <span class="color-name">Louisa</span> | Tous droits réservés.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageLoader from "@/components/PageLoader.vue";
import HeaderNav from "@/components/HeaderNav.vue";
import AboutMe from "@/components/AboutMe.vue";
import AllSkills from "@/components/AllSkills.vue";
import AllProjects from "@/components/AllProjects.vue";
import ContactMe from "@/components/ContactMe.vue";
import NavMobile from "@/components/NavMobile.vue";
import myImage from "@/assets/images/louisa.png";

export default {
  components: {
    PageLoader,
    HeaderNav,
    NavMobile,
    AboutMe,
    AllSkills,
    AllProjects,
    ContactMe
  },

  data() {
    return {
      mode: "dark",
      mobileView: true,
      showNav: false,
      bodyOverflow: "",
      isIconCross: false,
      showButton: true,
      isLoading: true,
      imagePath: myImage,
      stars: [],
    };
  },

  methods: {
    clickIcons() {
      this.showNav = !this.showNav;
      this.toggleOverflow();
      this.isIconCross = !this.isIconCross;
    },

    toggleOverflow() {
      document.body.classList.toggle("overflow-hidden");
    },

    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },

    toggleDarkMode() {
      this.mode = this.mode === "dark" ? "light" : "dark";

      const container = document.querySelector(".container-home");
      container.style.background = this.mode === "dark" ? "#0a0616" : "#93c08c";

      localStorage.setItem("mode", this.mode);
    },

    loadDarkMode() {
      const savedMode = localStorage.getItem("mode");
      if (savedMode === "dark" || savedMode === "light") {
        this.mode = savedMode;
      }
    },
  },

  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    this.loadDarkMode();

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

.particles {
  position: absolute;
  top: 120px;
  height: 60vh;
}

#particles-js {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #abcea6;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  overflow-y: scroll;
  cursor: url(http://24.media.tumblr.com/tumblr_mdig6jktic1riysloo1_100.png),
    progress !important;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dce3d4;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #93c08c;
  border-radius: 15px;
}

// ------------------
.fade-in {
  opacity: 0;
  animation: fade-in-animation 1s ease-in forwards;
}

@keyframes fade-in-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

// very important this
.overflow-hidden {
  overflow: hidden;
}

// ------------------

#navigation-icon {
  padding: 20px 20px 20px;
  margin-right: 10px;
  cursor: pointer;
  color: #dce3d4;

  i {
    font-size: 2rem;
  }
}

.image {
  position: relative;
  animation: moveImage 9s linear infinite;
}

@keyframes moveImage {
  0% {
    transform: translateY(-10%);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-10%);
  }
}

.button-da {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.content {
  position: absolute;
  top: 0px;
  width: 100%;
  background: linear-gradient(to right, #f2f2f2, #cbcbcb);
  background-size: 100% 200%;
  transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.open {
  transform: translateX(300px);
}

// mode dark

.dark {
  background: linear-gradient(to right, #0a0616, #222222);
  background-size: 100% 200%;
  color: white;
}

.icons-center {
  display: flex;
  justify-content: center;
}

// home page
.container-home {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background-color: #93c08c;
}

.infos-home {
  text-align: center;
}

.sub-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-name {
  font-size: 20px;
  letter-spacing: 2px;
  color: #dce3d4;
}

.title-work {
  color: #dce3d4;
  margin-bottom: 30px;
  font-family: "Nanum Myeongjo", sans-serif;
  font-style: italic;
}

.section-all-buttons {
  display: flex;
  justify-content: center;
}

.hide-background {
  background-color: transparent;
}

button.dark {
  background-color: #1a1a1a;
  color: #dedede;
}

.the-line-from-button {
  margin: 10px;
}

.custom-button-mode {
  background-color: #ced5cd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s ease;
  animation: button-design-formbounce 4s infinite;
}

@keyframes button-design-formbounce {
  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
}

.custom-button-mode:hover {
  background-color: #7aa77d;
}

footer {
  display: flex;
  justify-content: center;
  color: white;
  background-color: #93c08c;
}

.color-name {
  color: #abcea6;
}

.footer-app {
  margin-top: 45px;
  height: 60px;
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.star {
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none;
}

.animate-star {
  animation: starAnimation 3s linear infinite;
}

@keyframes starAnimation {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translateY(100vh) rotate(360deg);
  }
}
</style>
