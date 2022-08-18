window.addEventListener("load", () => {
  const container = document.querySelector("#container");
  const createNewNoteBtn = document.querySelector(".create-new-note-btn");

  const init = () => {
    if (checkLsSupport()) {
      if (localStorage.getItem("notes") === null) {
        localStorage.setItem("notes", JSON.stringify([]));
      } else {
        getNotesFromLs().length !== 0 && writeNotesToHtml(getNotesFromLs());
      }
    }
  };

  const createNewNote = () => {
    let id = generatePrimaryKey();
    addNewNoteToLs(id);
  };

  const generatePrimaryKey = () => {
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
    const data = getNotesFromLs();
    data.push({
      id: id,
      title: "unnamed note",
      note: "",
      isEditable: true,
    });

    localStorage.setItem("notes", JSON.stringify(data));
    writeNotesToHtml(data);
  };

  const checkLsSupport = () => {
    if (typeof localStorage !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const writeNotesToHtml = (data) => {
    container.innerHTML = null;
    for (const note of data) {
      let readonly = !note.isEditable && "readonly";
      container.insertAdjacentHTML(
        "beforeend",
        `
          <div class="note">
            <div class="header">
              <input type="text" name="note_title" autocomplete="off" value="${note.title}" />
              <div class="buttons">
                <button type="button" data-id=${note.id}>
                  <i class='bx bx-italic'></i>
                </button>
                <button type="button" data-id=${note.id}>
                  <i class='bx bx-bold'></i>
                </button>
                <button type="button" data-id=${note.id} name="edit_btn">
                  <i class="bx bx-edit"></i>
                </button>
                <button type="button" data-id=${note.id} name="save_btn">
                  <i class='bx bxs-save'></i>
                </button>
                <button type="button" data-id=${note.id} name="remove_btn">
                  <i class="bx bx-trash"></i>
                </button>
              </div>
            </div>
            <textarea name="note_textarea" data-id=${note.id} ${readonly}>
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
    return JSON.parse(localStorage.getItem("notes"));
  };

  const removeNoteFromLs = (id) => {
    let index = null;
    const data = getNotesFromLs();
    data.forEach((note, i) => {
      if (note.id === parseInt(id)) {
        index = i;
      }
    });

    data.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(data));
    writeNotesToHtml(data);
  };

  const saveNoteToLs = (id, note) => {
    let index = null;
    const noteTextareas = document.querySelectorAll("[name=note_textarea]");
    const noteTitles = document.querySelectorAll("[name=note_title]");
    const data = getNotesFromLs();

    data.forEach((_, i) => {
      if (_.id === parseInt(id)) {
        index = i;
      }
    });

    data[index].title = noteTitles[index].value;
    data[index].note = noteTextareas[index].value;
    data[index].isEditable = note.isEditable;

    localStorage.setItem("notes", JSON.stringify(data));
    writeNotesToHtml(data);
  };

  const editNoteToLs = (id) => {
    const data = getNotesFromLs();

    data.forEach((note) => {
      if (note.id === parseInt(id)) {
        if (note.isEditable) {
          note.isEditable = false;
        } else {
          note.isEditable = true;
        }
        saveNoteToLs(id, note);
      }
    });
  };

  /* BUTTON EVENTS */

  const initButtonEvents = () => {
    const removeBtns = document.querySelectorAll("[name=remove_btn]");
    const saveBtns = document.querySelectorAll("[name=save_btn]");
    const editBtns = document.querySelectorAll("[name=edit_btn]");

    // REMOVE NOTE EVENT
    for (const btn of removeBtns) {
      btn.addEventListener("click", () => removeNoteFromLs(btn.getAttribute("data-id")));
    }

    // SAVE NOTE EVENT
    for (const btn of saveBtns) {
      btn.addEventListener("click", () => saveNoteToLs(btn.getAttribute("data-id")));
    }

    // EDIT NOTE EVENT
    for (const btn of editBtns) {
      btn.addEventListener("click", () => editNoteToLs(btn.getAttribute("data-id")));
    }
  };

  createNewNoteBtn.addEventListener("click", createNewNote);
  init();
});
