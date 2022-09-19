<template>
  <div>关于本站：chentool 让你眼前一亮的浏览器主页</div>
  <div>
    <a href="https://github.com/ZimaBlue1995/chentool-app.git" target="_blank">
      代码开源，欢迎 star 和贡献~
    </a>
  </div>
  <div></div>
  <div>
    作者：
    <a href="https://github.com/ZimaBlue1995" target="_blank">
      齐马的作品
    </a>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
