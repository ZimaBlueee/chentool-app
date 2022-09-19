import myAxios from "../../../plugins/myAxios";

/**
 * 搜索网盘链接
 * @param word
 */
export const queryVideoByWord = async (word: string) => {
  if (!word) {
    return null;
  }
  return await myAxios.get("/pan/panSearchByWord", { params: { word } });
};
