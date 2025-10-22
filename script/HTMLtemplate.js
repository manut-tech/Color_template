let colorsHTML = "";
colors.forEach((item, index) => {
  colorsHTML += `
    <div class="grid-container    js-grid-container mx-auto max-w-md overflow-hidden md:max-w-2xl ">
        <div class="wrapper">
          <div class="wrapper-color-templates text-center  flex "> 
            <div class="color-views  js-icon-checked   w-[60px]   h-[120px] js-copy-color-code" style="background-color: #${item.color[0]}">${item.color[0]}</div>
            <div class="color-views  js-icon-checked   w-[60px]   h-[120px] js-copy-color-code" style="background-color: #${item.color[1]}">${item.color[1]}</div>
            <div class="color-views  js-icon-checked   w-[60px]   h-[120px] js-copy-color-code" style="background-color: #${item.color[2]}">${item.color[2]}</div>
            <div class="color-views  js-icon-checked   w-[60px]   h-[120px] js-copy-color-code" style="background-color: #${item.color[3]}">${item.color[3]}</div>
          </div>
        </div>
    </div>
  `;
});
document.querySelector(".js-grid-container").innerHTML = colorsHTML;
