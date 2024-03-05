<template>
  <h1 class="text-2xl px-2">商品列表</h1>
  <div class="listcontroller flex justify-end">
    <button class="p-2 rounded-lg">
      <img src="../assets/image/瀑布off.png" alt="Description" class="h-6 w-6" />
    </button>
    <button class="p-2 rounded-lg">
      <img src="../assets/image/條列on.png" alt="Description" class="h-6 w-6" />
    </button>
  </div>
  <div class="grid-thead">
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">商品圖片</div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">商品描述</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th opacity-0">操作</div>
    </div>
  </div>
  <div class="grid-thead">
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">商品描述</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th opacity-0">操作</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
