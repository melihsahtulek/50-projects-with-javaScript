window.addEventListener("load", () => {
  const init = async () => {
    try {
      let response = await fetch(
        `https://api.itbook.store/1.0/books/${new URLSearchParams(window.location.search).get("id")}`
      );
      let json = await response.json();

      const detailContainer = document.querySelector(".detailContainer");

      const getPdfLinks = () => {
        let result = "";
        if (json.pdf) {
          for (const key in json.pdf) {
            result += `<a href=${json.pdf[key]}><span class="material-icons">picture_as_pdf</span>${key}</a>`;
          }
        } else {
          result = "";
        }

        return result;
      };

      const getListAndInfo = () => {
        return `
          <li><span>name</span><span>${json.title}</span></li>
          <li><span>authors</span><span>${json.authors}</span></li>
          <li><span>publisher</span><span>${json.publisher}</span></li>
          <li><span>language</span><span>${json.language}</span></li>
          <li><span>pages</span><span>${json.pages}</span></li>
          <li><span>year</span><span>${json.year}</span></li>
          
        `;
      };

      const getStars = () => {
        let result = "";
        for (let i = 0; i < json.rating; i++) {
          result += `<span class="material-icons">star</span>`;
        }

        return result;
      };

      detailContainer.innerHTML = `

      <div class="detailLeft">
        <div class="detailLeftImage">
          <img src=${json.image} alt="..." />
        </div>
        <div class="info">
          <h3>${json.title}</h3>
          <h4>${json.subtitle}</h4>
          <h4>${json.price}</h4>
          <div class="buttons">
            <a class="wlistBtn" data-id=${json.isbn13} href="javascript:void(0)">
              <span class="material-icons">favorite_border</span>
            </a>
          </div>
          <div class="pdfLinks">            
            ${getPdfLinks()}
          </div>
        </div>
        </div>
        <div class="detailRight">
          <div class="stars">
            ${getStars()}
          </div>
          <ul>
            ${getListAndInfo()}
          </ul>

          <p>
            ${json.desc}
          </p>
      </div>
        
      `;

      const wlistBtn = document.querySelectorAll(".wlistBtn");

      if (!localStorage.getItem("myWishList")) {
        localStorage.setItem("myWishList", JSON.stringify([]));
      }

      Array.from(wlistBtn).forEach((btn) => {
        btn.addEventListener("click", async (e) => {
          let id = btn.getAttribute("data-id");
          let response = await fetch(`https://api.itbook.store/1.0/books/${id}`);
          let { title, image, isbn13 } = await response.json();

          let lc = JSON.parse(localStorage.getItem("myWishList"));
          let hasElem = false;

          if (lc.length == 0) {
            lc.push({
              id: isbn13,
              title: title,
              image: image,
            });
            localStorage.setItem("myWishList", JSON.stringify(lc));
          }

          lc.forEach((elem) => {
            if (elem.id == isbn13) {
              hasElem = true;
              return false;
            }
          });

          if (!hasElem) {
            lc.push({
              id: isbn13,
              title: title,
              image: image,
            });
            localStorage.setItem("myWishList", JSON.stringify(lc));
          }

          updateWishList();
          wItemRemove();
        });
      });

      const updateWishList = () => {
        const wishListItemContainer = document.querySelector(".wishListItemContainer");
        wishListItemContainer.innerHTML = null;
        let lc = JSON.parse(localStorage.getItem("myWishList"));
        lc.forEach((elem) => {
          wishListItemContainer.innerHTML += `
              <div class="wItem">
                <div class="wItemImage">
                  <img src=${elem.image} />
                </div>
                <div class="wItemTitle">
                  <h3><a href=book.html?id=${elem.id} style="color:inherit">${elem.title}</a></h3>
                </div>
                <div class="wItemRemove" data-id=${elem.id}>
                  <span class="material-icons">delete</span>
                </div>
              </div>            
          `;
        });
        wItemRemove();
      };

      const wItemRemove = () => {
        const rBtns = document.querySelectorAll(".wItemRemove");
        let lc = JSON.parse(localStorage.getItem("myWishList"));

        Array.from(rBtns).forEach((btn) => {
          btn.addEventListener("click", () => {
            // btn.getAttribute("data-id")
            lc.forEach((lcElem, index) => {
              if (lcElem.id == btn.getAttribute("data-id")) {
                lc.splice(index, 1);
                localStorage.setItem("myWishList", JSON.stringify(lc));
                updateWishList();
              } else {
              }
            });
          });
        });
      };

      updateWishList();
      wItemRemove();

      const wishListIcon = document.querySelector(".wishListIcon");
      const wishListSide = document.querySelector("#wishListSide");
      const closeTheWishList = document.querySelector(".closeTheWishList");

      wishListIcon.addEventListener("click", () => {
        wishListSide.style.transform = "translateX(0)";
        wishListSide.style.transition = "all 1s";
      });

      closeTheWishList.addEventListener("click", () => {
        wishListSide.style.transform = "translateX(100%)";
        wishListSide.style.transition = "all 1s";
      });

      const mobileBackBtn = document.querySelector(".mobileBackBtn");
      mobileBackBtn.addEventListener("click", () => {
        window.history.back();
      });
    } catch (error) {
      error && console.error("error...:", error);
      window.location.href = "http://127.0.0.1:5500/book-store-app/";
    }
  };

  init();
});
