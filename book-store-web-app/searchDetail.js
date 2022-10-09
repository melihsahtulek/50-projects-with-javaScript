window.addEventListener("load", () => {
  const init = () => {
    let page = 1;
    let maxPage = null;
    const center = document.querySelector(".center");
    const getSearchResult = async (url) => {
      try {
        let response = await fetch(url);
        let json = await response.json();
        maxPage = Math.round(parseInt(json.total) / parseInt(json.books.length));

        if (page <= maxPage) {
          writeResult(json);
        } else {
          if (json.page > 1) {
            document.querySelector("#getNextPage").style.display = "none";
          } else {
            center.innerHTML = '<div class="err_404"> </div>';
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    getSearchResult(
      `https://api.itbook.store/1.0/search/${new URLSearchParams(window.location.search).get("q")}/${page}`
    );

    const writeResult = (data) => {
      Array.from(data.books).forEach((book) => {
        center.innerHTML += `
            <div class="card">
              <div class="item">
                <div class="image">
                  <img src=${book.image} alt=${book.title} />
                </div>
                <div class="title">
                  <h5>${book.title}</h5>
                </div>
                <div class="price">
                  <h5>${book.price}</h5>
                </div>
                <div class="buttons">
                  <a href=book.html?id=${book.isbn13}>
                    <span class="material-icons">visibility</span>
                  </a>
                  <a data-id=${book.isbn13} class="wlistBtn" href="javascript:void(0)">
                    <span class="material-icons">favorite_border</span>
                  </a>
                </div>
              </div>
            </div>
          `;
      });

      const getNextPage = document.querySelector("#getNextPage");
      getNextPage.style.display = "flex";
      getNextPage.addEventListener("click", () => {
        page += 1;
        getSearchResult(
          `https://api.itbook.store/1.0/search/${new URLSearchParams(window.location.search).get("q")}/${page}`
        );
      });

      if (!localStorage.getItem("myWishList")) {
        localStorage.setItem("myWishList", JSON.stringify([]));
      }

      const wlistBtn = document.querySelectorAll(".wlistBtn");

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
    };

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
  };

  init();
});
