window.addEventListener("load", () => {
  const container = document.querySelector("#container");
  const createNewNoteBtn = document.querySelector(".create-new-note-btn");

  const init = () => {
    console.log("INIT");
    if (checkLsSupport()) {
      if (localStorage.getItem("notes") === null) {
        localStorage.setItem("notes", JSON.stringify([]));
      } else {
        getNotesFromLs().length !== 0 && writeNotesToHtml(getNotesFromLs());
      }
    }
  };

  const createNewNote = () => {
    console.log("CREATE NEW NOTE");
    let id = generatePrimaryKey();
    addNewNoteToLs(id);
  };

  const generatePrimaryKey = () => {
    console.log("GENERATE PRIMARY KEY");
    const data = getNotesFromLs();
    let id = 0;
    if (data.length === 0) {
      id = 1;
    } else {
      let newIndex = data.length + 1;
      let filtered = data.findIndex((note) => note.id === newIndex);
      while (filtered >= 0) {
        newIndex++;
        filtered = data.findIndex((note) => note.id === newIndex);
      }
      id = newIndex;
    }

    return id;
  };

  const addNewNoteToLs = (id) => {
    console.log("ADD NEW NOTE TO LOCALSTORAGE");
    const data = getNotesFromLs();
    data.push({
      id: id,
      title: "Unnamed Note",
      note: "<b>selam</b>Your note... " + id + "",
    });

    localStorage.setItem("notes", JSON.stringify(data));
    writeNotesToHtml(data);
  };

  const checkLsSupport = () => {
    console.log("CHECK LOCALSTORAGE SUPPORT");
    if (typeof localStorage !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const writeNotesToHtml = (data) => {
    console.log("WRITE NOTES TO HTML");
    container.innerHTML = null;
    for (const note of data) {
      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="note">
            <div class="header">
              <input type="text" name="note_title" placeholder="note title" value=${note.title} data-id=${note.id} />
              <button type="button" data-id=${note.id}>
                <i class='bx bx-italic'></i>
              </button>
              <button type="button" data-id=${note.id}>
                <i class='bx bx-bold'></i>
              </button>
              <button type="button" data-id=${note.id}>
                <i class="bx bx-edit"></i>
              </button>
              <button type="button" data-id=${note.id} name="save_btn">
                <i class='bx bxs-save'></i>
              </button>
              <button type="button" data-id=${note.id} name="remove_btn">
                <i class="bx bx-trash"></i>
              </button>
            </div>
            <textarea name="note_textarea" data-id=${note.id}>
              ${note.note}
            </textarea>
          </div>
        `
      );
    }
    removeWhiteSpaceIndents();
    initButtonEvents();
  };

  const removeWhiteSpaceIndents = () => {
    document.querySelectorAll("textarea").forEach((element) => {
      element.value = element.value.replace(/\s{2,}/gi, "");
    });
  };

  const getNotesFromLs = () => {
    console.log("GET NOTES FROM LOCALSTORAGE");
    return JSON.parse(localStorage.getItem("notes"));
  };

  const removeNoteFromLs = (id) => {
    console.log("REMOVE NOTE FROM LOCALSTORAGE");
    console.log(id);
  };

  /* BUTTON EVENTS */

  const initButtonEvents = () => {
    console.log("ready!");
    const removeBtns = document.querySelectorAll("[name=remove_btn]");
    const saveBtns = document.querySelectorAll("[name=save_btn]");

    for (const btn of removeBtns) {
      btn.addEventListener("click", () => removeNoteFromLs(btn.getAttribute("data-id")));
    }
  };

  createNewNoteBtn.addEventListener("click", createNewNote);
  init();
});
