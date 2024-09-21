"use strict";

let repeatedHtml = "";
for (let i = 1; i <= 8; i++) {
  repeatedHtml += `
          <div
            class="clothes-card col-md-6 y-sm-6 col-lg-4 col-sm-6 col-6 col-xl-3"
          >
            <div class="collection-image">
              <img
                class="w-100"
                src="assets/images/c_${i.toString()}.png"
                alt=""
              />
              <span class="sale">Sale</span>
            </div>
            <div class="rating">
              <div>
                <!-- Star rating -->
                <span class=""><i class="fa-solid fa-star str"></i></span>
                <span class=""><i class="fa-solid fa-star str"></i></span>
                <span class=""><i class="fa-solid fa-star str"></i></span>
                <span class=""><i class="fa-solid fa-star str"></i></span>
                <span class=""><i class="fa-solid fa-star str"></i></span>
              </div>
              <!-- Price -->
              <span class=""><span>$</span>45.50</span>
            </div>
            <!-- Item description -->
            <p>Gray Shirt</p>
          </div>
          `;
}

document.getElementById("collections").innerHTML = repeatedHtml;
