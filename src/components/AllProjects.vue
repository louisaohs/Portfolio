<template>
  <div class="wrapper">
    <div
      class="container-cards-projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 class="title-projects">Projets web</h2>
      <h3 class="title-sub-projects">
        <font-awesome-icon icon="diagram-project" class="icons" />Web projects *
      </h3>
      <p class="describe-image">
        (*) Cliquer sur l'image pour lire la description du project.
      </p>
      <div class="sub-cards-projects">
        <div class="col-1">
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="cards-projects">
              <a href="https://www.zupimages.net/up/23/23/lkzw.jpg">
                <img
                  class="image-size"
                  src="~@/assets/images/piephp.png"
                  alt="My Image"
                />
              </a>
            </div>
          </div>
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="cards-projects">
              <a href="https://www.zupimages.net/up/23/23/j4z4.jpg">
                <img
                  class="image-size"
                  src="~@/assets/images/tripads.png"
                  alt="My Image"
                />
              </a>
            </div>
          </div>
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="cards-projects">
              <a href="https://www.zupimages.net/up/23/23/glds.jpg">
                <img
                  class="image-size"
                  src="~@/assets/images/netflix.png"
                  alt="My Image"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="col-2">
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="cards-projects">
              <a href="https://www.zupimages.net/up/23/23/03tz.jpg">
                <img
                  class="image-size"
                  src="~@/assets/images/my_quizz.png"
                  alt="My Image"
                />
              </a>
            </div>
          </div>
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="cards-projects">
              <a href="https://www.zupimages.net/up/23/23/6xpg.jpg">
                <img
                  class="image-size"
                  src="~@/assets/images/my_spotify.png"
                  alt="My Image"
              /></a>
            </div>
          </div>
          <div
            class="line-projects-all"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="infos-projects">More projects will come...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "AllProjects",

  mounted() {
    AOS.init();
  },
};
</script>
<style scoped>
.line-projects-all {
  margin: 20px;
}

.container-cards-projects {
  width: 60%;
  margin: 1rem;
  color: rgb(179, 179, 179);
}

.sub-cards-projects {
  display: flex;
  justify-content: space-between;
}

.cards-projects {
  width: 500px;
  height: 285px;
  box-shadow: 0 0 10px #aaa;
  background-color: #fff transparent;
}

.describe-image {
  font-size: 10px;
}

.title-projects {
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

.title-sub-projects {
  font-family: "Nanum Myeongjo", sans-serif;
  font-style: italic;
  letter-spacing: 10px;
}

.infos-projects {
  font-family: "Nanum Myeongjo", sans-serif;
  font-style: italic;
  letter-spacing: 2px;
}
</style>
