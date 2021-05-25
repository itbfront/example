<template>
    <footer class="footer">
        <div class="container-local">
          <div class="wrapper">
              <PartialsSubscribe/>
              <PartialsFooterBlocks/>
              <p class="copyright">
                Copyright © 2021 {{appName}} All rights reserved.
              </p>
          </div>
        </div>
    </footer>
</template>

<script>
import {APP_NAME} from "@/config/config"

  export default {
    name: "Footer",
    computed:{
      appName: () => {
        return APP_NAME
      }
    }
  }
</script>

<style scoped>

</style>
