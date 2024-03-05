<template>
  <h1 class="text-2xl px-2">購買確認及填寫資訊</h1>
  <div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">商品圖片</div>
      <div class="gird-th">商品名稱</div>
      <div class="gird-th text-center">價錢</div>
      <div class="gird-th text-center">數量</div>
    </div>
  </div>
  <div>
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th text-center">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
      </div>
      <div class="gird-th">name</div>
      <div class="gird-th text-center">price</div>
      <div class="gird-th text-center">數量</div>
    </div>
  </div>
  <div class="infor">
    <form action="http://localhost:5174/final">
      <label for="name" class="block h3">姓名</label>
      <input
        type="text"
        id="name"
        class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
      />

      <label for="phone" class="block h3">電話</label>
      <input
        type="text"
        id="phone"
        class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
      />
      <label for="phone" class="block h3">地址</label>
      <input
        type="text"
        id="address"
        class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
      />
      <div class="h3">電子信箱</div>
      <input type="email" class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800" />
      <div class="h3">付款方式</div>
      <div class="flex items-center mb-4">
        <input type="radio" id="credit_card" name="payment" value="credit_card" class="mr-2" />
        <label for="credit_card" class="mr-4">信用卡</label>

        <input type="radio" id="bank_transfer" name="payment" value="bank_transfer" class="mr-2" />
        <label for="bank_transfer">貨到付款</label>
      </div>

      <div class="h3">運送方式</div>
      <div class="flex items-center mb-4">
        <input type="radio" id="home_delivery" name="delivery" value="home_delivery" class="mr-2" />
        <label for="home_delivery" class="mr-4">宅配</label>

        <input type="radio" id="convenience_store_pickup" name="delivery" value="convenience_store_pickup" class="mr-2" />
        <label for="convenience_store_pickup">超商取貨</label>
      </div>
      <div class="flex items-end flex-col">
        <div>商品數量:132</div>
        <div>商品金額:123</div>
      </div>
      <div class="flex justify-between px-2">
        <button class="bg-red-600"><RouterLink to="/shoopingcar" class="px-2"> 回上頁繼續加購</RouterLink></button>
        <button class="bg-blue-600"><RouterLink to="/final" class="px-2">確定送出</RouterLink></button>
        <button type=" submit" class="bg-blue-600">確定送出2</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
