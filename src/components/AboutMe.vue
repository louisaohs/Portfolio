<template>
  <div class="wrapper">
    <div class="container-cards" data-aos="fade-up" data-aos-duration="1000">
      <h2 class="title-about">À propos de moi</h2>
      <h4 class="title-sub-about"><font-awesome-icon icon="address-book" class="icons" />About me</h4>
      <div class="sub-cards">
        <div class="cards" data-aos="fade-up" data-aos-duration="1000">
          <div class="sub-cards-bg">
            <p class="title-cards-about">Me présenter ?</p>
            <p class="text-cards-about-1">
               <span style="display: block; margin-bottom: 12px;">Hello ! Je m'appelle Louisa.</span><span style="display: block; margin-bottom: 12px;">Je suis en formation dans le développement web, ce que j'aime dans mon métier c'est <span class="highlight">la riche particularité</span> des applications que l'on peut créer, répondre au besoin d'un client, l'aider à définir son projet, trouver des idées et des solutions.</span> Pour moi, un site est composé de différents concepts (inscription/connexion, formulaire...) construits avec des composants (langages, framework CSS, librairies...) : chercher de nouvelles ressources et les expérimenter, est ce qui m'enrichit le plus !<br /><br/>
            </p>
          </div>
        </div>
        <div class="cards" data-aos="fade-up" data-aos-duration="1000">
          <div class="sub-cards-bg">
            <h3 class="title-cards-about">Mes stacks ?</h3>
            <p class="text-cards-about">
            <span class="display: block;">Tout varie.</span> Dans le cadre de ma formation, je développe sur tout type de technologies (front-end et back-end), j'ai appris ainsi à m'adapter à toute situation.<span style="display: block; margin-bottom: 12px;">Mes préférences sont : <span class="highlight">React</span>, <span class="highlight">la stack MERN</span>, et <span class="highlight">VueJS</span>.</span><span style="display: block; margin-bottom: 10px;">Ce qui me plait le plus dans cet apprentissage au cours de ces dix mois intensifs a été : toujours apprendre de nouvelles technologies, s'adapter aux différents langages car comme nous le savons, le dev évolue perpétuellement.</span><span style="display: block;">Ce porfolio a été développé en <span class="highlight">VueJS</span>, j'ai moi-même confectionné avec de nombreuses recherches le design de celui-ci en m'adaptant avec du CSS et des librairies.</span>
            </p>
          </div>
        </div>
        <div class="cards" data-aos="fade-up" data-aos-duration="1000">
          <div class="sub-cards-bg">
            <h3 class="title-cards-about">"Devohs", c'est quoi ?</h3>
            <p class="text-cards-about-2">
              Vous êtes perdu dans la jungle des prestataires qui développent des sites ? Vous n'avez pas envie d'être un client de plus dans un portefeuille ?<br/> C'est un site pour vous.<br/> Je vous propose un espace dédié à vous pour vous parler de vos besoins, trouver une solution ensemble.<br/> Suivre votre projet jusqu'à la livraison : <span class="highlight">un compte client</span>, <span class="highlight">un formulaire de contact</span>, <span class="highlight">un point de rencontre visio</span>, <span class="highlight">le devis</span>, <span class="highlight">les compte-rendus de nos échanges</span>, <span class="highlight">le cahier des charges</span>, <span class="highlight">le planning</span>, <span class="highlight">les factures</span>... tout ce qui concerne votre besoin, vos envies et votre projet. Devohs est bientôt en production ! 
            </p>
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
  name: "AboutMe",
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>

.highlight {
  font-weight: bold;
  color: #cce6c8;
}

.container-cards {
  width: 60%;
  margin: 1rem;
  color: rgb(179, 179, 179);
}

.title-cards-about {
  text-align: center;
  font-weight: bold;
  text-shadow: 0 0 10px #ffffff;
}

.title-sub-about {
  font-family: "Nanum Myeongjo", sans-serif;
  font-style: italic;
  letter-spacing: 10px;
}

.text-cards-about {
  text-align: justify;
}

.sub-cards-bg {
  padding: 1rem;
  border-radius: 10px;
  background-color: #93c08c;
  color: white;
}

.sub-cards {
  display: flex;
  justify-content: space-between;
  margin: 2px;
}

.cards {
  width: 300px;
  height: 676px;
  box-shadow: 0 0 10px #aaa;
  background-color: #fff transparent;
  padding: 10px;
  margin: 20px;
  opacity: 0;
  transform: translateY(100px);
  transition-property: opacity, transform;
  transition-duration: 0.8s;
}

.title-about {
  font-weight: bold;
  text-transform: uppercase;
  color: #93c08c;
  letter-spacing: 3px;
  text-decoration: underline;
  text-decoration-color: #dce3d4;
  animation: underlineAnimation 2s infinite;
}

.bold {
  font-weight: bold;
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

.cards:hover {
  transform: translateY(9px);
}

.title-name {
  text-align: center;
}

.text-cards-about {
   font-size: 16px;
}

.text-cards-about-1 {
  height: 552px;
  font-size: 16px;
  text-align: justify;
}

.text-cards-about-2 {
  height: 552px;
  font-size: 16px;
  text-align: justify;
}

.infos-text {
  text-align: justify;
}
</style>
