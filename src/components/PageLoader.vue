<template>
  <div class="wrapper">
    <div class="container">
      <div class="infos-loading">
        <p class="animate-fade">Ohs will soon become</p>
        <p class="name-soon">Devohs</p>
        <p class="animate-fade">You will be redirected</p>
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
}

.infos-loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 0.5vh;
}

.name-soon {
  font-size: 20px;
  color: #222222;
  letter-spacing: 2px;
  font-weight: bold;
}

p {
  font-weight: bold;
  text-transform: uppercase;
  font: 10px "Poppins", sadministration etrangerans-serif;
  color: white;
  letter-spacing: 2px;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade {
  animation: fade-in 1s ease-in;
}

@keyframes loading {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.loader {
  width: 100%;
  height: 10px;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
}

.loader::after {
  content: "";
  display: block;
  width: 0;
  height: 100%;
  background-color: #ced5cd;
  position: absolute;
  animation: loading 2s linear infinite;
}
</style>
