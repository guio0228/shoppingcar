<script>
export default {};
</script>

<template>
  <div class="list">
    <h1 class="text-2xl px-2">商品列表</h1>
    <div class="listcontroller flex justify-end">
      <button class="p-2 rounded-lg">
        <img src="../assets/image/瀑布off.png" alt="Description" class="h-6 w-6" />
      </button>
      <button class="p-2 rounded-lg">
        <img src="../assets/image/條列off.png" alt="Description" class="h-6 w-6" />
      </button>
    </div>
    <div class="px-4 flex gap-4 flex-wrap">
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="listcontent w-1/6 border-[1px] rounded-lg flex flex-col">
        <img src="../assets/image/假圖.png" alt="Description" class="h-48 rounded-t-lg w-full" />
        <div class="listitem gap-3 px-2 h-[250px] bg-opacity-30 pl-3 flex flex-col pt-3">
          <div class="listtext">
            <h1 class="text-xl px-2">商品名稱:Bytecard</h1>
            <p class="text-sm px-2">商品描述:Immunization not carried out because of caregiver refusal</p>
            <p class="text-sm px-2">商品價格:954</p>
          </div>
          <div class="buy">
            <div class="flex items-center gap-2">
              <span>數量:</span>
              <div class="flex items-center border border-main-grey rounded-full overflow-hidden">
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">-</button>
                <input type="number" min="1" class="w-12 border-0 text-center" value="1" />
                <button class="w-8 h-8 flex justify-center items-center bg-gray-200 text-xl cursor-pointer">+</button>
              </div>
            </div>
          </div>
          <div class="addToCar">
            <button class="p-2 rounded-lg flex bg-blue-600">
              <h3>加入購物車</h3>
              <i class="fa-solid fa-cart-shopping px-6 py-1 flex"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
