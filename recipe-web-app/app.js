window.addEventListener("load", () => init());

const init = () => {
  let noResult = false;
  const searchResultContainer = document.getElementsByClassName("searchResult");
  const searchFoodID = document.getElementById("searchFoodID");
  const searchBtn = document.getElementById("searchBtn");
  searchFoodID.addEventListener("keyup", (e) => {
    if (e.target.value.length > 0) {
      searchResult(e.target.value);
      searchResultContainer[0].style.display = "block";
      noResult = false;
    } else {
      noResult = true;
      writeResultList();
      searchResultContainer[0].style.display = "none";
    }
  });

  searchBtn.addEventListener("click", () => {
    searchResult(searchFoodID.value);
  });

  const searchResult = async (val) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`);
    let { meals } = await response.json();

    if (meals) {
      writeResultList(meals);
      noResult = false;
    } else {
      noResult = true;
      writeResultList(meals);
    }
  };

  const ul = document.createElement("ul");
  const writeResultList = (meals) => {
    ul.innerHTML = null;
    if (noResult) {
      ul.innerText = "no result found...";
    } else {
      meals.forEach((meal) => {
        ul.innerHTML += `
          <li data-id=${meal.idMeal}>${meal.strMeal}</li>
        `;
      });
    }
    searchResultContainer[0].appendChild(ul);

    if (ul.children.length > 0) {
      Array.from(ul.children).forEach((li) => {
        li.addEventListener("click", (e) => {
          getFoodWithId(e.target.getAttribute("data-id"));
          ul.innerHTML = null;
          searchResultContainer[0].style.display = "none";
        });
      });
    }
  };

  const randBtn = document.getElementById("randBtn");
  randBtn.addEventListener("click", () => getRandomFood());

  const getRandomFood = async () => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    let { meals } = await response.json();
    writeResult(meals[0]);
  };

  const getFoodWithId = async (selectedId) => {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedId}`);
    let { meals } = await response.json();
    writeResult(meals[0]);
  };

  const writeResult = (result) => {
    const resultContainer = document.getElementById("result");
    result.innerHTML = null;
    if (result) {
      resultContainer.style.display = "flex";
      const writeTags = () => {
        const tagsDiv = document.createElement("div");
        tagsDiv.setAttribute("class", "tags");
        if (result.strTags !== null) {
          result.strTags.split(",").forEach((tag) => {
            tagsDiv.innerHTML += `
              <a href="javascript:void(0)">${tag}</a>
            `;
          });
          return tagsDiv;
        }
      };

      const ingredients = () => {
        let arr_1 = [];
        let arr_2 = [];
        const ul = document.createElement("ul");

        Array.from(Object.keys(result)).forEach((k) => {
          if (k.includes("strIngredient")) {
            if (result[k].trim().length > 0 && result[k] !== null) {
              arr_1.push(result[k]);
            }
          }
        });

        Array.from(Object.keys(result)).forEach((k) => {
          if (k.includes("strMeasure")) {
            if (result[k].trim().length > 0 && result[k] !== null) {
              arr_2.push(result[k]);
            }
          }
        });

        for (let i = 0; i < arr_1.length; i++) {
          ul.innerHTML += `
           <li>${arr_1[i]} <b>${arr_2[i]}</b></li>
          `;
        }

        return ul;
      };

      const instructions = () => {
        return result.strInstructions.replace(/(?:\r\n|\r|\n)/g, "<br>");
      };

      resultContainer.innerHTML = `
          <div class="center">
            <div class="resultLeft">
              <img src=${result.strMealThumb} alt=${result.strMeal} />
              <h3>${result.strMeal}</h3>
              <h6>${result.strCategory}</h6>
              ${writeTags()?.outerHTML}
            </div>
            <div class="resultRight">
              <h3>Ingredients</h3>
              ${ingredients().outerHTML}
              
              <h3>Instructions</h3>
              <p>
                ${instructions()}
              </p>

              <div class="yt">
                <iframe
                  width="100%"
                  height="350"
                  src=https://www.youtube.com/embed/${result.strYoutube.split("=")[1]}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
        </div>
      `;

      window.scrollTo({ top: document.getElementsByTagName("header")[0].clientHeight, behavior: "smooth" });
    }
  };
};
