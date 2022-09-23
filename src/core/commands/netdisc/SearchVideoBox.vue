<template>
  <div>
    <a-list
      size="small"
      :split="false"
      :data-source="panList"
      :loading="flag"
      :locale="local"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta>
            <template #avatar>
              <span style="color: #45b787">done</span>
            </template>
            <template #title>
              <span style="color: #fb9968">{{ item.question }}</span>
            </template>
            <template #description>
              <span
                style="color: #b598a1; word-wrap: break-word"
                v-html="smartText(item.answer)"
              ></span>
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
      <template v-if="errorHint === ''" #header>
        <div style="color: #ef475d">
          [{{ word }}]的搜索结果(点击链接可直接跳转)
        </div>
      </template>
      <!--<template #footer>-->
      <!--  <div style="color: #f7cfba">到底啦TvT</div>-->
      <!--</template>-->
    </a-list>

    <div v-if="errorHint">
      <span style="color: #ef475d">{{ errorHint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { queryVideoByWord } from "./searchVideoApi";
import smartText from "../../../utils/smartText";

interface SearchVideoBoxProps {
  word: string;
  local: { emptyText: "暂无数据" };
}

const props = withDefaults(defineProps<SearchVideoBoxProps>(), {});
const { word } = toRefs(props);
const errorHint = ref("");
const panList = ref([] as any[]);
const flag = ref(false);

onMounted(async () => {
  flag.value = true;
  // 搜索视频，返回list
  const res: any = await queryVideoByWord(word.value);
  console.log(res);
  if (res?.code === "200") {
    panList.value = res.data;
    // console.log(panList);
  } else {
    errorHint.value = res.msg;
  }

  if (res.data.length === 0) {
    errorHint.value = "暂无该云盘资源";
  }
  flag.value = false;
});
</script>

<style scoped></style>
