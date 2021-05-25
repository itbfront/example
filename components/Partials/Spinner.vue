<template>
  <div class="spinner" :class="addClass">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>
</template>

<script>
export default {
name: "Spinner",
  props: {
    addClass: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.spinner {
  margin: 100px auto 0;
  width: 70px;
  text-align: center;
  &.dashboard{
    margin: 80px auto;
  }
  &.search{
    width: 100%;
    position: absolute;
    margin: 0 auto;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -50%);
    @media all and (max-width: 1024px) {
        top: 10%;
    }
  }
  &.disabled{
    margin: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    &.disabled-green > div{
      background-color: #2A8740;
    }
    > div{
      background-color: #C4C4C4;
    }
  }
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #2A8740;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
}
</style>
